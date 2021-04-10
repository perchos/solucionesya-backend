import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB connection established");
  } catch (error) {
    throw Error(`Error connecting to db: ${error}`);
  }
};

export default dbConnection;
