import { connect } from "mongoose";

let cachedDb = null;

export default function connectDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const db = connect(
    process.env.MONGO_URL,
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
