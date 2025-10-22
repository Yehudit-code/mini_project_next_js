import Header from "./components/Header/Header";
import Card from "./components/Card/ProductCard";
import ProductGrid from "./components/Card/ProductGrid";

export default async function Home() {
  // connect directly to DB instead of fetching from API
  // await connectDB();
  const products = [""]

  return (
    <main>
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#fdfbf7",
        }}
      > */}
        {/* {products.map((p: any) => (
          <Card key={p._id} {...p} />
        ))} */}
      {/* </div> */}
      <ProductGrid />
    </main>
  );
}