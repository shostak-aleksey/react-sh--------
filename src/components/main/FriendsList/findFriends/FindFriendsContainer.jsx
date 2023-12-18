import { connect } from 'react-redux'
import FindFriends from '../findFriends/findFriends'
import {
	follow,
	setState,
	unfollow,
	setSelectPage,
	toggleDownloadStatus,
	getUsers,
} from '../../../../redux/Reducers/findFriendsReducer'
import { setUserPageState } from '../../../../redux/Reducers/pageOfFriendsReducer'

const mapState = state => {
	return {
		state: state.Friends.users,
		totalUsersCount: state.Friends.totalUsersCount,
		pageSize: state.Friends.pageSize,
		selectPage: state.Friends.selectPage,
		downloadStatus: state.Friends.downloadStatus,
		userId: state.pageOfFriends.userId,
	}
}

const FindFriendsContainer = connect(mapState, {
	follow,
	unfollow,
	setState,
	setSelectPage,
	toggleDownloadStatus,
	setUserPageState,
	getUsers,
})(FindFriends)

export default FindFriendsContainer
