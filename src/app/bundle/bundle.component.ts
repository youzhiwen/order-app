import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({selector: 'app-bundle',templateUrl: './bundle.component.html'})
export class BundleComponent implements OnInit {
  
  constructor(
    private router: Router) {
  }
  ngOnInit(): void {
  }
  
  returnToOrderList() {
        this.router.navigate(['/home']);
    }
}
