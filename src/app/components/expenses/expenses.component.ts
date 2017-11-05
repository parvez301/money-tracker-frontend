import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expense_list:any
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.getExpenses(token)
      .then((expenseSet) => {
        this.expense_list = expenseSet.json()
        console.log(this.expense_list);
        /*categories._body.forEach(element => {
          console.log(element.name);
        });*/
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

}
