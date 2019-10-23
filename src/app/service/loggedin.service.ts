import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {

  public userType: string = 'SuperAdmin';
  public currentPageTitle: string = 'Dashboard';

  constructor() { }

  public set setUserType(value: string) {
    this.userType = value;
  }

  public get getUserType(): string {
    return this.userType;
  }

  public set setCurrentPageTitle(value: string) {
    this.currentPageTitle = value;
  }

  public get getCurrentPageTitle(): string {
    return this.currentPageTitle;
  }
}
