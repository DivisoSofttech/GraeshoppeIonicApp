/* tslint:disable */
import { LabelDTO } from './label-dto';
import { CategoryDTO } from './category-dto';
export interface ProductDTO {
  maximumStockLevel?: number;
  barcodeId?: number;
  dateOfExpiry?: string;
  dateOfMfd?: string;
  description?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  labels?: Array<LabelDTO>;
  categories?: Array<CategoryDTO>;
  mpn?: string;
  name: string;
  reOrderLevel?: number;
  reference: string;
  searchkey: string;
  sku?: string;
  statusId?: number;
  taxCategoryId?: number;
  visible?: boolean;
}
