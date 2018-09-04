import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../../store'
import {
  Nav,
  Navbar,
  NavItem,
  Button,
  ButtonToolbar,
  ButtonGroup
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import Privacy from '../Privacy';

/**
 * COMPONENT
 */
class Footer extends Component {
  render() {
    return (
      <div>
        <Link to="/blog">Blog</Link> |
        <Link to="/press"> Press</Link> |
        <Link to="/faq"> FAQ</Link> |
        <Link to="/contact"> Contact</Link> |
        <Link to="/support"> Support</Link> |
        <Link to="/privacy"> Privacy</Link> |
        <Link to="/tos"> TOS</Link>
      </div>
    )
  }
}

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
    handleLogout() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
