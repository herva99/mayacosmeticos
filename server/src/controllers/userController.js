const { Op } = require("sequelize");
const{ User } = require("../DB/db")

const createUser = async (name, lastName, email) => 
    await User.create({name, lastName, email})
;

const userById = async (id)=> 
    await User.findByPk(id);

const getUserByName = async (name)=>
    await User.findAll({where: {
        name: {
          [Op.iLike]: `%${name}%`
        }}})

const getAllUsers= async ()=>
    await User.findAll()

module.exports= {
    createUser, 
    userById,
    getUserByName,
    getAllUsers
};