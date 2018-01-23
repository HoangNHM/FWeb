import {Component, OnInit, AfterViewInit} from '@angular/core';
import {CIRCULAR_ITEMS} from '../mock-home-circular-items';
import {Router} from '@angular/router';

@Component({
  selector: 'app-half-circular-menu',
  templateUrl: './half-circular-menu.component.html',
  styleUrls: ['./half-circular-menu.component.css'],
})
export class HalfCircularMenuComponent implements OnInit, AfterViewInit {
  circular_items = CIRCULAR_ITEMS;
  angle;
  delay_time;
  ele_angle = [];
  x_pos = [];
  y_pos = [];
  x_line_pos = [];
  y_line_pos = [];
  x_border_pos = [];
  y_border_pos = [];
  val = 1;
  settings = {
    'r1': 300, // largest
    'r2': 100, // main
    'r22': 15, // main border
    'r3': 20, // node
    't3': 4, // node border
    'r4': 150,
    'starting_angel': 0,
    'angel_difference': 180,
    'menu_element': this.circular_items
    // 'starting_angel': 0 - (360 * 50) / (2 * Math.PI * 300) / 2,
    // 'angel_difference': 180 + (360 * 50) / (2 * Math.PI * 300),
  };
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.angle = this.settings.angel_difference / (this.settings.menu_element.length - 1);
  }
  ngAfterViewInit() {
    const self = this;
    this.setPosition(1);
    this.drawExtra();
  }

  setPosition(val) {
    const self = this;
    $('.outer_container .main').css({
      'width': 2 * self.settings.r2 + 'px',
      'height': self.settings.r2 + 'px',
      'border-top-left-radius': self.settings.r2 + 'px',
      'border-top-right-radius': self.settings.r2 + 'px',
      'left': -self.settings.r2 + self.settings.r3 + 'px',
      'top': -self.settings.r2 + self.settings.r3 + 'px',
    });
    $('.outer_container ul li').each(function (i, element) {
      const elm = $(element);
      const itemId = elm.find('.item_id');
      const itemBorder = elm.find('.item_border');
      const itemLiner = elm.find('.liner');
      const itemDesc = elm.find('.item_desc');
      self.ele_angle[i] = (self.settings.starting_angel + self.angle * (i)) * Math.PI / 180;
      self.x_pos[i] = (self.settings.r1 * Math.sin(self.ele_angle[i]));
      self.y_pos[i] = (self.settings.r1 * Math.cos(self.ele_angle[i]));
      self.x_line_pos[i] = (self.settings.r1 * Math.sin(self.ele_angle[i])) - self.settings.r3;
      self.y_line_pos[i] = (self.settings.r1 * Math.cos(self.ele_angle[i])) + self.settings.r3;
      self.x_border_pos[i] = (self.settings.r1 * Math.sin(self.ele_angle[i])) + self.settings.t3;
      self.y_border_pos[i] = (self.settings.r1 * Math.cos(self.ele_angle[i]) - self.settings.t3);
      itemId.css({
        'width': 2 * self.settings.r3 + 'px',
        'height': 2 * self.settings.r3 + 'px',
        'top' : ((val === 0) ? 0 : -self.x_pos[i]) + 'px',
        'left' : ((val === 0) ? 0 : self.y_pos[i]) + 'px',
        /*'-webkit-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-moz-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-ms-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        '-o-transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',
        'transform': 'rotate(' + (90 - self.ele_angle[i] * 180 / Math.PI) + 'deg)',*/
        'line-height': 2 * self.settings.r3 + 'px',
        'z-index': 10,
      });
      itemId.click(function () {
        self.router.navigate([self.circular_items[i].nav]);
      });
      itemBorder.css({
        'width': 2 * self.settings.r3 + 'px',
        'height': 2 * self.settings.r3 + 'px',
        'top' : ((val === 0) ? 0 : -self.x_border_pos[i]) + 'px',
        'left' : ((val === 0) ? 0 : self.y_border_pos[i]) + 'px',
        'border': self.settings.t3 + 'px solid white',
        'z-index': 9,
      });
      itemLiner.css({
        'width': 2 * self.settings.r1 + 'px',
        'height': self.settings.r1 + 4 + 'px',
        'top' : ((val === 0) ? 0 : -self.settings.r1 + self.settings.r3) + 'px',
        'left' : ((val === 0) ? 0 : -self.settings.r1 + self.settings.r3) + 'px',
      });
      itemLiner.find('line').attr({
        'x1': self.settings.r1 + (self.settings.r4 - 5) * Math.cos(self.ele_angle[i]),
        'y1': self.settings.r1 - (self.settings.r4 - 5) * Math.sin(self.ele_angle[i]),
        'x2': self.settings.r1 - self.settings.r3 + self.y_line_pos[i],
        'y2': self.settings.r1 - self.settings.r3 - self.x_line_pos[i],
      });
      // descriptions
      if (self.y_pos[i] < -10) {
        itemDesc.css({
          'left' : (val === 0) ? 0 : self.y_pos[i] - 170 + 'px',
          'top' : (val === 0) ? 0 : -self.x_pos[i] - 20 + 'px',
        });
      } else if (self.y_pos[i] > 10) {
        itemDesc.css({
          'left' : (val === 0) ? 0 : self.y_pos[i] + 30 + 'px',
          'top' : (val === 0) ? 0 : -self.x_pos[i] - 20 + 'px',
        });
      } else {
        itemDesc.css({
          'left' : (val === 0) ? 0 : self.y_pos[i] - 85 + self.settings.r3 + 'px',
          'top' : (val === 0) ? 0 : -self.x_pos[i] - 35 + 'px',
        });
      }
    });
  }

  drawExtra() {
   const self = this;
    $('#c1').css({
      'width' : 2 * self.settings.r1 + 'px',
      'height' : self.settings.r1 + 'px',
      'border-top-left-radius': self.settings.r1 + 'px',
      'border-top-right-radius': self.settings.r1 + 'px',
      'top': -self.settings.r1 + self.settings.r3 + 'px',
      'left': -self.settings.r1 + self.settings.r3 + 'px',
      'z-index': 1,
    });
    $('#c2').css({
      'width' : 2 * self.settings.r4 + 'px',
      'height' : self.settings.r4 + 'px',
      'border-top-left-radius': self.settings.r4 + 'px',
      'border-top-right-radius': self.settings.r4 + 'px',
      'top': -self.settings.r4 + self.settings.r3 + 'px',
      'left': -self.settings.r4 + self.settings.r3 + 'px',
      'z-index': 9,
    });
    $('#c3').css({
      'width' : 2 * (self.settings.r2 + this.settings.r22) + 'px',
      'height' : self.settings.r2 + this.settings.r22 + 'px',
      'border-top-left-radius': self.settings.r2 + this.settings.r22 + 'px',
      'border-top-right-radius': self.settings.r2 + this.settings.r22 + 'px',
      'border': self.settings.r22 + 'px solid white',
      'border-bottom': 0,
      'left': -self.settings.r2 - this.settings.r22 + self.settings.r3 + 'px',
      'top': -self.settings.r2 - this.settings.r22 + self.settings.r3 + 'px',
      'z-index': 9,
    });
  }
}
