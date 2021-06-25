import { all } from 'redux-saga/effects'
import { watchFetchTags } from './ducks/tags/sagas'
import { watchFetchTweets } from './ducks/tweets/sagas'

export default function* rootSaga() {
  yield all([watchFetchTweets(), watchFetchTags()])
}
