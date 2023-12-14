import s from "../profile.module.css";
import Post from "./post";
import React from "react";

const PostsForm = (props) => {

  const addPost = () => {
  props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };




// debugger
  return (
    <div>
      <form onSubmit={props.onSubmit} className={s.form} >
        <div className={s.div}>
          <label></label>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
            className={s.input}
            type="massage"
            
          />
          
          <button onClick={addPost} className={s.btn}>
            Отправить
          </button>
        </div>
      </form>

      {props.posts.map((p) => {
        return (
          <Post
            key={Math.random().toFixed(3)}
            message={p.message}
            likes={p.likes}
          />
        );
      })}
    </div>
  );
};

export default PostsForm;
