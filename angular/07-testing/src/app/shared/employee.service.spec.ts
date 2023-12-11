import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers :[EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("#getEmployees method should be called", ()=>{
    let empService = TestBed.inject(EmployeeService);
    let spy =spyOn(empService, 'getEmployees').and.callThrough();
    empService.getEmployees().subscribe();
    expect(spy).toHaveBeenCalled();
  })
});
