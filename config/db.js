import mongoose from "mongoose";

const connectWithDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(" MongoDB Connected Successful");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectWithDatabase;
