import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  // ✅ use dbName instead of appending `/e-commerce`
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "e-commerce",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
