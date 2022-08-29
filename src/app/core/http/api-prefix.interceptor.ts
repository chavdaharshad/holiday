import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      url: environment.serverUrl + request.url,
      setHeaders: {
        'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhIiwicGVyc29uYWxFbWFpbCI6IkFTREBnbWFpbC5jb20iLCJfaWQiOiI2MmZjODlmMDRiMDlkZWViMDk5NGNhNzUifSwiaWF0IjoxNjYxNzY3MzUzLCJleHAiOjE2NjQzOTUzNTN9.U1J3OfITgXSj-xi8WHuuhpgGZs-Xqf-meBq1WAm59Kg'
      }
    });

    return next.handle(request);
  }
}
