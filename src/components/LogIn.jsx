import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import "./Sign_Up.css"

export default function LogIn(props) {
  const [userDetails, setUsersDetails] = useState({
    email: "",
    password: "",
  })
  function LogIn() {
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((userCredential) => {
        const user = userCredential.user
        props.handleClick()
      })
      .catch((error) => {
        alert("Please enter a valid input")
        const errorCode = error.code
        const errorMessage = error.message
      })
  }
  function handleChange(event) {
    setUsersDetails((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }
  return (
    <div className="sign-up-container">
      <div className="title">Pretty</div>
      <div className="form-container">
        <div className="form-container-content">
          <h1 className="mb-4">Log in to your account</h1>
          <Form className="row">
            <Form.Group className="col-12 col-md-6 col-lg-6 mb-3">
              <Form.Control
                placeholder="Email"
                className="email"
                onChange={handleChange}
                name="email"
                value={userDetails.email}
                required
              />
            </Form.Group>
            <Form.Group className="col-12 col-md-6 col-lg-6 mb-3">
              <Form.Control
                placeholder="Password"
                className="password"
                onChange={handleChange}
                name="password"
                value={userDetails.password}
                required
              />
            </Form.Group>
          </Form>
          <Button onClick={LogIn} className="col-6 col-md-6 btn">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}

