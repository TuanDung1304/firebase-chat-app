import { makeStyles } from '@mui/styles'
import UserInfo from './UserInfo'
import ChatList from './ChatList'

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function List() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <UserInfo />
      <ChatList />
    </div>
  )
}
