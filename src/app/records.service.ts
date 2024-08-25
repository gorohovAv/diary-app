import { Injectable } from '@angular/core';
import { DiaryItem } from '@/types/types';

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

  getRecord(key: string) {
    return localStorage.getItem(key);
  }

  deleteRecord(item: DiaryItem) {
    localStorage.removeItem(item.date.toString());
  }

  pushRecord(item: DiaryItem) {
    localStorage.setItem(item.date.toString(), item.content);
  }

  updateRecord(oldItem: DiaryItem, newItem: DiaryItem) {
    localStorage.removeItem(oldItem.date.toString());
    localStorage.setItem(newItem.date.toString(), newItem.content);
  }
}
