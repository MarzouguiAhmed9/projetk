/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Employee } from '../../models/employee';

export interface UpdateEmploye$Params {
  id: number;
      body: Employee
}

export function updateEmploye(http: HttpClient, rootUrl: string, params: UpdateEmploye$Params, context?: HttpContext): Observable<StrictHttpResponse<Employee>> {
  const rb = new RequestBuilder(rootUrl, updateEmploye.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

updateEmploye.PATH = '/api/employees/{id}';
