import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AddCategoryComponent } from './components/add-category/add-category.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StatusComponent,
    SidebarNavigationComponent,
    ExpensesComponent,
    AddExpenseComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    //BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'dashboard',
        component: StatusComponent,
        canActivate:
        [EnsureAuthenticated]
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
        canActivate:
        [EnsureAuthenticated]
      },
      {
        path: 'add-expense',
        component: AddExpenseComponent,
        canActivate:
        [EnsureAuthenticated]
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        canActivate:
        [EnsureAuthenticated]
      }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }