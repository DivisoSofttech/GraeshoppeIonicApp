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
                    ProductQuantityModalComponent
                    ],
    exports : [ EditProductModalComponent,
                EditUOMModalComponent,
                HeaderComponent,
                ReceiptDetailPopoverComponent,
                RefundQuantityModalComponent,
                ProductQuantityModalComponent
                ]
    })
export class ComponentsModule { }
