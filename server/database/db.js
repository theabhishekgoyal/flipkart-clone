import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.d89xtge.mongodb.net/cluster0?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Data base connected Successfully");
  } catch (err) {
    console.log("Error connecting", err.message);
  }
};
export default Connection;
