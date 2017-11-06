import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Category } from '../../models/user';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category : Category = new Category();
 
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }
  onAddCategory():void{
    const token = localStorage.getItem('token');
    console.log(token);
    this.auth.addCategory(this.category,token)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
