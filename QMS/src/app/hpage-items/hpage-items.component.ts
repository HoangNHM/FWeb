import { Component, OnInit, Input } from '@angular/core';
import {Node} from '../node';
import { LINE_ITEMS } from '../mock-home-line-items';

@Component({
  selector: 'app-hpage-items',
  templateUrl: './hpage-items.component.html',
  styleUrls: ['./hpage-items.component.css']
})
export class HpageItemsComponent implements OnInit {

  line_items = LINE_ITEMS;
  @Input() node: Node;
  constructor() { }

  ngOnInit() {
  }

}
