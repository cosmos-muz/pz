const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      `${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}` || "",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connected Successfully"))
    .catch((error: Error) => {
      console.error(error);
      console.error("DB not connected");
      throw error;
    });
};

export { connectDB };
