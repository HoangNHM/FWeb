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
    name: 'Package Impl',
    link: '#ams'
  };
  infra: Node = {
    id: 0,
    name: 'Infrastructure',
    link: '#ams'
  };
  constructor() { }

  ngOnInit() {
  }

}
