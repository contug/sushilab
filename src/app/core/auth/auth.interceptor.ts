import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if(idToken) {
      const clone = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken)
      });
      return next.handle(clone);
    }
    else {
      return next.handle(request);
    }
  }
}
