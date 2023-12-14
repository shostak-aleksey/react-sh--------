import { connect } from "react-redux";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../../redux/Reducers/profileReducer";
import PostsForm from "./posts";



const mapStateToProps = (state) => {
  return {
    newPostText: state.Profile.newPostText,
    posts: state.Profile.posts,
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
    onSubmit: (e) => {
      e.preventDefault();
    },
  };
};


const PostsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsForm);

export default PostsFormContainer;
