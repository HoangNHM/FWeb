import { Component, OnInit, Input } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-snode-sub',
  templateUrl: './snode-sub.component.html',
  styleUrls: ['./snode-sub.component.css']
})
export class SnodeSubComponent implements OnInit {

  @Input() node: Node;
  constructor() { }

  ngOnInit() {
  }

}
