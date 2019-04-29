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
    declarations: [ReceiptDetailPopoverComponent, RefundQuantityModalComponent],
    exports : [ReceiptDetailPopoverComponent, RefundQuantityModalComponent]
    })
export class ComponentsModule { }
