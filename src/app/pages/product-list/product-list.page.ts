import { ProductDTO } from 'src/app/api/models';
import { Component, OnInit } from '@angular/core';
import { GatewayResourceService, QueryResourceService } from 'src/app/api/services'; 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products : ProductDTO []=  [{
    maximumStockLevel:10,
    barcodeId : 11111,
    dateOfExpiry: "march13-18",
    dateOfMfd: "march13-18",
    description:"thalseri resipi",
    id: 1,
    image:"/assets/biriyani.jpg",
    imageContentType:"jpg",
    labels: null,
    categories: null,
    mpn: null,
    name: "thalaseriBhiriyani",
    reOrderLevel:4,
    reference: null,
    searchkey:"thalaseribhiriyani",
    sku: null,
    statusId: 3,
    taxCategoryId:2,
    visible: true},{
      maximumStockLevel:10,
      barcodeId : 11111,
      dateOfExpiry: "march13-18",
      dateOfMfd: "march13-18",
      description:"thalseri resipi",
      id: 1,
      image:"/assets/biriyani.jpg",
      imageContentType:"jpg",
      labels: null,
      categories: null,
      mpn: null,
      name: "ChikenBhiriyani",
      reOrderLevel:4,
      reference: null,
      searchkey:"Chikkenbhiriyani",
      sku: null,
      statusId: 3,
      taxCategoryId:2,
      visible: true},
      {
        maximumStockLevel:10,
        barcodeId : 11111,
        dateOfExpiry: "march13-18",
        dateOfMfd: "march13-18",
        description:"thalseri resipi",
        id: 1,
        image:"/assets/biriyani.jpg",
        imageContentType:"jpg",
        labels: null,
        categories: null,
        mpn: null,
        name: "beefBhiriyani",
        reOrderLevel:4,
        reference: null,
        searchkey:"Beefbhiriyani",
        sku: null,
        statusId: 3,
        taxCategoryId:2,
        visible: true}];
  constructor(private queryRresourse : QueryResourceService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts()
  {
//  let param : any = {
//     categoryId: "number",
//       sort: "Array<string>",
//       size: '5',
//       page: 'number'
//     }
//     this.queryRresourse.findProductByCategoryIdUsingGET(param).subscribe(su=>{console.log("sucess findig products by category id "+su)},err=>{console.log("error findig products by category id "+err)});

}

}
