/* tslint:disable */
import { Product } from './product';
export interface Category {
  description?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  name?: string;
  products?: Array<Product>;
  visible?: boolean;
}
