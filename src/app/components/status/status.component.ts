import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, getDataList} from './data';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  single: any[];
  multi: any[];
  data_sets : any[];
  
  view: any[] = [700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Category';
  showYAxisLabel = true;
  yAxisLabel = 'Money Spent';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  isLoggedIn: boolean = false;
  constructor(private auth: AuthService,private router: Router) {
    Object.assign(this, {single})
  }
  onSelect(event) {
    console.log(event);
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token)
      .then((user) => {
        console.log(user.json());
        if (user.json().status === 'success') {
          this.isLoggedIn = true;
          console.log(token)
          this.auth.fetchExpenses(token)
          .then((expense_list) => {
            console.log(expense_list._body);
            expense_list = expense_list._body;
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  getTokenFromLoclaStorage() {
    return localStorage.getItem('token');
  }


  logOut() {
    if (this.getTokenFromLoclaStorage()) {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
      return false;
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

}