import { combineReducers } from 'redux'
import { tagsReducer } from './ducks/tags/reducer'
import { TweetReducer } from './ducks/tweet/reducer'
import { tweetsReducer } from './ducks/tweets/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  tweet: TweetReducer,
})
