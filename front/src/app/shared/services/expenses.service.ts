import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

constructor(private http: HttpClient) { }
  addExpense(expense: any) {
    return this.http.post('http://localhost:3000/newExpense', expense);
  }

  getExpensesByCategory(expense: any) {
    return this.http.post('http://localhost:3000/getExpenses/category', expense);
  }

  getExpenseLastWeek(expense: any) {
    return this.http.post('http://localhost:3000/getExpenses/lastWeek', expense);
  }

  getExpenses() {
    return this.http.get('http://localhost:3000/getExpenses/interval/:days');
  }
}
