import { Component } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [EditorModule, ButtonModule, FormsModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
})
export class RecordComponent {
  text = '89989898989898';
}
