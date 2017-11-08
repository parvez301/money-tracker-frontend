export class User {
    constructor(email?: string, password?: string) {}
  }

export class Expense{
  constructor(category_id?:number,name?:string,money_spent?:string,is_recurring?:boolean){}
}

export class Category{
  constructor(name?:string){}
}