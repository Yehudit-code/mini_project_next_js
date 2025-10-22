import styles from "./Card.module.css";

interface CardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Card({ name, description, price, image }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
}
