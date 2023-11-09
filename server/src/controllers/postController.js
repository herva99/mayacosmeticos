const { Op } = require("sequelize");
const {Post} = require("../DB/db")

const createNewPost= async (title, subtitle, cost, img, UserId) =>{
    const newPost= await Post.create({title, subtitle, cost, img});
    await newPost.setUser(UserId);
    return newPost;
};

const searchId = async (id)=>
    await Post.findByPk(id);
 
const searchByName = async (title)=>
    await Post.findAll({where: { title: {[Op.iLike]: `%${title}%`}}});

const allPost= async ()=>
    await Post.findAll();

const delPost= async(id)=>{
    const deletePost= await Post.findOne({where: {id}});
    if(!deletePost) {throw Error `No se encuentra el post `};
    await Post.destroy({where: {id}});
    return "se eliminó el post" 
}

module.exports= {
    createNewPost,
    searchId,
    allPost,
    searchByName,
    delPost
}