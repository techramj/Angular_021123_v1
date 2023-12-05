import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   url :string = "http://localhost:3000/employees";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  deleteEmployee(id:any): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }


}
