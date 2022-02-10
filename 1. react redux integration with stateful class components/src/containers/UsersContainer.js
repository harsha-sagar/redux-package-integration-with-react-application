import React from 'react'
import { connect } from 'react-redux'

import UsersComponent from '../components/UsersComponent'
import { fetchUsers } from '../redux/users/actionCreators'

function UsersContainer({ usersInfo, getUsers}) {
	return (
		<UsersComponent usersInfo={usersInfo} getUsers={getUsers}/>
	)
}

const mapStateToProps = (state) => {
	return {
		usersInfo: state.usersState
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch(fetchUsers())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
