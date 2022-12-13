import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
    <Link to={'/'}> Community </Link>
    <Link to={'/Club'}> / Club </Link>
    <Link to={'/Center'}> / Center </Link>
    <Link to={'/My'}> / My </Link>
  </nav>
  )
}

export default Nav
