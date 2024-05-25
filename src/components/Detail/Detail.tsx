import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  detail: {
    flex: 1,
    color: 'white',
  },
  user: {
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    borderBottom: '1px solid #dddddd35',

    '& img': {
      width: 100,
      height: 100,
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
  option: {},
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& img': {
      width: 30,
      height: 30,
      backgroundColor: 'rgba(17, 25, 40, 0.3)',
      padding: 10,
      borderRadius: '50%',
      cursor: 'pointer',
    },

    '& span': {
      fontSize: 14,
      color: 'lightgray',
      fontWeight: 300,
    },
  },
  photos: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
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

export default function Detail() {
  const classes = useStyles()

  return (
    <div className={classes.detail}>
      <div className={classes.user}>
        <img src="./avatar.png" alt="" />
        <h2>Tuan Dung</h2>
        <p>Anh yeu em nhieu chi mong em se hieu</p>
      </div>
      <div className={classes.info}>
        <div className={classes.option}>
          <div className={classes.title}>
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className={classes.option}>
          <div className={classes.title}>
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className={classes.option}>
          <div className={classes.title}>
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className={classes.photos}>
            <div className={classes.photoItem}>
              <div className={classes.photoDetail}>
                <img
                  src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className={classes.downloadIcon}
              />
            </div>
            <div className={classes.photoItem}>
              <div className={classes.photoDetail}>
                <img
                  src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className={classes.downloadIcon}
              />
            </div>
            <div className={classes.photoItem}>
              <div className={classes.photoDetail}>
                <img
                  src="https://www.state.gov/wp-content/uploads/2023/04/shutterstock_1263201358-2280x1282.jpg"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img
                src="./download.png"
                alt=""
                className={classes.downloadIcon}
              />
            </div>
          </div>
        </div>

        <div className={classes.option}>
          <div className={classes.title}>
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className={classes.button}>Block User</button>
        <button className={`${classes.button} logout`}>Logout</button>
      </div>
    </div>
  )
}
