import { Component, HostListener, Renderer, ElementRef, Inject, Input, ViewChild, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { LoggedinService } from './service/loggedin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Front-End';
  // public show_dialog : boolean = false;
  data: any = {};
  public button_name: any = 'Show Login Form!';
  @ViewChild('hasMenu') hasMenu: ElementRef;
  @ViewChild('sideNavBar') sideNavBar: ElementRef;
  @ViewChild('mainContainer') mainContainer: ElementRef;
  @Input() scrollPoint: number;

  // this is added for temporary working of the login/ forgot password redirection logic along with the roles.
  // this should be removed while integrating into development
  public isLoggedIn = false;
  public isForgotPassword = false;
  public isSuperAdmin = false;
  public isBrandAdmin = false;
  public isSalesRep = false;
  public isSpeaker = false;
  public isMarketing = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer,
    private el: ElementRef,
    public router: Router,
    public loggedInService: LoggedinService
  ) {
    this.data.hv = false;
    // console.log(this.router.url);
    // const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));



    // temporary make this on for All Visibility;
    //this.isSuperAdmin = this.isBrandAdmin = this.isSalesRep = this.isSpeaker = this.isMarketing = true;

  }

  ngOnInit() {
    const allSubs = this.el.nativeElement.querySelectorAll('.has-submenu');
    const allNavs = this.el.nativeElement.querySelectorAll('.navbar-nav li');
    // console.log(allSubs);
    allSubs.forEach(element => {
      element.addEventListener("click", function (e) {
        allNavs.forEach(elm => {
          if (element != elm) {
            elm.className = "has-submenu";
          }
        });
        console.log(element.className);
        element.className = (element.className == "has-submenu activeNav") ? "has-submenu" : "has-submenu activeNav";
      });
    });

    console.log(this.loggedInService.userType);


    // logic for roles management
    if (this.loggedInService.userType.toLowerCase().indexOf('super') > -1) {
      this.isSuperAdmin = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('brand') > -1) {
      this.isBrandAdmin = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('sales') > -1) {
      this.isSalesRep = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('speaker') > -1) {
      this.isSpeaker = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('market') > -1) {
      this.isMarketing = true;
    }

    console.log(this.router.url);
    // this is added for temporary working of the login redirection logic
    if (this.router) {
      this.router.events.subscribe((event: any) => {
        // console.log(event);
        if (event) {
          if (event.url) {
            if (event.url === '/' || event.url === '/login') {
              this.isLoggedIn = false;
            } else if (event.url.indexOf('/login') < 0 && event.url.indexOf('/forgot-password') < 0) {
              this.isLoggedIn = true;
            }

            if (event.url && event.url.indexOf('/forgot-password') > -1) {
              this.isForgotPassword = true;
            } else if (event.url && event.url.indexOf('/login') > -1) {
              this.isForgotPassword = false;
            }

            if (event.url.indexOf('/dashboard') > -1) {
              this.loggedInService.setCurrentPageTitle = 'Dashboard';
            } else if (event.url.indexOf('/calender') > -1 || event.url.indexOf('/trainingdetail') > -1 ||  event.url.indexOf('/expenses') > -1) {
              this.loggedInService.setCurrentPageTitle = 'Calendar';
            } else if (event.url.indexOf('/training') > -1 || event.url.indexOf('/trainingdetail') > -1) {
              this.loggedInService.setCurrentPageTitle = 'Training';
            }
            else if (event.url.indexOf('/mystory') > -1) {
              this.loggedInService.setCurrentPageTitle = 'My Story';
            }
            else if (event.url.indexOf('/myprofile') > -1) {
              this.loggedInService.setCurrentPageTitle = 'myprofile';
            }
            else if (event.url.indexOf('/trainingdetail') > -1) { 
              this.loggedInService.setCurrentPageTitle = 'Training Detail';
            }
            else if (event.url.indexOf('/event') > -1) { 
              this.loggedInService.setCurrentPageTitle = 'Event';
            }
            else if (event.url.indexOf('/expenses') > -1) {
              this.loggedInService.setCurrentPageTitle = 'Expenses';
            }

          }



        }
      });
    }

  }

  public SalesRepUser = () => {
    console.log(this.loggedInService.userType);


    // logic for roles management
    if (this.loggedInService.userType.toLowerCase().indexOf('super') > -1) {
      this.isSuperAdmin = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('brand') > -1) {
      this.isBrandAdmin = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('sales') > -1) {
      this.isSalesRep = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('speaker') > -1) {
      this.isSpeaker = true;
    } else if (this.loggedInService.userType.toLowerCase().indexOf('market') > -1) {
      this.isMarketing = true;
    }

    return this.isSalesRep;
  }

  public rmClass(obj) {
    // console.log(obj);
    obj.forEach(element => {
      console.log(element.nativeElement);
    });
  }
  public isTouchDevice() {
    return typeof window.ontouchstart !== 'undefined';
  }
  public onHover() {
    this.data.hv = true;
  }

  public offOver() {
    this.data.hv = false;
  }

  public sidenavScroll(e) {
    console.log(e);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // // console.log(this.sideNavBar);
    // const sideNavHeight = this.sideNavBar.nativeElement.scrollHeight - window.innerHeight;
    // const windowScroll = window.scrollY;
    // console.log('height', windowScroll);
    // console.log('wht', window.innerHeight);
    // //console.log('owht', window.outerHeight);
    // console.log(this.sideNavBar.nativeElement.scrollHeight);
    // if (windowScroll >= sideNavHeight) {
    //   this.renderer.setElementClass(this.sideNavBar.nativeElement, 'sticky-nav', true);
    //   this.renderer.setElementStyle(this.sideNavBar.nativeElement, 'bottom', 0 + 'px');
    // } else {
    //   this.renderer.setElementClass(this.sideNavBar.nativeElement, 'sticky-nav', false);
    //   this.renderer.setElementStyle(this.sideNavBar.nativeElement, 'bottom', '0px');
    // }

  }
  // toggle() { 
  //   this.show_dialog = !this.show_dialog; 
  //   // CHANGE THE TEXT OF THE BUTTON.
  //   if(this.show_dialog) 
  //     this.button_name = "Hide Login Form!";
  //   else
  //     this.button_name = "Show Login Form!";
  // }



  menuListClose(event) {
    event.target.parentNode.parentNode.parentElement.parentElement.parentElement.parentElement.classList.remove('custom-hide', 'show', 'navbar-collapse', 'collapse');
  }
  menuListCloseImg(event) {
    event.target.parentNode.parentNode.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('custom-hide', 'show', 'navbar-collapse', 'collapse');
  }

}
