import { Component, OnInit, Input } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-snode-main',
  templateUrl: './snode-main.component.html',
  styleUrls: ['./snode-main.component.css']
})
export class SnodeMainComponent implements OnInit {

  @Input() node: Node;
  constructor() { }

  ngOnInit() {
  }

}
