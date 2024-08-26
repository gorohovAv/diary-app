import { Injectable } from '@angular/core';
import { DiaryItem } from '@/types/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  private storageSub = new BehaviorSubject<string[]>(
    this.getItemsFromLocalStorage()
  );
  storageChanges$ = this.storageSub.asObservable();

  private getItemsFromLocalStorage(): string[] {
    const items = localStorage.getItem('myItems');
    return items ? JSON.parse(items) : [];
  }

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

  deleteRecord(date: number) {
    localStorage.removeItem(date.toString());
  }

  pushRecord(item: DiaryItem) {
    localStorage.setItem(item.date.toString(), item.content);
  }

  updateRecord(oldItem: DiaryItem, newItem: DiaryItem) {
    localStorage.removeItem(oldItem.date.toString());
    localStorage.setItem(newItem.date.toString(), newItem.content);
  }
}
