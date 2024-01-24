const express = require("express");
const commentRouter = express.Router();
const Comments = require("../models/comment.js");

// Get all commments
commentRouter.get("/", (req, res, next) => {
  Comments.find((err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

// Get comment by issueID
commentRouter.get("/:issueId", (req, res, next) => {
  Comments.find({ _id: req.params.issueId }, (err, comments) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comments);
  });
});

//Create a comment
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.auth._id; // Attach the user who posted the comment
  req.body.issue = req.params.issueId; //Link the comment to the issue
  const newComments = new Comments(req.body);
  newComments.save((err, savedComment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedComment);
  });
});

//Delete Comment
commentRouter.delete("/:commentId", (req, res, next) => {
  Comments.findByIdAndDelete(
    { _id: req.params.commentId, user: req.auth._id },
    (err, deleteComments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Succesfully delete comment: ${deleteComments.text}`);
    }
  );
});

//Update a comment
commentRouter.put("/:commentId", (req, res, next) => {
  Comments.findByIdAndUpdate(
    req.params.commentId,
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedComment);
    }
  );
});
module.exports = commentRouter;
