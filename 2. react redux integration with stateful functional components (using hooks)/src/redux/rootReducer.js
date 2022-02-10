import redux, {combineReducers} from 'redux'

import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  usersState: usersReducer
})

export default rootReducer
