import {Component, OnInit, Input} from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-nine-menu-ele',
  templateUrl: './nine-menu-ele.component.html',
  styleUrls: ['./nine-menu-ele.component.css']
})
export class NineMenuEleComponent implements OnInit {

  @Input() node: Node;
  constructor() {
  }

  ngOnInit() {
  }

}
