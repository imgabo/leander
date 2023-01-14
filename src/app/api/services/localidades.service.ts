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

import { Localidad } from '../models/localidad';

@Injectable({
  providedIn: 'root',
})
export class LocalidadesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation localidadesGetLocalidadesGet
   */
  static readonly LocalidadesGetLocalidadesGetPath = '/Localidades/getLocalidades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localidadesGetLocalidadesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  localidadesGetLocalidadesGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocalidadesService.LocalidadesGetLocalidadesGetPath, 'get');
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
   * To access the full response (for headers, for example), `localidadesGetLocalidadesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localidadesGetLocalidadesGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.localidadesGetLocalidadesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation localidadesInsertLocalidadPost
   */
  static readonly LocalidadesInsertLocalidadPostPath = '/Localidades/InsertLocalidad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localidadesInsertLocalidadPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  localidadesInsertLocalidadPost$Response(params?: {
    context?: HttpContext
    body?: Localidad
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocalidadesService.LocalidadesInsertLocalidadPostPath, 'post');
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
   * To access the full response (for headers, for example), `localidadesInsertLocalidadPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  localidadesInsertLocalidadPost(params?: {
    context?: HttpContext
    body?: Localidad
  }
): Observable<void> {

    return this.localidadesInsertLocalidadPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation localidadesUpdateLocalidadPut
   */
  static readonly LocalidadesUpdateLocalidadPutPath = '/Localidades/UpdateLocalidad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localidadesUpdateLocalidadPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  localidadesUpdateLocalidadPut$Response(params?: {
    context?: HttpContext
    body?: Localidad
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocalidadesService.LocalidadesUpdateLocalidadPutPath, 'put');
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
   * To access the full response (for headers, for example), `localidadesUpdateLocalidadPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  localidadesUpdateLocalidadPut(params?: {
    context?: HttpContext
    body?: Localidad
  }
): Observable<void> {

    return this.localidadesUpdateLocalidadPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation localidadesDeleteLocalidadDelete
   */
  static readonly LocalidadesDeleteLocalidadDeletePath = '/Localidades/DeleteLocalidad';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localidadesDeleteLocalidadDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  localidadesDeleteLocalidadDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LocalidadesService.LocalidadesDeleteLocalidadDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `localidadesDeleteLocalidadDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localidadesDeleteLocalidadDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.localidadesDeleteLocalidadDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
