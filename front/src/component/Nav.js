import React from 'react'
import { Link } from 'react-router-dom'
import {TbHome, TbUsers,TbUserCircle} from "react-icons/tb";
import{FaMountain} from "react-icons/fa"
function Nav() {
  return (
    <nav class="navbar bg-light sticky-bottom">
     <div class="div_con">
      <h6 class="mt-3">
    <Link to={'/'} class="px-33"> <TbHome fontSize="2.0em"/> </Link>
    <Link to={'/Club'} class="px-33"> <TbUsers fontSize="2.0em"/></Link>
    <Link to={'/Center'} class="px-33"> <FaMountain fontSize="2.0em"/></Link>
    <Link to={'/My'} class="px-33"> <TbUserCircle fontSize="2.0em"/></Link>
    </h6>
    </div>
  </nav>
  )
}

export default Nav
