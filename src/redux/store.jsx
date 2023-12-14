import { combineReducers } from "redux";
import profileReducer from "./Reducers/profileReducer";
import { legacy_createStore as createStore} from 'redux'
import MessengerReducer from "./Reducers/messengerReducer";
import FindFriendsReducer from "./Reducers/findFriendsReducer";
import pageOfFriendsReducer from "./Reducers/pageOfFriendsReducer";



 
export const reducers = combineReducers({
  Profile: profileReducer,
  Messenger: MessengerReducer,
  Friends: FindFriendsReducer,
  pageOfFriends: pageOfFriendsReducer,
});


let store = createStore(reducers);
  

export default store