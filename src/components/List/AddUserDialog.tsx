import { Dialog } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    gap: 20,
    '& input': {
      padding: 20,
      borderRadius: 10,
      border: 'none',
      outline: 'none',
    },
    '& button': {
      padding: 20,
      borderRadius: 10,
      border: 'none',
      backgroundColor: '#1a73e8',
      cursor: 'pointer',
      color: 'white',
    },
  },
  user: {
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& button': {
      padding: 10,
      borderRadius: 10,
      border: 'none',
      backgroundColor: '#1a73e8',
      cursor: 'pointer',
      color: 'white',
    },
  },
  detail: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,

    '& img': {
      width: 50,
      height: 50,
      borderRadius: '50%',
      objectFit: 'cover',
    },
  },
}))

interface Props {
  open?: boolean
  onClose?: () => void
}

export default function AddUserDialog({ onClose, open }: Props) {
  const classes = useStyles()
  return (
    <Dialog
      open={!!open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(17, 25, 40, 0.7)',
          borderRadius: '10px',
          padding: '25px',
          width: 'max-content',
          height: 'max-content',
          color: 'white',
        },
      }}>
      <form action="" className={classes.form}>
        <input type="text" />
        <button>Search</button>
      </form>
      <div className={classes.user}>
        <div className={classes.detail}>
          <img src="./avatar.png" alt="" />
          <span>Tuan Dung</span>
        </div>
        <button>Add User</button>
      </div>
    </Dialog>
  )
}
