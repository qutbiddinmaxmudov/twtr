import produce, { Draft } from 'immer'
import { LoadingState } from '../../storeTypes'
import { TweetsActions, TweetsActionsType, TweetsState } from './tweetsTypes'

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
      draft.items = action.payload
      draft.loadingState = LoadingState.LOADED
      break
    case TweetsActionsType.SET_TWEETS_LOADING_STATUS:
      draft.loadingState = action.payload
      break

    default:
      break
  }
}, initialTweetsState)
