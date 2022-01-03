module.exports = mongoose => {
  const posts = mongoose.model(
    "posts",
    mongoose.Schema(
      {
        body:String,
        permalink: String,
        author:String,
        title: String,
        tags: Array,
      },
      { timestamps: true }
    )
  );

  return posts;
};