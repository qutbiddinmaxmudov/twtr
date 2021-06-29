import { call, put, takeEvery } from 'redux-saga/effects'
import { tweetsApi } from '../../../services/api/tweetsApi'
import { LoadingState } from '../../storeTypes'
import { addFetchedTweet, setTweets, setTweetsLoadingStatus } from './action'
import { AddTweetActionInterface, Tweet, TweetsActionsType, TweetsState } from './tweetsTypes'

export function* fetchTweetsRequest() {
  try {
    yield put(setTweetsLoadingStatus(LoadingState.LOADING))
    const data: TweetsState['items'] = yield call(tweetsApi.fetchTweets)
    yield put(setTweets(data))
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingState.ERROR))
  }
}

export function* addTweetRequest({ payload }: AddTweetActionInterface) {
  try {
    const data: Tweet = {
      id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test User',
        username: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?3',
      },
    }

    const item: Tweet = yield call(tweetsApi.addTweet, data)
    yield put(addFetchedTweet(item))
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingState.ERROR))
  }
}

export function* watchFetchTweets() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeEvery(TweetsActionsType.ADD_TWEET, addTweetRequest)
}
