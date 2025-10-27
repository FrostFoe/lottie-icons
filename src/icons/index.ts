import { createLottieIcon } from "../createIcon";
import {
  addAnimation,
  announcementAnimation,
  customerAnimation,
  couponAnimation,
  filterItemAnimation,
} from "./animations";

export const Add = createLottieIcon(addAnimation, "Add");
export const Announcement = createLottieIcon(
  announcementAnimation,
  "Announcement",
);
export const Customer = createLottieIcon(customerAnimation, "Customer");
export const Coupon = createLottieIcon(couponAnimation, "Coupon");
export const FilterItem = createLottieIcon(filterItemAnimation, "FilterItem");

export {
  addAnimation,
  announcementAnimation,
  customerAnimation,
  couponAnimation,
  filterItemAnimation,
};
