import { useState } from 'react'
import List from './components/List/List'
import Chat from './components/Chat/Chat'
import Detail from './components/Detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App
