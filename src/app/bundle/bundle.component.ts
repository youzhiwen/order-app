import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'app-bundle',templateUrl: './bundle.component.html'})
export class BundleComponent implements OnInit {
  fillColor: string;
  
  constructor(
    private router: Router, private modalService: NgbModal) {
  }
  ngOnInit(): void {
  }
	goBundle() {        
    this.router.navigate(['/packs']);
}
  OnClickReturnModal(returnBundle){
    this.modalService.open(returnBundle); 
  }

  OnClickSkip(skipOrders){
    this.modalService.open(skipOrders); 
  }
  returnToOrderList() {
      this.router.navigate(['/home']);
    }
  
  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
