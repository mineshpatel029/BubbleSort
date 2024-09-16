import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArrayDataService } from '../array-data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // history: any[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.fetchHistory();
  // }

  // fetchHistory() {
  //   const url = 'https://sort-backend-kcjg.onrender.com/api/get-history';
  //   this.http.get<any[]>(url).subscribe(
  //     (data) => {this.history = data;
  //       console.log('Data Fetched:',data)
  //     }
  //     (error) => console.error('Failed to fetch history:', error)
  //   );
  // }

  arrays: any[] = [];

  constructor(private arrayDataService: ArrayDataService) {}

  ngOnInit(): void {
    this.arrayDataService.getArrays().subscribe(
      (data) => this.arrays = data,
      (error) => console.error('Failed to fetch array data:', error)
    );
  }
}
