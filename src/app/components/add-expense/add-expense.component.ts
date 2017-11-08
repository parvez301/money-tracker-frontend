import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Expense } from '../../models/user';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  categories : any
  message : string;
  expense:Expense = new Expense();
  constructor(private auth: AuthService,private router: Router) { }
  onaddExpense(): void {
    //console.log(token);
    const token = localStorage.getItem('token');
    console.log(token);
    this.auth.addExpense(this.expense,token)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  ngOnInit() : void{
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      this.auth.getExpenseCategories(token)
      .then((categoriesSet) => {
        this.categories = categoriesSet.json()
        console.log(this.categories);
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
