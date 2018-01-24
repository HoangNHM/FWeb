import { Component, OnInit } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-snode',
  templateUrl: './snode.component.html',
  styleUrls: ['./snode.component.css']
})
export class DeliveryServiceHexagonComponent implements OnInit {

  bpo: Node = {
    id: 0,
    name: 'BPO',
    nav: '#bpo'
  };
  engineering: Node = {
    id: 0,
    name: 'Engineering',
    nav: 'engineering'
  };
  aspice: Node = {
    id: 0,
    name: 'A-SPICE',
    nav: '#aspice'
  };
  migration: Node = {
    id: 0,
    name: 'Migration',
    nav: '#ams'
  };
  package: Node = {
    id: 0,
    name: 'Package Implementation',
    nav: '#ams'
  };
  infra: Node = {
    id: 0,
    name: 'Infrastructure Maintenance',
    nav: '#ams'
  };
  cadcae_modeling: Node = {
    id: 0,
    name: 'CAD/CAE Modeling',
    nav: '#ams'
  };
  delivery_service: Node = {id: 1, name: 'Delivery Service', nav: 'delivery'};

  constructor() { }

  ngOnInit() {
  }

}
