const SET_USER_PAGE_STATE = { type: "SET_USER_PAGE_STATE" };

const initialState = {
  aboutMe: "я крутой чувак 1001%",
  lookingForAJob: true,
  lookingForAJobDescription: "не ищу, а дурачусь",
  fullName: "samurai dimych",
  userId: 2,
  photos: {
    small:
      "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    large:
      "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
  },

};

const pageOfFriendsReducer = (state = initialState, action) => {
  if (action.type === SET_USER_PAGE_STATE) {
    return {
      ...state,
      aboutMe: action.userState.aboutMe,
      lookingForAJob: action.userState.lookingForAJob,
      lookingForAJobDescription: action.userState.lookingForAJobDescription,
      fullName: action.userState.fullName,
      userId: action.userState.userId,
      photos: action.userState.photos,
    };
  } else {
    return state
  }
};

export const setUserPageState = (userState) => {
  return { type: SET_USER_PAGE_STATE, userState };
};

export default pageOfFriendsReducer;
