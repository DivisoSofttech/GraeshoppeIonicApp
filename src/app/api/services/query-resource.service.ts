/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ContactDTO } from '../models/contact-dto';
import { CustomerDTO } from '../models/customer-dto';
import { CategoryDTO } from '../models/category-dto';
import { PageOfCustomer } from '../models/page-of-customer';
import { UomDTO } from '../models/uom-dto';
import { PageOfProduct } from '../models/page-of-product';
import { ProductDTO } from '../models/product-dto';
import { SaleDTO } from '../models/sale-dto';
import { StockLine } from '../models/stock-line';
import { TicketLineDTO } from '../models/ticket-line-dto';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findContactByIdUsingGETPath = '/api/query/contacts/{id}';
  static readonly exportCustomersUsingGETPath = '/api/query/customers/export';
  static readonly findCustomerByIdUsingGETPath = '/api/query/customers/{id}';
  static readonly findAllCategoriesWithOutImageUsingGETPath = '/api/query/findAllCategoriesWithOutImage';
  static readonly findAllCategoriesUsingGETPath = '/api/query/findAllCateogories';
  static readonly findAllCustomersUsingGETPath = '/api/query/findAllCustomer/{searchTerm}';
  static readonly findAllCustomersWithoutSearchUsingGETPath = '/api/query/findAllCustomers';
  static readonly findAllUomUsingGETPath = '/api/query/findAllUom';
  static readonly findProductByCategoryIdUsingGETPath = '/api/query/findProductByCategoryId/{categoryId}';
  static readonly findAllProductUsingGETPath = '/api/query/products';
  static readonly exportProductsUsingGETPath = '/api/query/products/export';
  static readonly findProductUsingGETPath = '/api/query/products/{id}';
  static readonly findAllSalesUsingGETPath = '/api/query/sales';
  static readonly findSaleByIdUsingGETPath = '/api/query/sales/{id}';
  static readonly findAllStockLinesUsingGETPath = '/api/query/stocklines';
  static readonly findAllTicketlinesUsingGETPath = '/api/query/ticket-lines';
  static readonly findOneTicketLinesUsingGETPath = '/api/query/ticket-lines/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id id
   * @return OK
   */
  findContactByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ContactDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/contacts/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ContactDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findContactByIdUsingGET(id: number): __Observable<ContactDTO> {
    return this.findContactByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as ContactDTO)
    );
  }

  /**
   * @return OK
   */
  exportCustomersUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/customers/export`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return OK
   */
  exportCustomersUsingGET(): __Observable<string> {
    return this.exportCustomersUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findCustomerByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<CustomerDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/customers/${id}`,
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
   * @param id id
   * @return OK
   */
  findCustomerByIdUsingGET(id: number): __Observable<CustomerDTO> {
    return this.findCustomerByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as CustomerDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllCategoriesWithOutImageUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCategoriesWithOutImageUsingGETResponse(params: QueryResourceService.FindAllCategoriesWithOutImageUsingGETParams): __Observable<__StrictHttpResponse<Array<CategoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCategoriesWithOutImage`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllCategoriesWithOutImageUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCategoriesWithOutImageUsingGET(params: QueryResourceService.FindAllCategoriesWithOutImageUsingGETParams): __Observable<Array<CategoryDTO>> {
    return this.findAllCategoriesWithOutImageUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CategoryDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllCategoriesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCategoriesUsingGETResponse(params: QueryResourceService.FindAllCategoriesUsingGETParams): __Observable<__StrictHttpResponse<Array<CategoryDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCateogories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllCategoriesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllCategoriesUsingGET(params: QueryResourceService.FindAllCategoriesUsingGETParams): __Observable<Array<CategoryDTO>> {
    return this.findAllCategoriesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<CategoryDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllCustomersUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCustomersUsingGETResponse(params: QueryResourceService.FindAllCustomersUsingGETParams): __Observable<__StrictHttpResponse<PageOfCustomer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCustomer/${params.searchTerm}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfCustomer>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllCustomersUsingGETParams` containing the following parameters:
   *
   * - `searchTerm`: searchTerm
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCustomersUsingGET(params: QueryResourceService.FindAllCustomersUsingGETParams): __Observable<PageOfCustomer> {
    return this.findAllCustomersUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfCustomer)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllCustomersWithoutSearchUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCustomersWithoutSearchUsingGETResponse(params: QueryResourceService.FindAllCustomersWithoutSearchUsingGETParams): __Observable<__StrictHttpResponse<PageOfCustomer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllCustomers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfCustomer>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllCustomersWithoutSearchUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllCustomersWithoutSearchUsingGET(params: QueryResourceService.FindAllCustomersWithoutSearchUsingGETParams): __Observable<PageOfCustomer> {
    return this.findAllCustomersWithoutSearchUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfCustomer)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllUomUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUomUsingGETResponse(params: QueryResourceService.FindAllUomUsingGETParams): __Observable<__StrictHttpResponse<Array<UomDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findAllUom`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UomDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllUomUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllUomUsingGET(params: QueryResourceService.FindAllUomUsingGETParams): __Observable<Array<UomDTO>> {
    return this.findAllUomUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<UomDTO>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindProductByCategoryIdUsingGETParams` containing the following parameters:
   *
   * - `categoryId`: categoryId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findProductByCategoryIdUsingGETResponse(params: QueryResourceService.FindProductByCategoryIdUsingGETParams): __Observable<__StrictHttpResponse<PageOfProduct>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findProductByCategoryId/${params.categoryId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOfProduct>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindProductByCategoryIdUsingGETParams` containing the following parameters:
   *
   * - `categoryId`: categoryId
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findProductByCategoryIdUsingGET(params: QueryResourceService.FindProductByCategoryIdUsingGETParams): __Observable<PageOfProduct> {
    return this.findProductByCategoryIdUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOfProduct)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllProductUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllProductUsingGETResponse(params: QueryResourceService.FindAllProductUsingGETParams): __Observable<__StrictHttpResponse<Array<ProductDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllProductUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllProductUsingGET(params: QueryResourceService.FindAllProductUsingGETParams): __Observable<Array<ProductDTO>> {
    return this.findAllProductUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<ProductDTO>)
    );
  }

  /**
   * @return OK
   */
  exportProductsUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/products/export`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return OK
   */
  exportProductsUsingGET(): __Observable<string> {
    return this.exportProductsUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findProductUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ProductDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/products/${id}`,
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
   * @param id id
   * @return OK
   */
  findProductUsingGET(id: number): __Observable<ProductDTO> {
    return this.findProductUsingGETResponse(id).pipe(
      __map(_r => _r.body as ProductDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllSalesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllSalesUsingGETResponse(params: QueryResourceService.FindAllSalesUsingGETParams): __Observable<__StrictHttpResponse<Array<SaleDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/sales`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SaleDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllSalesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllSalesUsingGET(params: QueryResourceService.FindAllSalesUsingGETParams): __Observable<Array<SaleDTO>> {
    return this.findAllSalesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<SaleDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findSaleByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<SaleDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/sales/${id}`,
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
   * @param id id
   * @return OK
   */
  findSaleByIdUsingGET(id: number): __Observable<SaleDTO> {
    return this.findSaleByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as SaleDTO)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllStockLinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllStockLinesUsingGETResponse(params: QueryResourceService.FindAllStockLinesUsingGETParams): __Observable<__StrictHttpResponse<Array<StockLine>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/stocklines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StockLine>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllStockLinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
   *
   * - `size`: Size of a page
   *
   * - `page`: Page number of the requested page
   *
   * @return OK
   */
  findAllStockLinesUsingGET(params: QueryResourceService.FindAllStockLinesUsingGETParams): __Observable<Array<StockLine>> {
    return this.findAllStockLinesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<StockLine>)
    );
  }

  /**
   * @param params The `QueryResourceService.FindAllTicketlinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTicketlinesUsingGETResponse(params: QueryResourceService.FindAllTicketlinesUsingGETParams): __Observable<__StrictHttpResponse<Array<TicketLineDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/ticket-lines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TicketLineDTO>>;
      })
    );
  }
  /**
   * @param params The `QueryResourceService.FindAllTicketlinesUsingGETParams` containing the following parameters:
   *
   * - `sort`: sort
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findAllTicketlinesUsingGET(params: QueryResourceService.FindAllTicketlinesUsingGETParams): __Observable<Array<TicketLineDTO>> {
    return this.findAllTicketlinesUsingGETResponse(params).pipe(
      __map(_r => _r.body as Array<TicketLineDTO>)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  findOneTicketLinesUsingGETResponse(id: number): __Observable<__StrictHttpResponse<TicketLineDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/ticket-lines/${id}`,
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
   * @param id id
   * @return OK
   */
  findOneTicketLinesUsingGET(id: number): __Observable<TicketLineDTO> {
    return this.findOneTicketLinesUsingGETResponse(id).pipe(
      __map(_r => _r.body as TicketLineDTO)
    );
  }
}

