import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchTweetData } from '../../../store/ducks/tweet/action'
import { selectIsTweetLoaded, selectTweetData } from '../../../store/ducks/tweet/selectors'

interface SingleTweetPageInterface {
  id: string
}
export const SingleTweet = () => {
  const { id: tweetId }: SingleTweetPageInterface = useParams()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isTweetDataLoaded = useSelector(selectIsTweetLoaded)
  useEffect(() => {
    dispatch(fetchTweetData(tweetId))
  }, [dispatch])
  return <div>SingleTweet</div>
}
