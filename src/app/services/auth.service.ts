import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User,Expense,Category } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:5000/auth';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {}
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
  addExpense(expense: Expense, token): Promise<any> {
    console.log(expense);
    let url: string = `${this.BASE_URL}/user/add-expense`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.post(url, expense,{headers: headers}).toPromise();
  }
  ensureAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}/status`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }

  fetchExpenses(token): Promise<any> {
    let url: string = `${this.BASE_URL}/user/expenses`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  getExpenseCategories(token): Promise<any> {
    let url: string = `${this.BASE_URL}/user/categories`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  getExpenses(token): Promise<any> {
    let url: string = `${this.BASE_URL}/user/expenses`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    console.log(token);
    return this.http.get(url, {headers: headers}).toPromise();
  }
  graphData(token): Promise<any> {
    let url: string = `${this.BASE_URL}/user/dashboard`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  addCategory(category:Category,token): Promise<any> {
    let url: string = `${this.BASE_URL}/user/add-category`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    console.log(headers);
    return this.http.post(url, category,{headers : headers}).toPromise();
  }
}