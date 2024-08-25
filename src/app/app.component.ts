import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RecordComponent } from './record/record.component';
import { CardComponent } from './card/card.component';

type DiaryItem = {
  date: Date;
  content: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, RecordComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  list: string[] = ['<p>121212121212</p> <b>BOLD</b>', '2 запись', '3 запись'];
  constructor() {}
}
