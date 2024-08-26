import { Routes, UrlSegment } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { DiaryComponent } from './diary/diary.component';

export const routes: Routes = [
  { path: '', component: DiaryComponent },
  {
    path: 'edit',
    component: RecordComponent,
    children: [{ path: ':id', component: RecordComponent }],
  },
];
