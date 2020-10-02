import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class successAlertComponent implements OnInit {

  message = "Success message!";

  constructor() { }

  ngOnInit(): void {
  }

}
