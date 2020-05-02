import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    public loaderService: LoaderService,
    private toastrService: ToastrService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error, caught) => {
      if (error.error instanceof ErrorEvent) {
        this.toastrService.error('Some error occured', 'Error Occured', {
          timeOut: 3000
        });
      } else {
        this.toastrService.error("Server isn't responding", 'Server Error', {
          timeOut: 3000
        });
      }
      return of(error);
    }) as any);
  }
}
