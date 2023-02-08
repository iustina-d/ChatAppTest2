import React from "react"
import "./Card.css"

export default function Card(props) {
  const status = props.status ? "#1249d4" : "transparent"
  return (
    <div className="card-cotact-container">
      <div className="contact-info">
        <img src={props.image} />
        <div className="contact-text">
        <h3>{props.name}</h3>
        <h6>{props.text}</h6>
        </div>
      </div>
      <div className="status"></div>
    </div>
  )
}
