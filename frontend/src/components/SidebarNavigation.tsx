import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Twitter from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const styles = makeStyles((themes) => ({
  logo: {
    width: "max-content",
  },
  logoIcon: {
    fontSize: 32,
  },
  navigationButton: {
    borderRadius: 20,
    transition: "color 0.5s, background 0.5s",
    color: themes.palette.secondary.dark,
    padding: 12,
    height: "auto",
    "&:hover": {
      color: themes.palette.secondary.main,
    },
  },
  navigationIcon: {
    marginRight: 15,
    fontSize: 28,
  },
  navigationButtonText: {
    fontSize: 22,
    fontWeight: 600,
  },
}));

const SidebarNavigation = () => {
  const classes = styles();
  return (
    <List>
      <ListItem className={classes.logo} component={IconButton} color="primary">
        <Twitter className={classes.logoIcon} />
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <SearchIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>Поиск</Typography>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <NotificationsIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>
          Уведомления
        </Typography>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <MailOutlineIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>
          Сообщения
        </Typography>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <BookmarkBorderIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>
          Закладки
        </Typography>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <ListAltIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>Списки</Typography>
      </ListItem>
      <ListItem className={classes.navigationButton} component={Button}>
        <PermIdentityIcon className={classes.navigationIcon} />
        <Typography className={classes.navigationButtonText}>
          Профиль
        </Typography>
      </ListItem>
    </List>
  );
};
export default SidebarNavigation;
