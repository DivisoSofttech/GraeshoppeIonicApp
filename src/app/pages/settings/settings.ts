import { Component } from '@angular/compiler/src/core';
import { OnInit } from '@angular/core';
import { ComponentRef, ModalOptions } from '@ionic/core';

export interface SettingsModel {
    
    settings:Settings[]

}

export interface Settings {

    name:string,
    iconName: string,
    isSelected: boolean,
    url?: string,
    subSettings?: SubSettings[]

}

export interface SubSettings {

    name:string,
    url:string,
    iconName: string

}