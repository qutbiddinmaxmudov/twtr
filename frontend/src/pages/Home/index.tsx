import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Twitter from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer";

const styles = makeStyles((themes) => ({
  wrapper: {
    height: "calc(100vh - 50px)",
  },
  logo: {
    width: "max-content",
  },
  logoIcon: {
    fontSize: 32,
  },
  navigationButton: {
    borderRadius: 20,
    transition: "color 0.5s, background 0.5s",
    "&:hover": {
      color: themes.palette.primary.main,
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

export const Home: React.FC = (): React.ReactElement => {
  const classes = styles();
  return (
    <>
      <Container component="section" maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <List>
              <ListItem
                className={classes.logo}
                component={IconButton}
                color="primary"
              >
                <Twitter className={classes.logoIcon} />
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <SearchIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Поиск
                </Typography>
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <NotificationsIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Уведомления
                </Typography>
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <MailOutlineIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Сообщения
                </Typography>
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <BookmarkBorderIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Закладки
                </Typography>
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <ListAltIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Списки
                </Typography>
              </ListItem>
              <ListItem
                className={classes.navigationButton}
                component={IconButton}
              >
                <PermIdentityIcon className={classes.navigationIcon} />
                <Typography className={classes.navigationButtonText}>
                  Профиль
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={9}>
            <Paper>xs</Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
