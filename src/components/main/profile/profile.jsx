import PostsFormContainer from "./posts/postsContainer";
import s from "./profile.module.css";

const Profile = (props) => {
  
  return (
    <div className={s.prof}>
      <img
        className={s.img}
        src="http://vsegda-pomnim.com/uploads/posts/2022-03/1647656353_35-vsegda-pomnim-com-p-gora-sinyaya-foto-42.jpg"
        alt=""
      />
      <PostsFormContainer  />
    </div>
  );
};

export default Profile;
