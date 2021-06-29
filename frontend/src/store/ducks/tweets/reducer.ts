import produce, { Draft } from 'immer'
import { AddFormState, LoadingState } from '../../storeTypes'
import { TweetsActions, TweetsActionsType, TweetsState } from './tweetsTypes'

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormState: AddFormState.NEVER,
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
    case TweetsActionsType.ADD_FETCHED_TWEET:
      draft.items.push(action.payload)
      break
    case TweetsActionsType.ADD_TWEET_LOADING_STATUS:
      draft.addFormState = action.payload
      break
    default:
      break
  }
}, initialTweetsState)
