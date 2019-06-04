/* tslint:disable */
import { DeliveryInfo } from './delivery-info';
import { Propreitor } from './propreitor';
import { Review } from './review';
import { UserRating } from './user-rating';
export interface Store {
  closingTime?: string;
  contactNo?: number;
  deliveryInfos?: Array<DeliveryInfo>;
  email?: string;
  id?: number;
  image?: string;
  imageContentType?: string;
  info?: string;
  location?: string;
  name?: string;
  openingTime?: string;
  propreitor?: Propreitor;
  regNo?: string;
  reviews?: Array<Review>;
  totalRating?: number;
  userRatings?: Array<UserRating>;
}
