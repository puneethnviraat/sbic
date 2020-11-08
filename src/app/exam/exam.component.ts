import { Component, OnInit } from '@angular/core';
import {  HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }

}
