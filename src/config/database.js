const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(
  "mongodb+srv://shashirocks7761_db_user:1tuADkbFVo54BsLG@cluster0.abgm6iz.mongodb.net/"
);

};

module.exports = connectDB;
