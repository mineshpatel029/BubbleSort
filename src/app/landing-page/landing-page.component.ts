import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
  
export class LandingPageComponent {
  strings: string[] = [
    'Bubble Sort is a fundamental sorting algorithm known for its simplicity and ease of implementation.',
    'It operates by repeatedly stepping through the list to be sorted, comparing adjacent elements and swapping them if they are in the wrong order.',
    'This process continues until no swaps are needed, indicating that the list is sorted.'
  ];
  
  typeSpeed = 30;
  backSpeed = 20; 
  loop = true; 

  constructor(private router: Router) {}

  navigateToVisualizer() {
    this.router.navigate(['/visualizer']);
  }
}
