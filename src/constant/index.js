import { banner1, banner2 } from "../assets/index";

export const BannerImage = [banner1, banner2];

export const discountPrice = (originalPrice,discount)=>{
    const discountAmont = (originalPrice*discount)/100
    const totalAmount = originalPrice-discountAmont

    return totalAmount
}