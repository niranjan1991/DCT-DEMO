import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }
  goBack(){
    this._location.back();
  }

}
