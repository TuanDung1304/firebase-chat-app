import { makeStyles } from '@mui/styles'
import { useState } from 'react'

const useStyles = makeStyles(() => ({
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
}))

interface Props {
  label: string
  content?: React.ComponentType<{ expand: boolean }>
}

export default function DetailItem({ label, content: Content }: Props) {
  const classes = useStyles()
  const [expand, setExpand] = useState(false)
  const toggleExpand = () => setExpand((prev) => !prev)
  return (
    <div>
      <div className={classes.title}>
        <span>{label}</span>
        <img
          src={expand ? './arrowUp.png' : './arrowDown.png'}
          alt=""
          onClick={toggleExpand}
        />
      </div>
      {!!Content && <Content expand={expand} />}
    </div>
  )
}
