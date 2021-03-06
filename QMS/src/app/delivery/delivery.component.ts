import { Component, OnInit } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  sales: Node = {
    id: 0,
    name: 'Sales',
    nav: '#sales'
  };
  contract_management: Node = {
    id: 1,
    name: 'Contract Management',
    nav: '#contract-management'
  };
  open_project: Node = {
    id: 1,
    name: 'Open Project',
    nav: '#open-project'
  };
  customer_support: Node = {
    id: 1,
    name: 'Customer Support',
    nav: '#customer-support'
  };
  selectedNode: Node;
  constructor() { }

  ngOnInit() {
  }

}
