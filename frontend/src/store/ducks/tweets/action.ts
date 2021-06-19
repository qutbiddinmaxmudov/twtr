import { SetTweetsActionInterface, TweetsActionsType, TweetsState } from './tweetsTypes'

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})
