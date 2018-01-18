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
  }

  ngAfterViewInit(): void {
    const self = this;
    const theToggle = document.getElementById('toggle');
    const theMenu = document.getElementById('menu');
    theToggle.onclick = function() {
      if (theMenu.style.display === 'none') {
        theMenu.style.display = 'block';
      } else {
        theMenu.style.display = 'none';
      }
    };
  }

/*// hasClass
  hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }
// addClass
  addClass(elem, className) {
    if (!this.hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
  }
// removeClass
  removeClass(elem, className) {
    let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (this.hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }
// toggleClass
  toggleClass(elem, className) {
    let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (this.hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + className + ' ' , ' ' );
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      elem.className += ' ' + className;
    }
  }*/

}
