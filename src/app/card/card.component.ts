import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DiaryItem } from '@/types/types';
import { Router } from '@angular/router';

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
  @Input() diaryItem: DiaryItem = {
    date: new Date(),
    content: '',
  };

  navigateToChange() {
    this.router.navigate([`/${this.date}`]);
  }
}
