import { TagsState } from './ducks/tags/tagsTypes'
import { TweetsState } from './ducks/tweets/tweetsTypes'

export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface RootState {
  tweets: TweetsState
  tags: TagsState
}
