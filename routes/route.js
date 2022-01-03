var express = require('express');
var router = express.Router();

const posts = require('../controllers/postControllers');

const comments = require('../controllers/commentControllers');

router.get('/', function(req, res) {
  res.send('Welcome to our app')
});

// Retrieve all article
router.get("/api/article", posts.findAll);

// Create a new article
router.post("/api/article", posts.create);

// Retrieve a single Article with id
router.get("/api/article/:id", posts.findOne);

// Update a Article with id
router.put("/api/article/:id", posts.update);

// Delete a Article with id
router.delete("/api/article/:id", posts.delete);

// Create a new Comments
router.delete("/api/comment", posts.deleteAll);

// Retrieve all Comments
router.get("/api/comment", comments.findAll);

// Create a new Comments
router.post("/api/comment", comments.create);

// Retrieve a single Comments with id
router.get("/api/comment/:id", comments.findOne);

// Update a Comments with id
router.put("/api/comment/:id", comments.update);

// Delete a Comments with id
router.delete("/api/comment/:id", comments.delete);

// Create a new Comments
router.delete("/api/comment", comments.deleteAll);

module.exports = router;