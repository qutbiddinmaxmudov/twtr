import produce, { Draft } from 'immer'
import { LoadingState, TweetsActions, TweetsActionsType, TweetsState } from './tweetsTypes'

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, { type, payload }: TweetsActions) => {
  if (type === TweetsActionsType.SET_TWEETS) {
    draft.items = payload
  }
}, initialTweetsState)
