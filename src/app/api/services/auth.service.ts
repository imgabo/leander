/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Login } from '../models/login';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authListCuentasGet
   */
  static readonly AuthListCuentasGetPath = '/Auth/ListCuentas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authListCuentasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  authListCuentasGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthListCuentasGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authListCuentasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authListCuentasGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.authListCuentasGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authRegisterPost
   */
  static readonly AuthRegisterPostPath = '/Auth/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authRegisterPost$Response(params?: {
    password?: string;
    context?: HttpContext
    body?: Usuario
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthRegisterPostPath, 'post');
    if (params) {
      rb.query('password', params.password, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authRegisterPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authRegisterPost(params?: {
    password?: string;
    context?: HttpContext
    body?: Usuario
  }
): Observable<void> {

    return this.authRegisterPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authLoginPost
   */
  static readonly AuthLoginPostPath = '/Auth/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoginPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Response(params?: {
    context?: HttpContext
    body?: Login
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoginPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authLoginPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost(params?: {
    context?: HttpContext
    body?: Login
  }
): Observable<void> {

    return this.authLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
