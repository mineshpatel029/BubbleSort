import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
  
export class LandingPageComponent {
  // carouselItems: string[] = ['Item 1', 'Item 2', 'Item 3']; 
  constructor(private router: Router) {}

  navigateToVisualizer() {
    this.router.navigate(['/visualizer']);
  }
}
