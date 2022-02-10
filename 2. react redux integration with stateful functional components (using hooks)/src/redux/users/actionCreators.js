import { FETCH_USERS, USERS_FETCH_PROGRESS, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE } from './constants'

export const fetchUsers = () => {
	return {
		type: FETCH_USERS
	}
}

export const fetchUsersProgress = () => {
	return {
		type: USERS_FETCH_PROGRESS
	}
}
export const fetchUsersSuccess = (users) => {
	return {
		type: USERS_FETCH_SUCCESS,
		payload: users
	}
}
export const fetchUsersFailure = (error) => {
	return {
		type: USERS_FETCH_FAILURE,
		payload: error
	}
}
