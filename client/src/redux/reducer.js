import { GET_POSTS, DELETE_POST } from "./actionTypes";

const initialState= {
    posts: []
};

const rootReducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_POSTS: return {
            ...state, posts: action.payload
        }
        case DELETE_POST:
  return {
    ...state,
    posts: state.posts.filter(post => post.id !== action.payload.id) // Actualizar el estado eliminando el post con el ID correspondiente
  };


        default:
            return {...state}
    }
}

export default rootReducer;