import { connect } from "mongoose";

let cachedDb = null;

export default function connectDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const db = connect(
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_URL
      : "mongodb://localhost:27017/portfolio",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  cachedDb = db;

  return db;
}
