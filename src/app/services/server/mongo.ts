import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define MONGODB_URI in .env.local");
}

declare global {
  var mongooseConn:
    | { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
    | undefined;
}

const cached = global.mongooseConn || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI!, {
        dbName: "DB01",
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  global.mongooseConn = cached;

  console.log("✅ Connected to MongoDB Atlas");
  return cached.conn;
}

export async function getProductsCollection() {
  await connectDB();
  if (!mongoose.connection.db) {
    throw new Error("MongoDB connection not initialized");
  }
  return mongoose.connection.db.collection("products");
}
