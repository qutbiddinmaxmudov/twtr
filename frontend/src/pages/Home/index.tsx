import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import InputAdornment from '@material-ui/core/InputAdornment'
import Divider from '@material-ui/core/Divider/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import SearchIcon from '@material-ui/icons/SearchOutlined'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'

import { AddTweetForm } from '../../components/AddTweetForm'
import { Footer } from '../../components/Footer'
import { SidebarNavigation } from '../../components/SidebarNavigation'
import { Tweet } from '../../components/Tweet'
import styles from './styles'
import { SearchTextField } from '../../components/SearchTextField'
import { fetchTweets } from '../../store/ducks/tweets/action'
import { selectTweetsItems, selectISTweetsLoaded } from '../../store/ducks/tweets/selectors'
import { TweetSkeleton } from './TweetSkeleton'

export const Home: React.FC = (): React.ReactElement => {
  const classes = styles()
  const dispatch = useDispatch()
  const isTweetsLoaded = useSelector(selectISTweetsLoaded)
  const tweets = useSelector(selectTweetsItems)
  useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])
  return (
    <>
      <Container component="section" maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item sm={1} md={3}>
            <SidebarNavigation />
          </Grid>
          <Grid item sm={11} md={9}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Paper variant="outlined">
                  <Paper variant="outlined" className={classes.tweetsHeader}>
                    <Typography variant="h6">Главная</Typography>
                  </Paper>
                  <Paper>
                    <div className={classes.addForm}>
                      <AddTweetForm classes={classes} />
                    </div>
                    <div className={classes.addFormBottomLine} />
                  </Paper>
                  {isTweetsLoaded ? (
                    tweets.map((tweet) => <Tweet text={tweet.text} user={tweet.user} key={tweet.id} />)
                  ) : (
                    <TweetSkeleton />
                  )}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.rightSide}>
                  <SearchTextField
                    variant="outlined"
                    placeholder="Поиск по Твиттеру"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <Paper className={classes.rightSideBlock}>
                    <Paper className={classes.rightSideBlockHeader} variant="outlined">
                      <b>Актуальные темы</b>
                    </Paper>
                    <List>
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                          primary="Санкт-Петербург"
                          secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                              Твитов: 3 331
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                          primary="#коронавирус"
                          secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                              Твитов: 163 122
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                          primary="Беларусь"
                          secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                              Твитов: 13 554
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                    </List>
                  </Paper>
                  <Paper className={classes.rightSideBlock}>
                    <Paper className={classes.rightSideBlockHeader} variant="outlined">
                      <b>Кого читать</b>
                    </Paper>
                    <List>
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random/100x100"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Dock Of Shame"
                          secondary={
                            <Typography component="span" variant="body2" color="textSecondary">
                              @FavDockOfShame
                            </Typography>
                          }
                        />
                        <Button color="primary">
                          <PersonAddIcon />
                        </Button>
                      </ListItem>
                      <Divider component="li" />
                    </List>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
