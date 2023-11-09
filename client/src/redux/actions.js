import axios from "axios";
import { GET_POSTS, DELETE_POST } from "./actionTypes";

// const apiKeyIBB = process.env.API_KEY_IMGBB;

export const getPost = () => {
    return async function(dispatch){
        const {data} = await axios.get("http://localhost:3001/post");
        dispatch({type: GET_POSTS, payload: data})
    }
}

export const delPost = (id)=>{
    return async function(dispatch){
        const {data}= await axios.delete(`http://localhost:3001/post/${id}`);
        dispatch({type: DELETE_POST, payload: data})
    }
}
