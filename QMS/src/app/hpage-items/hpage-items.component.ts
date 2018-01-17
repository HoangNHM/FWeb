import { Component, OnInit } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-hpage-items',
  templateUrl: './hpage-items.component.html',
  styleUrls: ['./hpage-items.component.css']
})
export class HpageItemsComponent implements OnInit {

  cOrganization: Node = {
    id: 0,
    name: 'Corporate Organization',
    link: '#cOrganization'
  };

  finance: Node = {
    id: 0,
    name: 'Finance',
    link: '#finance'
  };

  hResources: Node = {
    id: 0,
    name: 'Human Resources',
    link: '#hResources'
  };

  itManagement: Node = {
    id: 0,
    name: 'IT Management',
    link: '#itManagement'
  };

  riskCompliance: Node = {
    id: 0,
    name: 'Risk & Compliance',
    link: '#riskCompliance'
  };

  adminAsset: Node = {
    id: 0,
    name: 'Administration & Assets',
    link: '#adminAsset'
  };

  prm: Node = {
    id: 0,
    name: 'Public Relation Management',
    link: '#prm'
  };

  ccm: Node = {
    id: 0,
    name: 'Corporate Culture Management',
    link: '#ccm'
  };

  qkm: Node = {
    id: 0,
    name: 'Quality & Knowledge Management',
    link: '#qkm'
  };
  constructor() { }

  ngOnInit() {
  }

}
