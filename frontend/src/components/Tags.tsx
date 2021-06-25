import React from 'react'
import { useSelector } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'

import homeStyles from '../pages/Home/styles'
import { TagsState } from '../store/ducks/tags/tagsTypes'
import { selectISTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors'
import { Link } from 'react-router-dom'

interface TagsInterface {
  classes: ReturnType<typeof homeStyles>
}

export const Tags = ({ classes }: TagsInterface) => {
  const items: TagsState['items'] = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectISTagsLoaded)

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {isLoaded ? (
          items.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem className={classes.rightSideBlockItem}>
                <Link to={`/home/search?q=${item.name}/`}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <Typography component="span" variant="body2" color="textSecondary">
                        Твитов: {item.count}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))
        ) : (
          <>
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </>
        )}
      </List>
    </Paper>
  )
}
