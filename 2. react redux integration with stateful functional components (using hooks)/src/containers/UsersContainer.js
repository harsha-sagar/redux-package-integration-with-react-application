import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import UsersComponent from '../components/UsersComponent'
import { fetchUsers } from '../redux/users/actionCreators'

function UsersContainer() {
	const usersState = useSelector(state => state.usersState)
	const dispatch = useDispatch()

	useEffect(
		() => {
			dispatch(fetchUsers())
		},
		[]
	)

	return (
		<UsersComponent usersState={usersState} />
	)
}

export default UsersContainer
