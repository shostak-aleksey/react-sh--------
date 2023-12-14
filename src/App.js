import "./App.css";
import Profile from "./components/main/profile/profile";
import SideBar from "./components/LinksList/sideBar/sideBar";
import Header from "./components/header/header";
import { BrowserRouter, Route } from "react-router-dom";
import MessengerContainer from "./components/main/messenger/messengerContainer";
import FindFriendsContainer from "./components/main/FriendsList/findFriends/FindFriendsContainer";
import PageOfFriendContainer from "./components/main/FriendsList/pageOfFriend/pageOfFriendContainer";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SideBar />
        <Switch>
          <Route path="/Messenger"> <MessengerContainer /> </Route>
          <Route path="/Profile"> <Profile /> </Route>
          <Route path="/FindFriends/:user?"> <PageOfFriendContainer /> </Route>
          <Route path="/Friends"> <FindFriendsContainer /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
