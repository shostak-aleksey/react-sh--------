import React from "react";
// import FriendsList from '../../../LinksList/FriendsList/FriendsList'
import s from "./pageOfFriend.module.css";
import Page from "../../../UI/Page";
import axios from "axios";

class PageOfFriend extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.user;
    console.log(userId);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
      .then((response) => {
        this.props.setUserPageState(response.data);
      });
  }

  render() {
    return (
      <div className={`content ${s.page}`}>
        <Page
          large={this.props.large}
          aboutMe={this.props.aboutMe}
          lookingForAJob={this.props.lookingForAJob}
          lookingForAJobDescription={this.props.lookingForAJobDescription}
          fullName={this.props.fullName}
        />
        {/* <FriendsList /> */}
      </div>
    );
  }
}

export default PageOfFriend;
