import React, { useState } from "react"
import LogIn from "./components/LogIn"
import Sign_Up from "./components/Sign_Up"
import Chat from "./components/Chat"

export default function App() {
  const [userStatus, setUserStatus] = useState({
    isNewUser: true,
    isLogOut: true,
    isLogIn: false,
  })
  function toggleIsNewUser() {
    setUserStatus((prevStatus) => ({
      ...prevStatus,
      isNewUser: !userStatus.isNewUser,
    }))
  }
  function toggleIsLogIn() {
    setUserStatus((prevStatus) => ({
      ...prevStatus,
      isLogOut: !userStatus.isLogOut,
      isLogIn: !userStatus.isLogIn,
    }))
  }

  return (
    <div className="App">
      {userStatus.isLogOut && userStatus.isNewUser && (
        <Sign_Up
          isActive={userStatus.isNewUser}
          handleClick={toggleIsNewUser}
        />
      )}
      {userStatus.isLogOut && (
        <LogIn isActive={userStatus.isNewUser} handleClick={toggleIsLogIn} />
      )}
      {userStatus.isLogIn && <Chat  handleClick={toggleIsLogIn}/>}
    </div>
  )
}
