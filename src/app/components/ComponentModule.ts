import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentModule,
    ],
    declarations: [HeaderComponent],
    exports : [HeaderComponent]
    })
    export class ComponentModule { }