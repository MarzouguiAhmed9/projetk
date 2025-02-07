/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Employee } from '../../models/employee';

export interface GetEmployeeById$Params {
  id: number;
}

export function getEmployeeById(http: HttpClient, rootUrl: string, params: GetEmployeeById$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
  const rb = new RequestBuilder(rootUrl, getEmployeeById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getEmployeeById.PATH = '/api/employees/{id}';
