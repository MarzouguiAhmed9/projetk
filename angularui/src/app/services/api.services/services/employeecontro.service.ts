/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addemployee } from '../fn/employeecontro/addemployee';
import { Addemployee$Params } from '../fn/employeecontro/addemployee';
import { deleteEmployee } from '../fn/employeecontro/delete-employee';
import { DeleteEmployee$Params } from '../fn/employeecontro/delete-employee';
import { Employee } from '../models/employee';
import { getEmployeeById } from '../fn/employeecontro/get-employee-by-id';
import { GetEmployeeById$Params } from '../fn/employeecontro/get-employee-by-id';
import { getEmployees } from '../fn/employeecontro/get-employees';
import { GetEmployees$Params } from '../fn/employeecontro/get-employees';
import { updateEmploye } from '../fn/employeecontro/update-employe';
import { UpdateEmploye$Params } from '../fn/employeecontro/update-employe';

@Injectable({ providedIn: 'root' })
export class EmployeecontroService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEmployeeById()` */
  static readonly GetEmployeeByIdPath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeById$Response(params: GetEmployeeById$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
    return getEmployeeById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEmployeeById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployeeById(params: GetEmployeeById$Params, context?: HttpContext): Observable<Employee> {
    return this.getEmployeeById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Employee>): Employee => r.body)
    );
  }

  /** Path part for operation `updateEmploye()` */
  static readonly UpdateEmployePath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmploye()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmploye$Response(params: UpdateEmploye$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
    return updateEmploye(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEmploye$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmploye(params: UpdateEmploye$Params, context?: HttpContext): Observable<Employee> {
    return this.updateEmploye$Response(params, context).pipe(
      map((r: StrictHttpResponse<Employee>): Employee => r.body)
    );
  }

  /** Path part for operation `deleteEmployee()` */
  static readonly DeleteEmployeePath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEmployee$Response(params: DeleteEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: boolean;
}>> {
    return deleteEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEmployee(params: DeleteEmployee$Params, context?: HttpContext): Observable<{
[key: string]: boolean;
}> {
    return this.deleteEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: boolean;
}>): {
[key: string]: boolean;
} => r.body)
    );
  }

  /** Path part for operation `addemployee()` */
  static readonly AddemployeePath = '/api/employeesadd';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addemployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addemployee$Response(params: Addemployee$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
    return addemployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addemployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addemployee(params: Addemployee$Params, context?: HttpContext): Observable<Employee> {
    return this.addemployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<Employee>): Employee => r.body)
    );
  }

  /** Path part for operation `getEmployees()` */
  static readonly GetEmployeesPath = '/api/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployees()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployees$Response(params?: GetEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Employee>>> {
    return getEmployees(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEmployees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployees(params?: GetEmployees$Params, context?: HttpContext): Observable<Array<Employee>> {
    return this.getEmployees$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Employee>>): Array<Employee> => r.body)
    );
  }

}
