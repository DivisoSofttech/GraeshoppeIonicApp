/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDTO } from '../models/category-dto';
import { CustomerDTO } from '../models/customer-dto';
import { CustomerAggregator } from '../models/customer-aggregator';
import { ProductDTO } from '../models/product-dto';
import { SaleDTO } from '../models/sale-dto';
import { TicketLineDTO } from '../models/ticket-line-dto';
import { UomDTO } from '../models/uom-dto';

/**
 * Command Resource
 */
@Injectable({
  providedIn: 'root',
})
class CommandResourceService extends __BaseService {
  static readonly updateCategoryUsingPUTPath = '/api/command/categories';
  static readonly deleteCategoryUsingDELETEPath = '/api/command/categories/{id}';
  static readonly updateCustomerUsingPUTPath = '/api/command/customers';
  static readonly deleteCustomerUsingDELETEPath = '/api/command/customers';
  static readonly createCustomerUsingPOSTPath = '/api/command/customers/register-customer';
  static readonly createProductCategoryUsingPOSTPath = '/api/command/productCategory';
  static readonly createProductUsingPOSTPath = '/api/command/products';
  static readonly updateProductUsingPUTPath = '/api/command/products';
  static readonly deleteProductUsingDELETEPath = '/api/command/products/{id}';
  static readonly createSaleUsingPOSTPath = '/api/command/sales';
  static readonly updateSaleUsingPUTPath = '/api/command/sales';
  static readonly deleteSaleUsingDELETEPath = '/api/command/sales/{id}';
  static readonly createTickerLineUsingPOSTPath = '/api/command/ticket-lines';
  static readonly updateTicketLineUsingPUTPath = '/api/command/ticket-lines';
  static readonly deleteTicketlineUsingDELETEPath = '/api/command/ticket-lines/{id}';
  static readonly createUOMUsingPOSTPath = '/api/command/unit-of-meassurement';
  static readonly createUomUsingPUTPath = '/api/command/uoms';
  static readonly deleteUOMUsingDELETEPath = '/api/command/uoms';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param categoryDTO categoryDTO
   * @return OK
   */
  updateCategoryUsingPUTResponse(categoryDTO: CategoryDTO): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * @param categoryDTO categoryDTO
   * @return OK
   */
  updateCategoryUsingPUT(categoryDTO: CategoryDTO): __Observable<CategoryDTO> {
    return this.updateCategoryUsingPUTResponse(categoryDTO).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * @param id id
   */
  deleteCategoryUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/categories/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteCategoryUsingDELETE(id: number): __Observable<null> {
    return this.deleteCategoryUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param customerDTO customerDTO
   * @return OK
   */
  updateCustomerUsingPUTResponse(customerDTO: CustomerDTO): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customerDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param customerDTO customerDTO
   * @return OK
   */
  updateCustomerUsingPUT(customerDTO: CustomerDTO): __Observable<CustomerDTO> {
    return this.updateCustomerUsingPUTResponse(customerDTO).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param id id
   */
  deleteCustomerUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/customers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteCustomerUsingDELETE(id: number): __Observable<null> {
    return this.deleteCustomerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param customerAggregator customerAggregator
   * @return OK
   */
  createCustomerUsingPOSTResponse(customerAggregator: CustomerAggregator): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = customerAggregator;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/customers/register-customer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CustomerDTO>;
      })
    );
  }
  /**
   * @param customerAggregator customerAggregator
   * @return OK
   */
  createCustomerUsingPOST(customerAggregator: CustomerAggregator): __Observable<CustomerDTO> {
    return this.createCustomerUsingPOSTResponse(customerAggregator).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param categoryDTO categoryDTO
   * @return OK
   */
  createProductCategoryUsingPOSTResponse(categoryDTO: CategoryDTO): __Observable<__StrictHttpResponse<CategoryDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categoryDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/productCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDTO>;
      })
    );
  }
  /**
   * @param categoryDTO categoryDTO
   * @return OK
   */
  createProductCategoryUsingPOST(categoryDTO: CategoryDTO): __Observable<CategoryDTO> {
    return this.createProductCategoryUsingPOSTResponse(categoryDTO).pipe(
      __map(_r => _r.body as CategoryDTO)
    );
  }

  /**
   * @param productDTO productDTO
   * @return OK
   */
  createProductUsingPOSTResponse(productDTO: ProductDTO): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDTO>;
      })
    );
  }
  /**
   * @param productDTO productDTO
   * @return OK
   */
  createProductUsingPOST(productDTO: ProductDTO): __Observable<ProductDTO> {
    return this.createProductUsingPOSTResponse(productDTO).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * @param productDTO productDTO
   * @return OK
   */
  updateProductUsingPUTResponse(productDTO: ProductDTO): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDTO>;
      })
    );
  }
  /**
   * @param productDTO productDTO
   * @return OK
   */
  updateProductUsingPUT(productDTO: ProductDTO): __Observable<ProductDTO> {
    return this.updateProductUsingPUTResponse(productDTO).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * @param id id
   */
  deleteProductUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteProductUsingDELETE(id: number): __Observable<null> {
    return this.deleteProductUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param saleDTO saleDTO
   * @return OK
   */
  createSaleUsingPOSTResponse(saleDTO: SaleDTO): __Observable<__StrictHttpResponse<SaleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = saleDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/sales`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaleDTO>;
      })
    );
  }
  /**
   * @param saleDTO saleDTO
   * @return OK
   */
  createSaleUsingPOST(saleDTO: SaleDTO): __Observable<SaleDTO> {
    return this.createSaleUsingPOSTResponse(saleDTO).pipe(
      __map(_r => _r.body as SaleDTO)
    );
  }

  /**
   * @param saleDTO saleDTO
   * @return OK
   */
  updateSaleUsingPUTResponse(saleDTO: SaleDTO): __Observable<__StrictHttpResponse<SaleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = saleDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/sales`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SaleDTO>;
      })
    );
  }
  /**
   * @param saleDTO saleDTO
   * @return OK
   */
  updateSaleUsingPUT(saleDTO: SaleDTO): __Observable<SaleDTO> {
    return this.updateSaleUsingPUTResponse(saleDTO).pipe(
      __map(_r => _r.body as SaleDTO)
    );
  }

  /**
   * @param id id
   */
  deleteSaleUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/sales/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteSaleUsingDELETE(id: number): __Observable<null> {
    return this.deleteSaleUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param ticketLineDTO ticketLineDTO
   * @return OK
   */
  createTickerLineUsingPOSTResponse(ticketLineDTO: TicketLineDTO): __Observable<__StrictHttpResponse<TicketLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketLineDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/ticket-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketLineDTO>;
      })
    );
  }
  /**
   * @param ticketLineDTO ticketLineDTO
   * @return OK
   */
  createTickerLineUsingPOST(ticketLineDTO: TicketLineDTO): __Observable<TicketLineDTO> {
    return this.createTickerLineUsingPOSTResponse(ticketLineDTO).pipe(
      __map(_r => _r.body as TicketLineDTO)
    );
  }

  /**
   * @param ticketLineDTO ticketLineDTO
   * @return OK
   */
  updateTicketLineUsingPUTResponse(ticketLineDTO: TicketLineDTO): __Observable<__StrictHttpResponse<TicketLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketLineDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/ticket-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketLineDTO>;
      })
    );
  }
  /**
   * @param ticketLineDTO ticketLineDTO
   * @return OK
   */
  updateTicketLineUsingPUT(ticketLineDTO: TicketLineDTO): __Observable<TicketLineDTO> {
    return this.updateTicketLineUsingPUTResponse(ticketLineDTO).pipe(
      __map(_r => _r.body as TicketLineDTO)
    );
  }

  /**
   * @param id id
   */
  deleteTicketlineUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/ticket-lines/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteTicketlineUsingDELETE(id: number): __Observable<null> {
    return this.deleteTicketlineUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param uomDTO uomDTO
   * @return OK
   */
  createUOMUsingPOSTResponse(uomDTO: UomDTO): __Observable<__StrictHttpResponse<UomDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = uomDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/command/unit-of-meassurement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UomDTO>;
      })
    );
  }
  /**
   * @param uomDTO uomDTO
   * @return OK
   */
  createUOMUsingPOST(uomDTO: UomDTO): __Observable<UomDTO> {
    return this.createUOMUsingPOSTResponse(uomDTO).pipe(
      __map(_r => _r.body as UomDTO)
    );
  }

  /**
   * @param uomDTO uomDTO
   * @return OK
   */
  createUomUsingPUTResponse(uomDTO: UomDTO): __Observable<__StrictHttpResponse<UomDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = uomDTO;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/command/uoms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UomDTO>;
      })
    );
  }
  /**
   * @param uomDTO uomDTO
   * @return OK
   */
  createUomUsingPUT(uomDTO: UomDTO): __Observable<UomDTO> {
    return this.createUomUsingPUTResponse(uomDTO).pipe(
      __map(_r => _r.body as UomDTO)
    );
  }

  /**
   * @param id id
   */
  deleteUOMUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/command/uoms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteUOMUsingDELETE(id: number): __Observable<null> {
    return this.deleteUOMUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CommandResourceService {
}

export { CommandResourceService }
