import { banner1, banner2 } from "../assets/index";

export const BannerImage = [banner1, banner2];

export const discountPrice = (originalPrice, discount) => {
  const discountAmont = (originalPrice * discount) / 100;
  const totalAmount = originalPrice - discountAmont;

  return totalAmount;
};

export const cart = {
  id: 3,
  title: "Samsung Universe 9",
  description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  price: 1249,
  discountPercentage: 15.46,
  rating: 4.09,
  stock: 36,
  quantity: 2,
  brand: "Samsung",

  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
};
