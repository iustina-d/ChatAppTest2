import React from "react"
import "./Message.css"
import { auth } from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"

export default function Message(props) {
  let messageClass
  const [user] = useAuthState(auth)
  console.log(props.mess.uid)
  if (user) {
    messageClass = props.mess.uid === auth.currentUser.uid ? `currentUser` : `anotherUser`
  }
  return (
    <div className={`${messageClass} message-container`}>
      <div className='text'>{props.message}</div>
    </div>
  )
}
