import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: ${error.error}`
        );
      }
      return of(error);
    }) as any);
  }
}
