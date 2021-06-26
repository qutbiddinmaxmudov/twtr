import axios from 'axios'
import { Tweet, TweetsState } from '../../store/ducks/tweets/tweetsTypes'

export const tweetsApi = {
  async fetchTweets(): Promise<TweetsState['items']> {
    const { data } = await axios.get('/tweets')
    return data
  },
  async fetchTweetData(id: string): Promise<Tweet> {
    const { data } = await axios.get(`/tweets/${id}`)
    return data
  },
}
