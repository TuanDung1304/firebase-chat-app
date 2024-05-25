import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    color: 'white',

    '& img': {
      width: 50,
      height: 50,
      borderRadius: '50%',
      objectFit: 'cover',
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
}))

export default function UserInfo() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <img src="./avatar.png" alt="" />
        <h2>Tuan Dung</h2>
      </div>
      <div className={classes.icons}>
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}
