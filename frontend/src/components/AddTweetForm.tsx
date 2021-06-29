import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import Alert from '@material-ui/lab/Alert'
import useHomeStyles from '../pages/Home/styles'
import { addTweet } from '../store/ducks/tweets/action'
import { selectIsAddTweetFailed, selectIsAddTweetLoading } from '../store/ducks/tweets/selectors'
interface AddTweetFormProps {
  maxRows?: number
  classes: ReturnType<typeof useHomeStyles>
}
const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState<string>('')
  const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false)
  const textLimitPercent = Math.round((text.length / 280) * 100)
  const textCount = MAX_LENGTH - text.length
  const isTweetLoading = useSelector(selectIsAddTweetLoading)
  const isTweetFailed = useSelector(selectIsAddTweetFailed)

  useEffect(() => {
    if (isTweetFailed) setVisibleNotification(true)
  }, [isTweetFailed])

  const handleNotificationClose = () => setVisibleNotification(false)
  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    dispatch(addTweet(text))
    setText('')
  }

  return (
    <div>
      <Snackbar
        open={visibleNotification}
        onClose={handleNotificationClose}
        autoHideDuration={5000}
        key="top"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleNotificationClose} severity="error">
          Не удалось добавить твит 😕
        </Alert>
      </Snackbar>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/796061890451542016/J-O1AguD_bigger.jpg"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={!text || text.length >= MAX_LENGTH || isTweetLoading}
            color="primary"
            variant="contained"
          >
            {isTweetLoading ? <CircularProgress color="primary" size={30} /> : 'Твитнуть'}
          </Button>
        </div>
      </div>
    </div>
  )
}
