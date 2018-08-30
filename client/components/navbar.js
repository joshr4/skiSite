import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <nav>
    <Link to="/splash">SkiDelivery</Link>
    {isLoggedIn ? (
      <div>            <Link to="/home">Home</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/gear">Gear</Link>
        <Link to="/account">My Account</Link>
        <a href="#" onClick={handleClick}>Logout</a>
      </div>
    ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
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
