import { Component, OnInit, Input } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-hpage-items',
  templateUrl: './hpage-items.component.html',
  styleUrls: ['./hpage-items.component.css']
})
export class HpageItemsComponent implements OnInit {

  @Input() node: Node;
  constructor() { }

  ngOnInit() {
  }

}
