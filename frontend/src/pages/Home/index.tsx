import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Twitter from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const Home: React.FC = (): React.ReactElement => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ul>
            <li>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </li>
            <li>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </section>
  );
};
