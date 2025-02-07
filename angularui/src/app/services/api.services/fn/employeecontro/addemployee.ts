/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Employee } from '../../models/employee';

export interface Addemployee$Params {
      body: Employee
}

export function addemployee(http: HttpClient, rootUrl: string, params: Addemployee$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
  const rb = new RequestBuilder(rootUrl, addemployee.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Employee>;
    })
  );
}

addemployee.PATH = '/api/employeesadd';
