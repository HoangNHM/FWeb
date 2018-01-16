import {Component, OnInit, Input, AfterViewInit, AfterContentInit} from '@angular/core';
import {CIRCULAR_ITEMS} from '../mock-home-circular-items';
import * as $ from 'jquery';

@Component({
  selector: 'app-half-circular-menu',
  templateUrl: './half-circular-menu.component.html',
  styleUrls: ['./half-circular-menu.component.css'],
})
export class HalfCircularMenuComponent implements OnInit, AfterViewInit, AfterContentInit {
  circular_items = CIRCULAR_ITEMS;
  angle;
  delay_time;
  ele_angle = [];
  x_pos = [];
  y_pos = [];
  x_border_pos = [];
  y_border_pos = [];
  val = 1;
  settings = {
    'r1': 300,
    'r2': 100,
    'r22': 20,
    'r3': 20,
    't3': 5,
    'starting_angel': 0,
    // 'starting_angel': 0 - (360 * 50) / (2 * Math.PI * 300) / 2,
    // 'angel_difference': 180 + (360 * 50) / (2 * Math.PI * 300),
    'angel_difference': 180,
    'menu_element': this.circular_items
  };
  constructor() {
  }
  ngOnInit() {
    this.angle = this.settings.angel_difference / (this.settings.menu_element.length - 1);
  }
  ngAfterContentInit() {
  }
  ngAfterViewInit() {
    this.setPosition(1);
    this.drawExtra();
  }

  setPosition(val) {
    const self = this;
    $('.outer_container button').css({
      'width': self.settings.r2 * 2,
      'height': self.settings.r2,
      'border-top-left-radius': self.settings.r2,
      'border-top-right-radius': self.settings.r2,
      'left': -self.settings.r2 + self.settings.r3 + self.settings.t3 / 2,
      'top': -self.settings.r2 + self.settings.r3 + self.settings.t3,
    });
    $('.outer_container ul li').each(function (i, element) {
      const elm = $(element);
      const itemId = elm.find('.item_id');
      const itemBorder = elm.find('.item_border');
      const itemDesc = elm.find('.item_desc');
      self.ele_angle[i] = (self.settings.starting_angel + self.angle * (i)) * Math.PI / 180;
      self.x_pos[i] = (self.settings.r1 * Math.sin(self.ele_angle[i]));
      self.y_pos[i] = (self.settings.r1 * Math.cos(self.ele_angle[i]));
      self.x_border_pos[i] = (self.settings.r1 * Math.sin(self.ele_angle[i])) + self.settings.t3;
      self.y_border_pos[i] = (self.settings.r1 * Math.cos(self.ele_angle[i]) - self.settings.t3);
      itemId.css({
        'width': 2 * self.settings.r3 + 'px',
        'height': 2 * self.settings.r3 + 'px',
        'top' : ((val === 0) ? 0 : -self.x_pos[i]) + 'px',
        'left' : ((val === 0) ? 0 : self.y_pos[i]) + 'px',
        '-webkit-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-moz-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-ms-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-o-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        'transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        'line-height': 2 * self.settings.r3 + 'px',
      });
      itemBorder.css({
        'width': 2 * self.settings.r3 + 'px',
        'height': 2 * self.settings.r3 + 'px',
        'top' : ((val === 0) ? 0 : -self.x_border_pos[i]) + 'px',
        'left' : ((val === 0) ? 0 : self.y_border_pos[i]) + 'px',
        'border': self.settings.t3 + 'px solid white',
        '-webkit-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-moz-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-ms-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-o-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        'transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
      });
      if (self.y_pos[i] < 0) {
        itemDesc.css({
          'left' : (val === 0) ? 0 : self.y_pos[i] - 170,
          'top' : (val === 0) ? 0 : -self.x_pos[i] - 20,
        });
      } else {
        itemDesc.css({
          'left' : (val === 0) ? 0 : self.y_pos[i] + 30,
          'top' : (val === 0) ? 0 : -self.x_pos[i] - 20,
        });
      }
    });
  }

  drawExtra() {
   const self = this;
    $('#c1').css({
      'width' : 2 * self.settings.r1,
      'height' : self.settings.r1 ,
      'border-top-left-radius': self.settings.r1,
      'border-top-right-radius': self.settings.r1,
      'top': 0 - self.settings.r1 + self.settings.r3,
      'left': 0 - self.settings.r1 + self.settings.r3 + 5
    });
    $('#c2').css({
      'width' : self.settings.r1,
      'height' : self.settings.r1 / 2,
      'border-top-left-radius': self.settings.r1 / 2,
      'border-top-right-radius': self.settings.r1 / 2,
      'top': 0 - (self.settings.r1 / 2 - (self.settings.r2 + 4)) - (self.settings.r1 / 2 - self.settings.r2),
      'left': 0 - self.settings.r1 / 2 + self.settings.r3 + 5
    });
    $('#c3').css({
      'width' : 2 * (self.settings.r2 + this.settings.r22),
      'height' : self.settings.r2 + this.settings.r22,
      'border-top-left-radius': self.settings.r2 + this.settings.r22,
      'border-top-right-radius': self.settings.r2 + this.settings.r22,
      'border': self.settings.r22 + 'px solid white',
      'border-bottom': 0,
      'left': -self.settings.r2 - this.settings.r22 + self.settings.r3 + self.settings.t3 / 2,
      'top': -self.settings.r2 - this.settings.r22 + self.settings.r3 + self.settings.t3,
      'z-index': 9,
    });
    /*width: 300px;
    height: 150px;
    border-top-left-r1: 150px;
    border-top-right-r1: 150px;
    top: -100px;
    left: -120px;*/
  }
}
