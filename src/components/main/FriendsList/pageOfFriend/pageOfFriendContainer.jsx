import { connect } from "react-redux";
import PageOfFriend from "./pageOfFriend";
import { setUserPageState } from "../../../../redux/Reducers/pageOfFriendsReducer";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


const mapState = (state) => {
 return {
   aboutMe: state.pageOfFriends.aboutMe,
   lookingForAJob: state.pageOfFriends.lookingForAJob,
   lookingForAJobDescription: state.pageOfFriends.lookingForAJobDescription,
   fullName: state.pageOfFriends.fullName,
   userId: state.pageOfFriends.userId,
   large: state.pageOfFriends.photos.large,
   small: state.pageOfFriends.photos.small,
 };
};

const PageOfFriendWithRouter = withRouter(PageOfFriend); 

const PageOfFriendContainer = connect(mapState, { setUserPageState })(
  PageOfFriendWithRouter
);

export default PageOfFriendContainer;
