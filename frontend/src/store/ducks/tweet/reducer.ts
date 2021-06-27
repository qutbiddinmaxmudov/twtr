import produce, { Draft } from 'immer'
import { LoadingState } from '../../storeTypes'
import { TweetActions, TweetState, TweetActionsType } from './tweetTypes'

const initialTweetState: TweetState = {
  data: null,
  loadingState: LoadingState.NEVER,
}

export const TweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
  switch (action.type) {
    case TweetActionsType.SET_DATA:
      draft.data = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TweetActionsType.SET_DATA_LOADING_STATUS:
      draft.loadingState = action.payload
      break

    default:
      break
  }
}, initialTweetState)
