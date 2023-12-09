import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-emp';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return of(EMPLOYEES);
  }
}
