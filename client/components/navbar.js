import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/splash">SkiDelivery</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {isLoggedIn ? (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">My Account</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleClick}>Logout</a>
          </li>
        </ul>
      </div>
    ) : (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>

      )}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
* PROP TYPES
*/
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


  // <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <a className="navbar-brand" href="#">Ski Delivery</a>
  //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   {isLoggedIn ? (
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul class="navbar-nav mr-auto">
  //         <li class="nav-item active">
  //           <a className="nav-link" href="#page-top">Start Bootstrap</a>
  //         </li>
  //         <li class="nav-item active">
  //           <Link className="nav-link" to="/about">About</Link>
  //         </li>
  //         <li class="nav-item active">
  //           <Link className="nav-link" to="/home">Home</Link>
  //         </li>
  //         <a className="nav-link" href="#" onClick={handleClick}>
  //           Logout
  //             </a>
  //       </ul>
  //     </div>
  //   ) : (
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul class="navbar-nav mr-auto">
  //           <li class="nav-item active">
  //             <a className="nav-link" href="#page-top">Start Bootstrap</a>
  //           </li>
  //           <li class="nav-item active">
  //             <Link className="nav-link" to="/about">About</Link>
  //           </li>
  //           <li class="nav-item active">
  //             <Link className="nav-link" to="/login">Login</Link>
  //           </li>
  //           <li class="nav-item active">
  //             <Link className="nav-link" to="/signup">Sign Up</Link>
  //           </li>
  //         </ul>
  //       </div>
  //     )}
  // </nav>
