"use client";
import React from "react";
import styles from "./ProductCard.module.css"; // ייבוא CSS module

interface ProductCardProps {
  type: string;
  price: number;
  imageUrl: string;
  desc?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ type, price, desc , imageUrl}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={type} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{type}</h3>
        {desc && <p className={styles.description}>{desc}</p>}
        <p className={styles.price}>
          ${Number(price).toFixed(2)}
          {/* ${price !== undefined ? price.toFixed(2) : "0.00"} */}
        </p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