module QueryResourceService {

  /**
   * Parameters for findAllCategoriesWithOutImageUsingGET
   */
  export interface FindAllCategoriesWithOutImageUsingGETParams {

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for findAllCategoriesUsingGET
   */
  export interface FindAllCategoriesUsingGETParams {

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for findAllCustomersUsingGET
   */
  export interface FindAllCustomersUsingGETParams {

    /**
     * searchTerm
     */
    searchTerm: string;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllCustomersWithoutSearchUsingGET
   */
  export interface FindAllCustomersWithoutSearchUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllUomUsingGET
   */
  export interface FindAllUomUsingGETParams {

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for findProductByCategoryIdUsingGET
   */
  export interface FindProductByCategoryIdUsingGETParams {

    /**
     * categoryId
     */
    categoryId: number;

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllProductUsingGET
   */
  export interface FindAllProductUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllSalesUsingGET
   */
  export interface FindAllSalesUsingGETParams {

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for findAllStockLinesUsingGET
   */
  export interface FindAllStockLinesUsingGETParams {

    /**
     * Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Size of a page
     */
    size?: number;

    /**
     * Page number of the requested page
     */
    page?: number;
  }

  /**
   * Parameters for findAllTicketlinesUsingGET
   */
  export interface FindAllTicketlinesUsingGETParams {

    /**
     * sort
     */
    sort?: Array<string>;

    /**
     * size
     */
    size?: number;

    /**
     * page
     */
    page?: number;
  }
}

export { QueryResourceService }
