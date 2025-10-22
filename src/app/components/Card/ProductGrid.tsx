// components/ProductGrid.tsx
"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/client/products";
import styles from "./ProductGrid.module.css"; // CSS module ל-grid

interface Product {
  _id: string;
  type: string;
  price: number;
  imageUrl: string;
  desc?: string;
}

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return <p className={styles.loading}>Loading products...</p>;

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          type={product.type}
          price={product.price}
          imageUrl={product.imageUrl}
          desc={product.desc}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
