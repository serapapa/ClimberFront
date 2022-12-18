import React from 'react'
import { Link } from 'react-router-dom'
import './component.css';
import {IoPaperPlaneOutline, IoAddCircleOutline} from "react-icons/io5";


function Headers() {
  return (
    <header className="navbar bg-light sticky-top">
      <div className="main_logo">
        <Link to={'/'}><img src="./logo.png" alt="main_logo"/></Link>
      </div>
      <h6>
        <div class="nav_con">
        <Link to={'/Editor'} className="px-2">
          <IoAddCircleOutline fontSize="2.2em"/>
        </Link>
        <Link to={'/Chatlist'} className="px-2">
          <IoPaperPlaneOutline fontSize="2.2em"/>
        </Link>
        </div>
        </h6>
    </header>


  )
}

export default Headers
