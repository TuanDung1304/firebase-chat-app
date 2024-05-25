import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import AddUserDialog from './AddUserDialog'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    overflowY: 'auto',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: 'rgba(17, 25, 40, 0.5)',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
    padding: 10,

    '& input': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'white',
      flex: 1,
    },

    '& img': {
      width: 20,
      height: 20,
    },
  },
  add: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(17, 25, 40, 0.5)',
    padding: 10,
    borderRadius: 10,
    cursor: 'pointer',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    cursor: 'pointer',
    borderBottom: '1px solid #dddddd35',

    '& img': {
      width: 50,
      height: 50,
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    color: 'white',

    '& span': {
      fontWeight: 500,
    },

    '& p': {
      fontSize: 14,
      fontWeight: 300,
    },
  },
}))

export default function ChatList() {
  const classes = useStyles()

  const [addMode, setAddMode] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchBar}>
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          alt=""
          className={classes.add}
          src={addMode ? './minus.png' : './plus.png'}
          onClick={() => setAddMode((prev) => !prev)}
        />
        <AddUserDialog open={addMode} onClose={() => setAddMode(false)} />
      </div>

      <div className={classes.item}>
        <img src="./avatar.png" alt="" />
        <div className={classes.texts}>
          <span>Tuan Dung</span>
          <p>Hello world</p>
        </div>
      </div>
    </div>
  )
}
