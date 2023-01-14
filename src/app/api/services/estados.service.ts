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

import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root',
})
export class EstadosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation estadosGetEstadosGet
   */
  static readonly EstadosGetEstadosGetPath = '/Estados/getEstados';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `estadosGetEstadosGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  estadosGetEstadosGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EstadosService.EstadosGetEstadosGetPath, 'get');
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
   * To access the full response (for headers, for example), `estadosGetEstadosGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  estadosGetEstadosGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.estadosGetEstadosGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation estadosInsertEstadosPost
   */
  static readonly EstadosInsertEstadosPostPath = '/Estados/InsertEstados';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `estadosInsertEstadosPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  estadosInsertEstadosPost$Response(params?: {
    context?: HttpContext
    body?: Estado
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EstadosService.EstadosInsertEstadosPostPath, 'post');
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
   * To access the full response (for headers, for example), `estadosInsertEstadosPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  estadosInsertEstadosPost(params?: {
    context?: HttpContext
    body?: Estado
  }
): Observable<void> {

    return this.estadosInsertEstadosPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation estadosUpdateEstadosPut
   */
  static readonly EstadosUpdateEstadosPutPath = '/Estados/UpdateEstados';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `estadosUpdateEstadosPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  estadosUpdateEstadosPut$Response(params?: {
    context?: HttpContext
    body?: Estado
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EstadosService.EstadosUpdateEstadosPutPath, 'put');
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
   * To access the full response (for headers, for example), `estadosUpdateEstadosPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  estadosUpdateEstadosPut(params?: {
    context?: HttpContext
    body?: Estado
  }
): Observable<void> {

    return this.estadosUpdateEstadosPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation estadosDeleteEstadosDelete
   */
  static readonly EstadosDeleteEstadosDeletePath = '/Estados/DeleteEstados';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `estadosDeleteEstadosDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  estadosDeleteEstadosDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EstadosService.EstadosDeleteEstadosDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `estadosDeleteEstadosDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  estadosDeleteEstadosDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.estadosDeleteEstadosDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
