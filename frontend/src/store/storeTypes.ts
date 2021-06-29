import { TagsState } from './ducks/tags/tagsTypes'
import { TweetState } from './ducks/tweet/tweetTypes'
import { TweetsState } from './ducks/tweets/tweetsTypes'

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}
export enum AddFormState {
  ADDED = 'ADDED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface RootState {
  tweets: TweetsState
  tags: TagsState
  tweet: TweetState
}
