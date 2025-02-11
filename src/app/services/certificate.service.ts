import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private storageKey = 'certificateData';

  constructor() {}

  saveData(data: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  loadData(): any {
    const savedData = localStorage.getItem(this.storageKey);
    return savedData ? JSON.parse(savedData) : null;
  }

  saveImage(key: string, value: string | ArrayBuffer | null): void {
    const savedData = this.loadData() || {};
    savedData[key] = value;
    this.saveData(savedData);
  }
}
