import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  categories : any
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() : void{
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.getExpenseCategories(token)
      .then((categoriesSet) => {
        this.categories = categoriesSet.json()
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
