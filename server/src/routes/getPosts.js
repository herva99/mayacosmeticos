const {Router} = require("express")
const { 
    postsHandler, 
    postHandler, 
    createPost,
    deletePost
} = require("../Handlers/postHandlers")

const getPost = Router()

getPost.get("/", postsHandler)
getPost.get("/:id", postHandler)
getPost.post("/", createPost)
getPost.delete("/:id", deletePost)

module.exports= getPost