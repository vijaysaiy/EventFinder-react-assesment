import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">EventFunda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to = "/" className="nav-link active"> Home</Link>
        </li>       
        <li class="nav-item ">
          <Link to = "/events/view" class="nav-link active">View Events</Link>
       </li>        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/account" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/login">Sign in</Link></li>
            <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>           
          </ul>
        </li>        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar
