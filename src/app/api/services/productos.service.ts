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

import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation productosInsertProductoPost
   */
  static readonly ProductosInsertProductoPostPath = '/Productos/InsertProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosInsertProductoPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productosInsertProductoPost$Response(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosInsertProductoPostPath, 'post');
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
   * To access the full response (for headers, for example), `productosInsertProductoPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productosInsertProductoPost(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<void> {

    return this.productosInsertProductoPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation productosUpdateProductoPut
   */
  static readonly ProductosUpdateProductoPutPath = '/Productos/UpdateProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosUpdateProductoPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productosUpdateProductoPut$Response(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosUpdateProductoPutPath, 'put');
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
   * To access the full response (for headers, for example), `productosUpdateProductoPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productosUpdateProductoPut(params?: {
    context?: HttpContext
    body?: Producto
  }
): Observable<void> {

    return this.productosUpdateProductoPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation productosDeleteProductoDelete
   */
  static readonly ProductosDeleteProductoDeletePath = '/Productos/DeleteProducto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosDeleteProductoDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete$Response(params?: {
    Id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosDeleteProductoDeletePath, 'delete');
    if (params) {
      rb.query('Id', params.Id, {});
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
   * To access the full response (for headers, for example), `productosDeleteProductoDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosDeleteProductoDelete(params?: {
    Id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.productosDeleteProductoDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation productosGetProductsGet
   */
  static readonly ProductosGetProductsGetPath = '/Productos/GetProducts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productosGetProductsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosGetProductsGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductosService.ProductosGetProductsGetPath, 'get');
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
   * To access the full response (for headers, for example), `productosGetProductsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productosGetProductsGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.productosGetProductsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
