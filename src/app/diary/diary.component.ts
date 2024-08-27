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
  //list: string[] = ['<p>121212121212</p> <b>BOLD</b>', '2 запись', '3 запись'];
  private recordsService = inject(RecordsService);

  records: DiaryItem[] = this.recordsService
    .getKeys()
    .filter((key) => !key.includes('image'))
    .map((key) => {
      // записываем все записи в массив
      return {
        date: parseInt(key),
        content: this.recordsService.getRecord(key)!,
      };
    })
    .sort((a, b) => b.date - a.date); // сортировка массива от новых к старым

  constructor(private router: Router) {}

  handleMakeNewItem() {
    this.router.navigate([`/edit`]);
    console.log(this.records);
  }

  handleDeleteItem(date: number) {
    this.records = this.records.filter((element) => element.date !== date);
    console.log('event fired');
    console.log(this.records);
  }
}
