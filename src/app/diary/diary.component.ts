import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../card/card.component';
import { RecordComponent } from '../record/record.component';
import { RecordsService } from '@/app/records.service';
import { Router } from '@angular/router';
import { DiaryItem } from '@/types/types';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [ButtonModule, RecordComponent, CardComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
})
export class DiaryComponent {
  list: string[] = ['<p>121212121212</p> <b>BOLD</b>', '2 запись', '3 запись'];
  private recordsService = inject(RecordsService);

  records: DiaryItem[] = this.recordsService
    .getKeys()
    .map((key) => {
      // записываем все записи в массив
      return {
        date: Date.parse(key),
        content: this.recordsService.getRecord(key)!,
      };
    })
    .sort((a, b) => b.date - a.date); // сортировка массива от новых к старым

  constructor(private router: Router) {}

  handleMakeNewItem() {
    this.router.navigate([`/edit`]);
  }
}
