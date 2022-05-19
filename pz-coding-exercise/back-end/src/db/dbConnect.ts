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
    .catch((err) => {
      console.error(err);
      console.error("DB not connected");
    });
};

export default connectDB;
