const {Router} = require ("express");
const mainRouter = Router();

//RUTAS
const getPost = require("./getPosts");
const getUsers= require("./getUsers")

//
mainRouter.use("/users", getUsers);
mainRouter.use("/post", getPost);

module.exports= mainRouter;