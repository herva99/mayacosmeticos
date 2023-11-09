const { createUser, userById, getUserByName, getAllUsers } = require("../controllers/userController");

const usersHandlers= async (req,res)=>{
    const{name}= req.query;
    try {
        const users = name? await getUserByName(name) : await getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const userHandler= async (req, res)=>{
    const{id}= req.params
    try {
        const user= await userById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const createUserHandler=  async (req, res)=>{
    const {name, lastName, email}= req.body
    try {
        const newUser= await createUser(name, lastName, email)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports= {
    userHandler,
    usersHandlers,
    createUserHandler
}