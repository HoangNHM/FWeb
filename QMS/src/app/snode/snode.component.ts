import { Component, OnInit } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-snode',
  templateUrl: './snode.component.html',
  styleUrls: ['./snode.component.css']
})
export class SnodeComponent implements OnInit {

  bpo: Node = {
    id: 0,
    name: 'BPO',
    link: '#bpo'
  };
  software: Node = {
    id: 0,
    name: 'Software',
    link: '#software'
  };
  ams: Node = {
    id: 0,
    name: 'AMS',
    link: '#ams'
  };
  migration: Node = {
    id: 0,
    name: 'Migration',
    link: '#ams'
  };
  package: Node = {
    id: 0,
    name: 'Package Implementation',
    link: '#ams'
  };
  infra: Node = {
    id: 0,
    name: 'Infrastructure Maintenance',
    link: '#ams'
  };
  cadcae_modeling: Node = {
    id: 0,
    name: 'CAD/CAE Modeling',
    link: '#ams'
  };
  constructor() { }

  ngOnInit() {
  }

}
