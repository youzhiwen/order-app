import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css']
})
export class PacksComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal)  { }

  ngOnInit(): void {
  }
  goBundle() {        
    this.router.navigate(['/bundle']);
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
}
