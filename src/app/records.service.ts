import { Injectable } from '@angular/core';
import { DiaryItem } from '@/types/types';

// сервис для работы с localStorage
@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  constructor() {}

  getKeys(): string[] {
    let keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i)!);
    }
    return keys;
  }
  // изображения будут хранится под тем же ключем + "image"
  // 12122image
  saveImage(key: string, imageBase64: string): void {
    localStorage.setItem(key.concat('image'), imageBase64);
  }

  getImage(key: string): string | null {
    return localStorage.getItem(key.concat('image'));
  }

  getRecord(key: string) {
    return localStorage.getItem(key);
  }

  deleteRecord(date: number) {
    localStorage.removeItem(date.toString());
    localStorage.removeItem(date.toString().concat('image'));
  }

  pushRecord(item: DiaryItem) {
    localStorage.setItem(item.date.toString(), item.content);
  }

  updateRecord(oldItem: DiaryItem, newItem: DiaryItem) {
    localStorage.removeItem(oldItem.date.toString());
    localStorage.setItem(newItem.date.toString(), newItem.content);
  }
}
