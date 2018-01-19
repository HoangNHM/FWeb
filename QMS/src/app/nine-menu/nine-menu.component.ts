import {Component, OnInit} from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-nine-menu',
  templateUrl: './nine-menu.component.html',
  styleUrls: ['./nine-menu.component.css']
})
export class NineMenuComponent implements OnInit {

  nodes: Node[] = [
    {id: 7, name: 'Corporate Organization', nav: 'corporate-organization'},
    {id: 8, name: 'Finance', nav: 'finance'},
    {id: 9, name: 'Human Resource', nav: 'human-resource'},
    {id: 10, name: 'IT Management', nav: 'it-management'},
    {id: 11, name: 'Risk & Compliance Management', nav: 'risk-compliance'},
    {id: 12, name: 'Administration & Assets', nav: 'administration-assets'},
    {id: 13, name: 'Public Relation Management', nav: 'public-relation'},
    {id: 14, name: 'Corporate Culture Management', nav: 'corporate-culture'},
    {id: 15, name: 'Quality & Knowledge Management', nav: 'quality-knowledge'}
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
