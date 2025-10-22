import { getProductsCollection } from "./mongo";

export async function getProducts() {
  const collection = await getProductsCollection();
  const products = await collection.find({}).toArray(); 
    console.log("Products from DB:", products); 
  return products;
}

