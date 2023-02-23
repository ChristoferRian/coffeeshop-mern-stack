const mongoose = require("mongoose");//library buat mongoDB(atlas) buat bikin skema pada database
mongoose.set('strictQuery', false);//biar gak ganggu di terminal,biarin aja jangan dihapus atau gak ntar malah ngespam warning yang gak jelas


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://coffeeshop-user:user-coffeeshop@coffeeshop-mern-stack.90zwrc8.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
