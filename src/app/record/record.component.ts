import { Component, inject, Input } from '@angular/core';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from '@/app/records.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    EditorModule,
    ButtonModule,
    FormsModule,
    FileUploadModule,
    ToastModule,
  ],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
  providers: [MessageService],
})
export class RecordComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  private recordsService = inject(RecordsService);
  id!: string;
  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;
  text = '';
  /*
  ngOnInit() {
    this.text = this.recordsService.getRecord(this.id.toString())!;
    console.log(this.id);
  } */

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      this.text = this.recordsService.getRecord(this.id)!;
      console.log(this.id);
    });
  }

  handleSave() {
    const timestamp = Date.now(); // требуется для соответствия таймстемпа для картинки и заметки в localStorage
    this.recordsService.pushRecord({ date: timestamp, content: this.text });
    this.router.navigate(['/']);
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result as string;
        this.recordsService.saveImage(timestamp.toString(), imageBase64);
        console.log(this.id);
        this.uploadedImageUrl = this.recordsService.getImage(this.id);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onFileSelect(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
}
