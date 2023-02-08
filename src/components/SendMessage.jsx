import React, { useState } from "react"
import "./SendMessage.css"
import { auth, db } from "../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

export default function SendMessage() {
  const [message, setMessage] = useState("")
  const SendMessages = async (event) => {
    event.preventDefault()
    if (message == "") {
      alert("Please enter a valid message!!")
      return
    }
    const { uid, displayName } = auth.currentUser
    console.log(auth.currentUser.uid)
    await addDoc(collection(db, "messages"), {
      text: message,
      user: displayName,
      uid:uid,
      timestamp: serverTimestamp(),
    })
    setMessage("")
  }
  function handleChange(event) {
    setMessage(event.target.value)
  }
  return (
    <div className="send-messages-container">
      <input type="text" onChange={handleChange} value={message} />
      <button onClick={SendMessages}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  )
}
