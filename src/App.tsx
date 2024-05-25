import List from './components/List/List'
import Chat from './components/Chat/Chat'
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'
import Notification from './components/Notification/Notification'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(false)

  return (
    <>
      <div className="container">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail setUser={setUser} />
          </>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
      <Notification />
    </>
  )
}

export default App
