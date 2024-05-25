import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  message: {
    maxWidth: '70%',
    display: 'flex',
    gap: 20,
    color: 'white',

    '& .texts': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      gap: 5,

      '& p': {
        backgroundColor: 'rgba(17, 25, 40, 0.3)',
        padding: 20,
        borderRadius: 10,
      },
    },

    '&.own': {
      alignSelf: 'flex-end',

      '& .texts': {
        '& p': {
          backgroundColor: '#5183fe',
        },
      },
    },
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    objectFit: 'cover',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    objectFit: 'cover',
  },
}))

interface Props {
  isOwn?: boolean
  imageUrl?: string
}

export default function Message({ isOwn, imageUrl }: Props) {
  const classes = useStyles()
  return (
    <div className={`${classes.message} ${isOwn ? 'own' : ''}`}>
      <img src="./avatar.png" alt="" className={classes.avatar} />
      <div className="texts">
        {imageUrl && <img src={imageUrl} alt="" className={classes.image} />}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          quaerat ex optio ipsam velit vel voluptate, mollitia quis laboriosam
          nam deserunt quos, qui illo cumque animi beatae aliquam dolorum
          aliquid!
        </p>
        <span>1 min ago</span>
      </div>
    </div>
  )
}
