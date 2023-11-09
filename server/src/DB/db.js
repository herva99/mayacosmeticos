const { Sequelize }= require ("sequelize");
const UserModel = require ("../models/userModels");
const PostModel = require ("../models/postModels")
require("dotenv").config();
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT
}= process.env
const sequelize = new Sequelize(`${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
{logging: false});

UserModel(sequelize);
PostModel(sequelize);

const {User, Post} = sequelize.models

User.hasMany(Post);
Post.belongsTo(User)

module.exports= { sequelize, ...sequelize.models }