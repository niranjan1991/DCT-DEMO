import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  selected = 'upcoming';
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    console.log('Dialog result PAPA');
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dailog-content.html',
  styleUrls: ['./calender.component.css']

})
export class DialogContentExampleDialog { 
  foods : {
    name: 'orange',
    color : 'grey'
  }
}
