// src/app/visualizer.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent {
  array: number[] = [];
  animationDelay: number = 100;

  constructor(private http: HttpClient,private router : Router) {}

  generateArray() {
    this.array = Array.from({ length: 30 }, () => Math.floor(Math.random() * 300) + 10);
  }

  async sortArray() {

    const generatedArray = [...this.array];


    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
          await this.delay(this.animationDelay);
        }
      }
    }

    // Save the original (generated) and sorted arrays
    this.saveArrayData(generatedArray, this.array);
  }

  saveArrayData(generatedArray: number[], sortedArray: number[]) {

    const url = 'https://sort-backend-kcjg.onrender.com/api/save-array';
    this.http.post(url, { generatedArray, sortedArray }).subscribe(
      (response) => console.log('Array data saved successfully:', response),
      (error) => console.error('Failed to save array data:', error)
    );
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  viewHistory(): void{
    this.router.navigate(['/history']);
  }
}
