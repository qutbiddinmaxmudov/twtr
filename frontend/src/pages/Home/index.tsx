import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

import { AddTweetForm } from "../../components/AddTweetForm";
import { Footer } from "../../components/Footer";
import { SidebarNavigation } from "../../components/SidebarNavigation";
import { Tweet } from "../../components/Tweet";
import styles from "./styles";
import { SearchTextField } from "../../components/SearchTextField";

export const Home: React.FC = (): React.ReactElement => {
  const classes = styles();
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
                  {[
                    ...new Array(10).fill(
                      <Tweet
                        text="Петиция чтобы в каждой пачке сухариков всегда лежал один большой в три слоя обсыпанный химическими специями царь-сухарик."
                        user={{
                          fullname: "Glafira Zhur",
                          username: "GlafiraZhur",
                          avatarUrl:
                            "https://images.unsplash.com/photo-1528914457842-1af67b57139d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                        }}
                      />
                    ),
                  ]}
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
                    <Paper
                      className={classes.rightSideBlockHeader}
                      variant="outlined"
                    >
                      <b>Актуальные темы</b>
                    </Paper>
                    <List>
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemText
                          primary="Санкт-Петербург"
                          secondary={
                            <Typography
                              component="span"
                              variant="body2"
                              color="textSecondary"
                            >
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
                            <Typography
                              component="span"
                              variant="body2"
                              color="textSecondary"
                            >
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
                            <Typography
                              component="span"
                              variant="body2"
                              color="textSecondary"
                            >
                              Твитов: 13 554
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider component="li" />
                    </List>
                  </Paper>
                  <Paper className={classes.rightSideBlock}>
                    <Paper
                      className={classes.rightSideBlockHeader}
                      variant="outlined"
                    >
                      <b>Кого читать</b>
                    </Paper>
                    <List>
                      <ListItem className={classes.rightSideBlockItem}>
                        <ListItemAvatar>
                          <Avatar
                            alt="Remy Sharp"
                            src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary="Dock Of Shame"
                          secondary={
                            <Typography
                              component="span"
                              variant="body2"
                              color="textSecondary"
                            >
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
  );
};
