import React from 'react'

class Users extends React.Component {
	constructor(props){
		super(props)
	}

	componentDidMount(){
		this.props.getUsers()
	}

	render(){
		return (
			<div>
				Users List below
				<ul>
					{
						this.props.usersInfo.users.map((user) => {
							return (
								<li key={ user.id }>
									{ user.name }
								</li>
							)
						})
					}
				</ul>
			</div>
		)	
	}
}

export default Users
