const {
     createNewPost, 
     searchId, 
     allPost, 
     searchByName,
     delPost
    } = require("../controllers/postController");

const postsHandler= async (req, res)=>{
    const {title}= req.query;
    try {
    const postByName= title? await searchByName(title): await allPost()
    res.status(200).json(postByName)
    } catch (error) {
    res.status(400).json({error:error.message})
    }
};

const postHandler= async (req, res)=>{
    const {id}= req.params
   try {
    const postId = await searchId(id)
    res.status(200).json(postId)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
};

const createPost= async (req,res)=>{
    const {title, subtitle, cost, img, UserId} = req.body
    try {
        const newPost = await createNewPost(title, subtitle, cost, img, UserId)
        res.status(201).json("creado exitosamente")
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};

const deletePost= async (req, res)=>{
    const {id}=req.params;
    try {
        const deletePostId= await delPost(id)
        res.status(200).json(deletePostId)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports= {
    postsHandler,
    postHandler,
    createPost,
    deletePost
};