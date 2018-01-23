import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TOGGLE_ITEMS} from '../mock-home-menu-toggle';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent implements OnInit, AfterViewInit {
  toggle_items = TOGGLE_ITEMS;
  constructor() { }

  ngOnInit() {
    const theMenu = document.getElementById('menu').style.display = 'none';
  }

  ngAfterViewInit(): void {
    const self = this;
    const theToggle = document.getElementById('toggle');
    const theMenu = document.getElementById('menu');
    theToggle.onclick = function() {
      this.classList.toggle('change');
      if (theMenu.style.display === 'none') {
        theMenu.style.display = 'block';
      } else {
        theMenu.style.display = 'none';
      }
    };
  }
}
