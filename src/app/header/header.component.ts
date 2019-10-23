import { Component, OnInit } from '@angular/core';
import { LoggedinService } from '../service/loggedin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainTitle;
  public _pageTitle: string;
  public get pageTitle() {
    return this._pageTitle;
  };
  
  public set pageTitle(value: string) {
    this._pageTitle = value;
  };

  constructor(private loggedInService: LoggedinService, private router: Router) {
    this.pageTitle = this.loggedInService.currentPageTitle;
   }

  ngOnInit() {

    this.pageTitle = this.loggedInService.currentPageTitle;

    if (this.router) {
      this.router.events.subscribe((event: any) => {
        // console.log(event);
        if (event) {
          if (event.url) { 
            if (event.url.indexOf('/dashboard') > -1) {
              this.mainTitle = ''
              this.pageTitle = 'Dashboard';
              
            }
            else if (event.url.indexOf('/expenses') > -1) {
              this.mainTitle = 'CALENDAR';
              this.pageTitle = 'Expenses Report';
              
            } 
            else if (event.url.indexOf('/event') > -1) {
              this.mainTitle = 'CALENDAR';
              this.pageTitle = 'Spacific Events'; 
            } 
            else if (event.url.indexOf('/calender') > -1) {
              this.mainTitle = 'CALENDAR';
              this.pageTitle = 'Your Events'; 
            }
            else if (event.url.indexOf('/trainingdetail') > -1) {
              this.mainTitle = 'Training';
              this.pageTitle = 'Specific Training'; 
            }    
            else if (event.url.indexOf('/training') > -1) { 
              this.mainTitle = 'Training';
              this.pageTitle = 'Training Materials';
            }  
            else if (event.url.indexOf('/mystory') > -1) { 
              this.mainTitle = 'My Story';
              this.pageTitle = 'My Story'; 
            }  
            else if (event.url.indexOf('/myprofile') > -1) {
              this.mainTitle = 'My Profile';
              this.pageTitle = 'User Details'; 
            }
            
          }



        }
      });
    }
  }

}
