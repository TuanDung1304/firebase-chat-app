import { makeStyles } from '@mui/styles'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { toast } from 'react-toastify'

const useStyles = makeStyles(() => ({
  login: {
    color: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 100,
  },
  item: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,

    '& form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,

      '& input': {
        padding: 20,
        outline: 'none',
        border: 'none',
        backgroundColor: 'rgba(17, 25, 40, 0.6)',
        color: 'white',
        borderRadius: 5,
      },
      '& button': {
        width: '100%',
        padding: 20,
        border: 'none',
        backgroundColor: '#1f8ef1',
        color: 'white',
        borderRadius: 5,
        cursor: 'pointer',
        fontWeight: 500,
      },
    },
  },
  avatarLabel: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    textDecoration: 'underline',

    '& img': {
      width: 50,
      height: 50,
      borderRadius: 10,
      objectFit: 'cover',
    },
  },
  separator: {
    height: '80%',
    width: 2,
    backgroundColor: '#dddddd35',
  },
}))

interface Props {
  setUser: (value: boolean) => void
}

export default function Login({ setUser }: Props) {
  const classes = useStyles()
  const [avatar, setAvatar] = useState<{ file: File | null; url: string }>({
    file: null,
    url: '',
  })
  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      })
    }
  }

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toast.warn('Login')
    setUser(true)
  }

  const handleSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toast.warn('Register')
  }

  return (
    <div className={classes.login}>
      <div className={classes.item}>
        <h2>Welcome back</h2>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="button" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.item}>
        <h2>Create new account</h2>
        <form>
          <label htmlFor="file" className={classes.avatarLabel}>
            <img src={avatar.url || './avatar.png'} alt="" />
            Upload an image
          </label>
          <input
            id="file"
            type="file"
            name="avatar"
            style={{ display: 'none' }}
            onChange={handleChangeAvatar}
          />
          <input type="text" name="username" placeholder="User name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button onClick={handleSignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
