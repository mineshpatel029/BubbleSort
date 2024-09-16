// src/app/array-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrayDataService {
  private apiUrl = 'https://sort-backend-kcjg.onrender.com/api/get-arrays';

  constructor(private http: HttpClient) {}

  getArrays(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
