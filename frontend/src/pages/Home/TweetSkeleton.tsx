import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = makeStyles((theme) => ({
  Tweet: {
    paddingTop: 10,
    borderTop: '0.5px rgba(0,0,0,0.12) solid',
    borderBottom: '0.5px rgba(0,0,0,0.12) solid',
    paddingRight: 20,
  },
  tweetLeftSide: {
    display: 'flex',
    justifyContent: 'center',
  },
  tweetSkelet: {
    '&:first-of-type': {
      borderRadius: 4,
    },
    marginBottom: 15,
    borderRadius: 8,
  },
}))

export const TweetSkeleton = () => {
  const classes = styles()
  return (
    <Paper className={classes.Tweet}>
      <Grid container spacing={0}>
        <Grid item xs={2} className={classes.tweetLeftSide}>
          <Skeleton variant="circle" animation="wave" width={48} height={48} />
        </Grid>
        <Grid item xs={10}>
          <Skeleton variant="text" className={classes.tweetSkelet} animation="wave" />
          <Skeleton variant="rect" className={classes.tweetSkelet} animation="wave" height={100} />
          <Skeleton variant="rect" className={classes.tweetSkelet} animation="wave" height={30} />
        </Grid>
      </Grid>
    </Paper>
  )
}
