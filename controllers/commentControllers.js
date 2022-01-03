var connection = require('../config/database');
const Comments = connection.comments;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.contents) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Comment
  const commentData = new Comments({
    postsid: req.body.postsid,
    title: req.body.title,
    contents: req.body.contents
  });

  // Save Comment in the database
  commentData
    .save(commentData)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comments."
      });
    });

};

// Retrieve all Comment from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Comments.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving comments."
    });
  });

  // Comments.find(condition)
  // .then(data => {
  //   res.send(data);
  // })
  // .catch(err => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while retrieving comments."
  //   });
  // });
};

// Find a single Comment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Comments.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Comments with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Comments with id=" + id });
    });
};

// Update a Comment by the id in the request
exports.update = (req, res) => {
  
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Comments.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Comment with id=${id}. Maybe Comment was not found!`
        });
      } else res.send({ message: "Comment was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Comment with id=" + id
      });
    });

};

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
  
  const id = req.params.id;

  Comments.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
        });
      } else {
        res.send({
          message: "Comment was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id
      });
    });
};

// Delete all Comment from the database.
exports.deleteAll = (req, res) => {
  
  Comments.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Comment were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });

};