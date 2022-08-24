const mongoose = require("mongoose");

const DB =
  "mongodb+srv://faraz:faraz123@cluster0.04cbfpn.mongodb.net/usersauth?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("connection started"))
  .catch((error) => console.log(error.message));
