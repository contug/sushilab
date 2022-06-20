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

    const token = localStorage.getItem("token");

    if(token) {
      console.log("interceptor token log: " + token)
      const clone = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + token)
      });
      console.log("interceptor header log: " + clone.headers.get("Authorization"))
      return next.handle(clone);
    }
    else {
      return next.handle(request);
    }
  }
}
