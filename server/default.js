import { products } from "./constants/data.js";

import Product from "./model/product-schema.js";

const DefaultData = async() => {
  try {
   await Product.insertMany(products);
    console.log("data imported successfully");
  } catch (err) {
    console.log("error", err.message);
  }
};

export default DefaultData;
