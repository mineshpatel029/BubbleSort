import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent {
  array: number[] = [];
  animationDelay: number = 100;

  generateArray() {
    this.array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 10);
  }

  async sortArray() {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
          await this.delay(this.animationDelay);
        }
      }
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
