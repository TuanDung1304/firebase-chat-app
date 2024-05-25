import { makeStyles } from '@mui/styles'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
import Message from './Message'

const useStyles = makeStyles(() => ({
  root: {
    flex: 2,
    borderLeft: '1px solid #dddddd35',
    borderRight: '1px solid #dddddd35',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #dddddd35',
  },
  user: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: 20,

    '& img': {
      width: 60,
      height: 60,
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
  texts: {
    '& span': {
      fontSize: 18,
      fontWeight: 'bold',
    },
    '& p': {
      fontSize: 14,
      fontWeight: 300,
      color: '#a5a5a5',
    },
  },
  icons: {
    display: 'flex',
    gap: 20,
    '& img': {
      width: 20,
      height: 20,
    },
  },
  center: {
    padding: 20,
    flex: 1,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,

    '&::-webkit-scrollbar': {
      width: 12,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 8,
      backgroundColor: '#95a5a6',
      border: '1px solid #cacaca',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: '#2c3e50',
    },
  },
  bottom: {
    // marginTop: 'auto',
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #dddddd35',
    gap: 20,
  },
  emoji: {
    position: 'relative',
    '& img': {
      width: 20,
      height: 20,
      cursor: 'pointer',
    },

    '& .emojiPicker': {
      position: 'absolute',
      bottom: 50,
    },
  },
  send: {
    backgroundColor: '#5183fe',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
  },
  messageInput: {
    flex: 1,
    backgroundColor: 'rgba(17, 25, 40, 0.5)',
    border: 'none',
    outline: 'none',
    color: 'white',
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
  },
}))

export default function Chat() {
  const [text, setText] = useState('')
  const [openPicker, setOpenPicker] = useState(false)

  const handleToggle = () => setOpenPicker((prev) => !prev)
  const handleEmoji = (e: EmojiClickData) => {
    setText((prev) => prev + e.emoji)
  }

  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.user}>
          <img src="./avatar.png" alt="" />
          <div className={classes.texts}>
            <span>Tuan Dung</span>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className={classes.icons}>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className={classes.center}>
        <Message isOwn />
        <Message imageUrl="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg" />
        <Message isOwn />
        <div ref={endRef} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.icons}>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className={classes.messageInput}
        />
        <div className={classes.emoji}>
          <img src="./emoji.png" alt="" onClick={handleToggle} />
          <div className="emojiPicker">
            <EmojiPicker
              lazyLoadEmojis
              open={openPicker}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className={classes.send}>Send</button>
      </div>
    </div>
  )
}
