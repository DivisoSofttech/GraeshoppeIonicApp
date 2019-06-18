import { BilloptionsComponent } from './billoptions/billoptions.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditUomComponent } from './edit-uom/edit-uom.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditUOMModalComponent } from './edit-uommodal/edit-uommodal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { ProductQuantityModalComponent } from './product-quantity-modal/product-quantity-modal.component';
import { ReceiptDetailPopoverComponent } from './receipt-detail-popover/receipt-detail-popover.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RefundQuantityModalComponent } from './refund-quantity-modal/refund-quantity-modal.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { SearchProductsPage } from './search-products/search-products.page';
import { AddItemFromCSVComponent } from './add-item-from-csv/add-item-from-csv.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddLocationComponent } from './add-location/add-location.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [ EditProductModalComponent,
                    EditUOMModalComponent,
                    HeaderComponent,
                    ReceiptDetailPopoverComponent,
                    RefundQuantityModalComponent,
                    ProductQuantityModalComponent,
                    EditCategoryComponent,
                    EditUomComponent,
                    EditCustomerComponent,
                    AddStockComponent,
                    BilloptionsComponent,
                    SearchProductsPage,
                    AddItemFromCSVComponent,
                    ProductDetailComponent,
                    AddLocationComponent
                    ],
    exports : [ EditProductModalComponent,
                EditUOMModalComponent,
                HeaderComponent,
                ReceiptDetailPopoverComponent,
                RefundQuantityModalComponent,
                ProductQuantityModalComponent,
                EditCategoryComponent,
                EditUomComponent,
                EditCustomerComponent,
                AddStockComponent,
                BilloptionsComponent,
                SearchProductsPage,
                AddItemFromCSVComponent,
                ProductDetailComponent,
                AddLocationComponent
                ]
    })
export class ComponentsModule { }
