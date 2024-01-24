const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
const Comment = require('../models/comment.js')


// Get all issues
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})


// Get issue by user id
issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.get("/user/:userId", (req, res, next) => {
    Issue.find({user: req.params.userId }, (err, issues) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(200).send(issues);
    })
})



// Add new Issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})



// add a new comment
issueRouter.post('/addComment/:issueId', async (req, res, next) => {
    try {
        req.body.issue = req.params.issueId
        req.body.user = req.auth._id
        const newComment = new Comment(req.body)
        newComment.save()
        const issue = await Issue.findOne({_id:req.params.issueId})
        issue.comments.push(newComment)
        issue.save()
        res.status(200).send(issue)
    } catch (err) {

    }
})


// Delete Issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id  },
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted issue: ${deletedIssue.title}`)
        }
    )
})


// Update Issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        req.body,
        { new: true },
        (err, updatedIssue) => {
            if(err){
            res.status(500)
            return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

issueRouter.put('/upVote/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: { likedUsers: req.auth._id },
            $pull: { dislikedUser: req.auth._id}
        },
        { new:true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )

})


issueRouter.put('/downVote/:issueId', (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId},
        {
            $addToSet: { dislikedUser: req.auth._id },
            $pull: { likedUsers: req.auth._id }
        },
        { new: true },
        (err, updatedIssue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})


module.exports = issueRouter
