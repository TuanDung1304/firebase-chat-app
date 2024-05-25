import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  photos: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 10,
    transition: 'max-height 1.5s ease',
    maxHeight: 0,
    overflow: 'hidden',

    '&.expand': {
      maxHeight: 1000,
    },
  },
  photoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    '& span': {
      fontSize: 14,
      color: 'lightgray',
      fontWeight: 300,
    },
    '& img': {
      width: 40,
      height: 40,
      borderRadius: 5,
      objectFit: 'cover',
    },
  },
  downloadIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(17, 25, 40, 0.3)',
    padding: 10,
    borderRadius: '50%',
    cursor: 'pointer',
  },
}))

interface Props {
  expand?: boolean
}

export default function SharedPhotos({ expand }: Props) {
  const classes = useStyles()

  return (
    <div className={`${classes.photos}${expand ? ' expand' : ''}`}>
      <div className={classes.photoItem}>
        <div className={classes.photoDetail}>
          <img
            src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img src="./download.png" alt="" className={classes.downloadIcon} />
      </div>
      <div className={classes.photoItem}>
        <div className={classes.photoDetail}>
          <img
            src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img src="./download.png" alt="" className={classes.downloadIcon} />
      </div>
      <div className={classes.photoItem}>
        <div className={classes.photoDetail}>
          <img
            src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
            alt=""
          />
          <span>photo_2024.png</span>
        </div>
        <img src="./download.png" alt="" className={classes.downloadIcon} />
      </div>
    </div>
  )
}
