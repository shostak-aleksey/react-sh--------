const Post = (props) => {
  return (

      <li>
        <p className="i">{props.message}</p>
        <div>{props.likes} </div>
      </li>

  );
};

export default Post;
