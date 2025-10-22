import { NextRequest, NextResponse } from "next/server";
import { getProducts } from '../../services/server/products';

export async function GET() {
    try {
    const products = await getProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/products:", error);
    return NextResponse.json({ error: "Failed to fetch products from server" }, { status: 500 });
  }
}

// import clientPromise from "@/app/services/server/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);
//     const products = await db.collection("products").find({}).toArray();
//     return NextResponse.json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }
