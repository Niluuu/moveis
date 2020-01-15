import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../img/logo.png';
import Search from './search';


export default function Nav() {
  return (
    <div className="nav">
      <Link to="/"><img src={Logo}/></Link>
      <Search/>
      <Link to="/movie">Movie</Link>
      <Link to="/watch/1">Watch1</Link>
      <Link to="/watch/2">Watch2</Link>

    </div>
  )
}
