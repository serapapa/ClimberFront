import React from 'react'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <header>
      <h3>
        <Link to={'/'}><image>Logo</image></Link>
      </h3>
      <h6>
        <Link to={'/Editor'}>
          <i>Editor     |</i>
        </Link>
        <Link to={'/Chatlist'}>
          <i>|     Chatlist</i>
        </Link>
      </h6>
    </header>
  )
}

export default Headers
