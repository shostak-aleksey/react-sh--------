const UNFOLLOW = { type: "UNFOLLOW" };
const FOLLOW = { type: "FOLLOW" };
const PUSH_STATE = { type: "PUSH_STATE" };
const SET_SELECT_PAGE = { type: "SET_SELECT_PAGE" };
const TOGGLE_DOWNLOAD_STATUS = { type: "TOGGLE_DOWNLOAD_STATUS" };

const initialState = {
  users: [],
  totalUsersCount: 3547,
  pageSize: 100,
  selectPage: 1,
  downloadStatus: false
};

const FindFriendsReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map((user) => {
        if (user.id === action.userId) {
          return { ...user, followed: true };
        }
        return user;
      }),
    };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map((user) => {
        if (user.id === action.userId) {
          return { ...user, followed: false };
        }
        return user;
      }),
    };
  } else if (action.type === PUSH_STATE) {
    return { ...state, users: [...action.state] };

  } else if (action.type === SET_SELECT_PAGE) {
    return { ...state, selectPage: action.page };

  } else if (action.type === TOGGLE_DOWNLOAD_STATUS) {
    return { ...state, downloadStatus: action.status };
  }

  return state 
}

export const follow = (userId) => ({ type: FOLLOW , userId});
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setState = (state) => ({ type: PUSH_STATE, state });
export const setSelectPage  = (page) => ({ type: SET_SELECT_PAGE, page });
export const toggleDownloadStatus = (status) => ({ type: TOGGLE_DOWNLOAD_STATUS, status });


export default FindFriendsReducer;
