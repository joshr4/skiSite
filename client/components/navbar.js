import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../store'
import { Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from './index'

/**
 * COMPONENT
 */
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key) {
    this.setState({ activeTab: key })
  }

  render() {
    const { handleLogout, isLoggedIn } = this.props
    return (
      isLoggedIn ?
        (
          <Nav style={{ 'padding': '0% 15%', 'display': 'flex', 'justifyContent': 'space-between' }} bsStyle="tabs" activeKey={this.state.activeTab} onSelect={key => this.handleSelect(key)}>
            <LinkContainer style={{ 'marginRight': 'auto', 'alignSelf': 'center' }} to="/splash">
              <a>SkiDelivery</a>
            </LinkContainer>
            <NavLink to='/home' text='Home' eventKey={2} />
            <NavLink to='/trips' text='Trips' eventKey={3} />
            <NavLink to='/gear' text='Gear' eventKey={4} />
            <NavLink to='/account' text='My Account' eventKey={5} />
            <Button onClick={() => handleLogout()} bsStyle="info">Logout</Button>
          </Nav>
        ) : (
          <Nav style={{ 'padding': '0% 15%', 'display': 'flex', 'justifyContent': 'space-between' }} bsStyle="tabs" activeKey={this.state.activeTab} onSelect={key => this.handleSelect(key)}>
            <LinkContainer style={{ 'marginRight': 'auto', 'alignSelf': 'center' }} to="/splash">
              <a>SkiDelivery</a>
            </LinkContainer>
            <NavLink to='/login' text='Login' eventKey={2} />
            <NavLink to='/signup' text='Sign Up' eventKey={3} />
          </Nav>
        )
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

export default connect(mapState, mapDispatch, null, { pure: false })(Navbar)

/**
* PROP TYPES
*/
Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
