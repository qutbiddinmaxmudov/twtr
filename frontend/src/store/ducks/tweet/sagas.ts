import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../../services/api/tweetsApi'
import { LoadingState } from '../../storeTypes'
import { Tweet } from '../tweets/tweetsTypes'
import { setTweetData, setTweetLoadingStatus } from './action'
import { TweetActionsType } from './tweetTypes'

export function* fetchTweetRequest() {
  try {
    yield put(setTweetLoadingStatus(LoadingState.LOADING))
    const data: Tweet = yield call(tweetsApi.fetchTweetData, '60cf78992ffb9c46df5cf2fc')
    yield put(setTweetData(data))
  } catch (error) {
    yield put(setTweetLoadingStatus(LoadingState.ERROR))
  }
}

export function* watchFetchTweet() {
  yield takeEvery(TweetActionsType.FETCH_DATA, fetchTweetRequest)
}
