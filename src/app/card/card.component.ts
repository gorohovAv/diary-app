import { Component, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DiaryItem } from '@/types/types';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private router: Router) {}
  @Input() content: string = '';
  @Input() date: number = 0;
  /*
  @Input() diaryItem: DiaryItem = {
    date: 0,
    content: '',
  }; */

  get formattedDate(): string {
    const dateObj = new Date(this.date);
    return dateObj.toLocaleDateString(); // Преобразование для корректного отображения
  }

  private recordsService = inject(RecordsService);

  navigateToChange() {
    this.router.navigate([`/edit/${this.date}`]);
  }

  handleDelete() {
    this.recordsService.deleteRecord(this.date);
  }
}
