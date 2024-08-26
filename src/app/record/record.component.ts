import { Component, inject, Input } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordsService } from '@/app/records.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [EditorModule, ButtonModule, FormsModule],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
})
export class RecordComponent {
  constructor(private router: Router) {}
  private recordsService = inject(RecordsService);
  //@Input() id = '';
  private route = inject(ActivatedRoute);
  text = '';

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.text = this.recordsService.getRecord(id.toString())!;
    console.log(id);
    console.log(this.route);
  }

  handleSave() {
    this.recordsService.pushRecord({ date: Date.now(), content: this.text });
    this.router.navigate(['/']);
  }
}
