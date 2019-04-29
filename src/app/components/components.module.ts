import { ReceiptDetailPopoverComponent } from './receipt-detail-popover/receipt-detail-popover.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductQuantityModalComponent } from './product-quantity-modal/product-quantity-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [HeaderComponent , ReceiptDetailPopoverComponent , ProductQuantityModalComponent],
    exports : [HeaderComponent , ReceiptDetailPopoverComponent , ProductQuantityModalComponent]
    })
export class ComponentsModule { }
