import { Component, OnInit } from '@angular/core';
import {Node} from '../node';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  nodes: Node[] = [
    {id: 1, name: 'Standard', nav: 'standard'},
    {id: 6, name: 'Staff Augmentation', nav: 'staff-augmentation'},
    {id: 5, name: 'Maintenance', nav: 'maintenance'},
    {id: 2, name: 'Light', nav: 'light'},
    {id: 3, name: 'Very Light', nav: 'very-light'},
    {id: 4, name: 'Scrum', nav: 'scrum'},
  ];
  engineering: Node = {id: 1, name: 'Engineering', nav: 'engineering'};
  constructor() { }

  ngOnInit() {
  }

}
