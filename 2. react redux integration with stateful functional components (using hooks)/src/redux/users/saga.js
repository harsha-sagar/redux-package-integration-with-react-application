import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { FETCH_USERS } from './constants'
import { fetchUsersProgress, fetchUsersFailure, fetchUsersSuccess } from './actionCreators'

// watcher
function* userSaga() {
  yield takeLatest(FETCH_USERS, getUsers)
}

const apiCallFn = () => axios.get('https://jsonplaceholder.typicode.com/users')

// worker
function* getUsers(action) {

	yield put(fetchUsersProgress());

  try {
    const result = yield call(apiCallFn)
    const users = result.data

		yield put(fetchUsersSuccess(users))
  } catch(e) {
    yield put(fetchUsersFailure(e.message))  
  }
};

export default userSaga