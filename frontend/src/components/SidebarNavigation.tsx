import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Twitter from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import CreateIcon from '@material-ui/icons/Create'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import { AddTweetForm } from './AddTweetForm'
import { ModalBlock } from './ModalBlock'
import styles from '../pages/Home/styles'
import { Link } from 'react-router-dom'

export const SidebarNavigation = (): React.ReactElement => {
  const classes = styles()
  const [visibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false)

  const handleClickOpenAddTweet = () => {
    setSetVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setSetVisibleAddTweet(false)
  }
  return (
    <List className={classes.sidebarNavigation}>
      <ListItem className={classes.logo} component={IconButton} color="primary">
        <Link to="/home">
          <Twitter className={classes.logoIcon} />
        </Link>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <SearchIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Поиск</Typography>
        </Hidden>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <NotificationsIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Уведомления</Typography>
        </Hidden>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <MailOutlineIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Сообщения</Typography>
        </Hidden>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <BookmarkBorderIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Закладки</Typography>
        </Hidden>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <ListAltIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Списки</Typography>
        </Hidden>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <PermIdentityIcon className={classes.navigationIcon} />
        <Hidden smDown>
          <Typography className={classes.navigationButtonText}>Профиль</Typography>
        </Hidden>
      </ListItem>
      <ListItem>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock closeFunc={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} classes={classes} />
          </div>
        </ModalBlock>
      </ListItem>
    </List>
  )
}
