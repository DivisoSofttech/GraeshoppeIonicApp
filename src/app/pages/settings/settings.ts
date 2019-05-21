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