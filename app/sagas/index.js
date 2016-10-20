import { takeEvery, takeLatest } from 'redux-saga';

function* mySaga() {
  yield* takeLatest("USER_FETCH_REQUESTED", () => {});
}

export default mySaga;
