import React from 'react'

function UsersComponent({ usersState }) {
	return (
		<div>
			Users List below
			<ul>
				{
					usersState.users.map((user) => {
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

export default UsersComponent
