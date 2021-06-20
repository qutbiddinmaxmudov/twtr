import { all } from 'redux-saga/effects'
import { watchFetchTweets } from './ducks/tweets/sagas'

export default function* rootSaga() {
  yield all([watchFetchTweets()])
}
