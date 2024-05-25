import { makeStyles } from '@mui/styles'
import DetailItem from './DetailItem'
import SharedPhotos from './SharedPhotos'

const useStyles = makeStyles(() => ({
  detail: {
    flex: 1,
    color: 'white',
    maxHeight: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  user: {
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    borderBottom: '1px solid #dddddd35',

    '& img': {
      width: 80,
      height: 80,
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
  info: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
  button: {
    padding: 15,
    backgroundColor: 'rgba(230, 74, 105, 0.553)',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    color: 'white',
    transition: 'background-color ease 0.15s',

    '&:hover': {
      backgroundColor: 'rgba(220,20,60,0.795)',
    },
    '&.logout': {
      padding: 10,
      backgroundColor: '#1a73e8',
    },
  },
}))

interface Props {
  setUser: (value: boolean) => void
}

export default function Detail({ setUser }: Props) {
  const classes = useStyles()

  return (
    <div className={classes.detail}>
      <div className={classes.user}>
        <img src="./avatar.png" alt="" />
        <h2>Tuan Dung</h2>
        <p>Anh yeu em nhieu chi mong em se hieu</p>
      </div>
      <div className={classes.info}>
        <DetailItem label="Chat Settings" />
        <DetailItem label="Privacy & Help" />
        <DetailItem label="Shared Photos" content={SharedPhotos} />
        <DetailItem label="Shared Files" />

        <button className={classes.button}>Block User</button>
        <button
          className={`${classes.button} logout`}
          onClick={() => setUser(false)}>
          Logout
        </button>
      </div>
    </div>
  )
}
