
import { Component, OnInit } from '@angular/core';
import { ArrayDataService } from '../array-data.service';

@Component({
  selector: 'app-array-table',
  templateUrl: './array-table.component.html',
  styleUrls: ['./array-table.component.css']
})
export class ArrayTableComponent implements OnInit {
  arrays: any[] = [];

  constructor(private arrayDataService: ArrayDataService) {}

  ngOnInit(): void {
    this.arrayDataService.getArrays().subscribe(
      (data) => this.arrays = data,
      (error) => console.error('Failed to fetch array data:', error)
    );
  }
}
