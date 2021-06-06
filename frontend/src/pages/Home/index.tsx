import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { AddTweetForm } from "../../components/AddTweetForm";
import { Footer } from "../../components/Footer";
import { SidebarNavigation } from "../../components/SidebarNavigation";
import { Tweet } from "../../components/Tweet";
import styles from "./styles";

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
                      <AddTweetForm classes={classes}/>
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
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
