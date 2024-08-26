import { Routes, UrlSegment } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { DiaryComponent } from './diary/diary.component';

function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

// Матчер для проверки, что часть пути является датой(timestamp)
function timestampMatcher(url: UrlSegment[]) {
  if (url.length === 1 && isNumeric(url[0].path)) {
    return { consumed: url };
  }
  return null;
}

export const routes: Routes = [
  { path: '', component: DiaryComponent },
  {
    path: 'edit',
    component: RecordComponent,
    children: [{ matcher: timestampMatcher, component: RecordComponent }],
  },
];
