/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//35.231.213.38:9080';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
