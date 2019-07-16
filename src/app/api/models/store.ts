/* tslint:disable */
import { Banner } from './banner';
import { DeliveryInfo } from './delivery-info';
import { Propreitor } from './propreitor';
import { Review } from './review';
import { StoreAddress } from './store-address';
import { UserRating } from './user-rating';
export interface Store {
  locationName?: string;
  banners?: Array<Banner>;
  contactNo?: number;
  deliveryInfos?: Array<DeliveryInfo>;
  email?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  info?: string;
  location?: string;
  closingTime?: string;
  maxDeliveryTime?: string;
  minAmount?: number;
  name?: string;
  openingTime?: string;
  propreitor?: Propreitor;
  regNo?: string;
  reviews?: Array<Review>;
  storeAddress?: StoreAddress;
  totalRating?: number;
  userRatings?: Array<UserRating>;
}
