/* tslint:disable */
import { Barcode } from './barcode';
import { Label } from './label';
import { Category } from './category';
import { Note } from './note';
import { Status } from './status';
import { StockLine } from './stock-line';
import { TaxCategory } from './tax-category';
export interface Product {
  mpn?: string;
  barcode?: Barcode;
  dateOfExpiry?: string;
  dateOfMfd?: string;
  description?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  labels?: Array<Label>;
  maximumStockLevel?: number;
  categories?: Array<Category>;
  name: string;
  notes?: Array<Note>;
  reOrderLevel?: number;
  reference: string;
  searchkey: string;
  sku?: string;
  status?: Status;
  stockLines?: Array<StockLine>;
  taxCategory?: TaxCategory;
  visible?: boolean;
}
