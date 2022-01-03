module.exports = mongoose => {
  const comments = mongoose.model(
    "comments",
    mongoose.Schema(
      {
        postsid:String,
        title:String,
        contents: String,
      },
      { timestamps: true }
    )
  );

  return comments;
};