import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../card/card.component';
import { RecordComponent } from '../record/record.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [ButtonModule, RecordComponent, CardComponent],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css',
})
export class DiaryComponent {
  list: string[] = ['<p>121212121212</p> <b>BOLD</b>', '2 запись', '3 запись'];
  constructor(private router: Router) {}

  handleMakeNewItem() {
    this.router.navigate([`/edit`]);
  }
}
