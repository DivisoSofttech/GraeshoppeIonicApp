import { Pipe, PipeTransform } from '@angular/core';
import { QueryResourceService } from './api/services';
import { Observable } from 'rxjs';

@Pipe({
  name: 'productsName'
})
export class ProductsNamePipe implements PipeTransform {
  private productsObservable : Observable<any> ;
  transform(value: any, args?: any) {
    return this.queryResourceService.findProductUsingGET(value);
    }

  constructor(private queryResourceService: QueryResourceService)
  {

  }


}
