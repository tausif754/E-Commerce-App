import mongoose from "mongoose";

const connectDB = async () => {
  // console.log(process.env.MONGODB_URI);
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
};

export default connectDB;
