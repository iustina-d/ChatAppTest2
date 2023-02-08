import React, { useState } from "react"
import "./Sign_Up.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function Sign_Up(props) {
  const [userDetails, setUsersDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  function handleChange(event) {
    setUsersDetails((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  function SignUp() {
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
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
  return (
    <div className="sign-up-container">
      <div className="title">Pretty</div>
      <div className="form-container">
        <div className="form-container-content">
          <h1 className="mb-3">Create an account</h1>
          <h5 className="mb-4">
            Already a member? <span onClick={props.handleClick}>Log in</span>
          </h5>
          <Form className="row">
            <Form.Group className="col-12 col-md-6 col-lg-6 mb-3">
              <Form.Control
                placeholder="First Name"
                className="first-name"
                onChange={handleChange}
                name="firstName"
                value={userDetails.firstName}
                required
              />
            </Form.Group>
            <Form.Group className="col-12 col-md-6 col-lg-6 mb-3">
              <Form.Control
                placeholder="Last Name"
                className="last-name"
                onChange={handleChange}
                name="lastName"
                value={userDetails.lastName}
                required
              />
            </Form.Group>
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
          <Button onClick={SignUp} className="col-6 col-md-6 btn">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
