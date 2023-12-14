const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "hello", likes: 0 },
    { id: 3, message: "hellooooooooo", likes: 0 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const post = {
      id: 6,
      message: state.newPostText,
      likes: 0,
    };

    const stateCopy = { ...state };
    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(post);
    stateCopy.newPostText = "";
    console.log(1);

    return stateCopy;
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    let stateCopy = { ...state };
    stateCopy.newPostText = action.newText;
    console.log(2);

    return stateCopy;
  }
  return state;
};


export const addPostCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
