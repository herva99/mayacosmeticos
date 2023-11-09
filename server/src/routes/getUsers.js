const {Router} = require("express");
const { 
    usersHandlers, 
    userHandler, 
    createUserHandler 
} = require("../Handlers/usersHandlers");

const getUsers = Router();

getUsers.get("/", usersHandlers);
getUsers.get("/:id", userHandler)
getUsers.post("/", createUserHandler)

module.exports= getUsers;