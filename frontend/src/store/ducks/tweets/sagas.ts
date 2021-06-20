import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../../services/api/tweetsApi'
import { setTweets, setTweetsLoadingStatus } from './action'
import { LoadingState, TweetsActionsType, TweetsState } from './tweetsTypes'

export function* fetchTweetsRequest() {
  try {
    yield put(setTweetsLoadingStatus(LoadingState.LOADING))
    const data: TweetsState['items'] = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(data))
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingState.ERROR))
  }
}

export function* watchFetchTweets() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
