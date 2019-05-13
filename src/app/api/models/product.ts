/* tslint:disable */
import { Barcode } from './barcode';
import { Label } from './label';
import { Category } from './category';
import { Note } from './note';
import { Status } from './status';
import { StockDiary } from './stock-diary';
import { StockLine } from './stock-line';
import { TaxCategory } from './tax-category';
export interface Product {
  name: string;
  barcode?: Barcode;
  dateOfExpiry?: string;
  dateOfMfd?: string;
  description?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  labels?: Array<Label>;
  maximumStockLevel?: number;
  mpn?: string;
  categories?: Array<Category>;
  notes?: Array<Note>;
  outOfStock?: boolean;
  reOrderLevel?: number;
  reference: string;
  searchkey: string;
  sku?: string;
  status?: Status;
  stockDiaries?: Array<StockDiary>;
  stockLines?: Array<StockLine>;
  taxCategory?: TaxCategory;
  visible?: boolean;
}
