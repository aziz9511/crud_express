var connection = require('../config/database');
const Posts = connection.posts;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.contents) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Article
  const postData = new Posts({
    body: req.body.contents,
    permalink: req.body.permalink,
    author: req.body.author,
    title: req.body.title,
    tags: req.body.tags ? req.body.tags : [],
    comments: []
  });

  // Save Article in the database
  postData
    .save(postData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article."
      });
    });

};

// Retrieve all Article from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Posts.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving article."
    });
  });
};

// Find a single Article with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Posts.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Article with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Article with id=" + id });
    });
};

// Update a Article by the id in the request
exports.update = (req, res) => {
  
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Article with id=${id}. Maybe Article was not found!`
        });
      } else res.send({ message: "Article was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Article with id=" + id
      });
    });

};

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
  
  const id = req.params.id;

  Posts.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
        });
      } else {
        res.send({
          message: "Article was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id
      });
    });
};

// Delete all Article from the database.
exports.deleteAll = (req, res) => {
  
  Posts.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Article were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });

};

// Find all published Article
exports.findAllPublished = (req, res) => {
  
};