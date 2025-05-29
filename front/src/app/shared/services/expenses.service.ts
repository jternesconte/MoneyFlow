import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

constructor(private http: HttpClient) { }
  addExpense(expense: any) {
    return this.http.post('http://localhost:3000/api/expense/newExpense', expense);
  }

  getExpensesByCategory(categoryId: number): Observable<any> {
    return this.http.post('http://localhost:3000/api/expense/getExpenses/category', categoryId);
  }

  getExpenseLastWeek(): Observable<any> {
    return this.http.get('http://localhost:3000/api/expense/getExpenses/lastWeek');
  }

  getExpenses(): Observable<any> {
    return this.http.get('http://localhost:3000/api/expense/getExpenses/interval/:days');
  }
}
