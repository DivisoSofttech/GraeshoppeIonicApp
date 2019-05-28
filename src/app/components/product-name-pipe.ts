import { Pipe, PipeTransform } from '@angular/core';
import { QueryResourceService } from '../api/services';
@Pipe({name: 'productName'})
export class ProductNamePipe implements PipeTransform {
  transform(value: number): any {
 console.log("pipe workinggssssssssssssssssss");
    var name;
    this.getName(value).then(result=>{return result});
    return 'sahal;'
  }
  constructor(private queryResourceService: QueryResourceService)
  {

  }

  getName(id)
  {
 console.log("pipe workinggssssssssssssssssss");

    let promise = new Promise((resolve, reject) => {

      this.queryResourceService.findProductUsingGET(id).subscribe((value)=>{
 console.log("pipe workinggssssssssssssssssss");

        resolve(value.name);
      },(error)=>{

        reject(error);
      });


  });
  return promise;
}
}
