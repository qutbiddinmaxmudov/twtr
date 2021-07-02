import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'

import { fetchTweetData } from '../../../store/ducks/tweet/action'
import { selectIsTweetLoaded, selectTweetData } from '../../../store/ducks/tweet/selectors'

const styles = makeStyles((theme) => ({
  tweet: {
    padding: 15,
  },
  tweetHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    marginRight: 20,
    height: 48,
    width: 48,
  },
  tweetInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  tweetContent: {
    fontSize: 23,
    lineHeight: '28px',
    marginBottom: 30,
    wordBreak: 'break-word' 
  },
  loadingProgress: {
    display: 'block',
    margin: '15px auto',
  },
  tweetFooter: {
    display: 'flex',
    alignItems: 'center',
  },
  tweetIcon: {
    fontSize: 20,
  },
  tweetIconWrapper: {
    flexGrow: 0.25,
  },
  tweetUserName: {
    color: grey[500],
  },
}))

interface SingleTweetPageInterface {
  id: string
}
export const SingleTweet = () => {
  const classes = styles()
  const { id: tweetId }: SingleTweetPageInterface = useParams()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isTweetDataLoaded = useSelector(selectIsTweetLoaded)
  useEffect(() => {
    dispatch(fetchTweetData(tweetId))
  }, [dispatch, tweetId])
  return isTweetDataLoaded ? (
    <Paper className={classes.tweet}>
      <div className={classes.tweetHeader}>
        <Avatar className={classes.avatar} alt={`${tweetData?.user.fullname}`} src={tweetData?.user.avatarUrl} />
        <Typography className={classes.tweetInfo} component="div">
          <b>{tweetData?.user.fullname}</b>
          <span className={classes.tweetUserName}>@{tweetData?.user.username}</span>
        </Typography>
      </div>
      <Typography className={classes.tweetContent} variant="body1" gutterBottom>
        {tweetData?.text}
      </Typography>
      <div className={classes.tweetFooter}>
        <div className={classes.tweetIconWrapper}>
          <IconButton>
            <CommentIcon className={classes.tweetIcon} />
          </IconButton>
          <span>1</span>
        </div>
        <div className={classes.tweetIconWrapper}>
          <IconButton>
            <RepostIcon className={classes.tweetIcon} />
          </IconButton>
        </div>
        <div className={classes.tweetIconWrapper}>
          <IconButton>
            <LikeIcon className={classes.tweetIcon} />
          </IconButton>
        </div>
        <div className={classes.tweetIconWrapper}>
          <IconButton>
            <ShareIcon className={classes.tweetIcon} />
          </IconButton>
        </div>
      </div>
    </Paper>
  ) : (
    <CircularProgress color="primary" className={classes.loadingProgress} />
  )
}
