import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from '@material-ui/core/Container'
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Twitter from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

export const Home: React.FC = (): React.ReactElement => {
  return (
    <Container component="section" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <List style={{ width: "max-content" }}>
            <ListItem component={IconButton} color="primary">
              <Twitter />
            </ListItem>
            <ListItem component={IconButton}>
              <SearchIcon />
            </ListItem>
            <ListItem component={IconButton}>
              <NotificationsIcon />
            </ListItem>
            <ListItem component={IconButton}>
              <MailOutlineIcon />
            </ListItem>
            <ListItem component={IconButton}>
              <BookmarkBorderIcon />
            </ListItem>
            <ListItem component={IconButton}>
              <ListAltIcon />
            </ListItem>
            <ListItem component={IconButton}>
              <PermIdentityIcon />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
