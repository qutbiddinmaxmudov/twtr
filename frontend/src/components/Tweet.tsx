import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import { makeStyles } from '@material-ui/core/styles'
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ShareIcon from '@material-ui/icons/ReplyOutlined'
import { Link } from 'react-router-dom'

interface TweetProps {
  id: string
  text: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

const styles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  tweet: {
    paddingTop: 10,
    borderTop: '0.5px rgba(0,0,0,0.12) solid',
    borderBottom: '0.5px rgba(0,0,0,0.12) solid',
  },
  tweetWrapper: {
    textDecoration: 'none',
    color: 'inherit',
  },
  tweetLeftSide: {
    display: 'flex',
    justifyContent: 'center',
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    display: 'flex',
  },
  tweetIcon: {
    fontSize: 20,
  },
  tweetIconWrapper: {
    flexGrow: 0.25,
  },
}))

export const Tweet = ({ text, user, id }: TweetProps) => {
  const classes = styles()
  return (
    <Paper className={classes.tweet}>
      <Link to={`/home/tweet/${id}`} className={classes.tweetWrapper}>
        <Grid container spacing={0}>
          <Grid item xs={2} className={classes.tweetLeftSide}>
            <Avatar className={classes.avatar} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
          </Grid>
          <Grid item xs={10}>
            <Typography>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>1 ч</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
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
          </Grid>
        </Grid>
      </Link>
    </Paper>
  )
}
