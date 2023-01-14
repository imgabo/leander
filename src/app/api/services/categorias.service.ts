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

import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation categoriasGetCategoriasGet
   */
  static readonly CategoriasGetCategoriasGetPath = '/Categorias/getCategorias';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriasGetCategoriasGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriasGetCategoriasGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CategoriasGetCategoriasGetPath, 'get');
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
   * To access the full response (for headers, for example), `categoriasGetCategoriasGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriasGetCategoriasGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.categoriasGetCategoriasGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation categoriasInsertCategoriaPost
   */
  static readonly CategoriasInsertCategoriaPostPath = '/Categorias/InsertCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriasInsertCategoriaPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriasInsertCategoriaPost$Response(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CategoriasInsertCategoriaPostPath, 'post');
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
   * To access the full response (for headers, for example), `categoriasInsertCategoriaPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriasInsertCategoriaPost(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<void> {

    return this.categoriasInsertCategoriaPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation categoriasUpdateCategoriaPut
   */
  static readonly CategoriasUpdateCategoriaPutPath = '/Categorias/UpdateCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriasUpdateCategoriaPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriasUpdateCategoriaPut$Response(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CategoriasUpdateCategoriaPutPath, 'put');
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
   * To access the full response (for headers, for example), `categoriasUpdateCategoriaPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  categoriasUpdateCategoriaPut(params?: {
    context?: HttpContext
    body?: Categoria
  }
): Observable<void> {

    return this.categoriasUpdateCategoriaPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation categoriasDeleteCategoriaDelete
   */
  static readonly CategoriasDeleteCategoriaDeletePath = '/Categorias/DeleteCategoria';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `categoriasDeleteCategoriaDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriasDeleteCategoriaDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriasService.CategoriasDeleteCategoriaDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `categoriasDeleteCategoriaDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  categoriasDeleteCategoriaDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.categoriasDeleteCategoriaDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
