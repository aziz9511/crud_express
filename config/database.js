

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb+srv://rootmindtechweb:mabdulaziz2014tix@cluster0.vzvd9.mongodb.net/sample_training?retryWrites=true&w=majority";
db.posts = require("../models/posts.model.js")(mongoose);
db.comments = require("../models/comments.model.js")(mongoose);

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to the database!");
})
.catch(err => {
  console.log("Cannot connect to the database!", err);
  process.exit();
});

module.exports = db; 