import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/MH_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect successfully !!!");
  } catch (error) {
    console.log("Connect failure !!!");

  }
}

//? để ý cách export: {connect} - export ra object
export default { connect };
