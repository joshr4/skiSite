import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Nav, NavItem, Button, NavDropdown, MenuItem, Grid, Row, Col } from 'react-bootstrap'
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
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleSelect(key) {
    this.setState({ activeTab: key })
  }
  handleLogout() {
    console.log('handleLogout upp')
    dispatch(logout())
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
      console.log('handleLogout')
      dispatch(logout())
    }
  }
}

//had to add this function and the pure: false option to the connect function below
//solved a component rendering issue
const mergeProps = state => {
  return state
}

export default connect(mapState, mapDispatch, null, { pure: false })(Navbar)

/**
* PROP TYPES
*/
Navbar.propTypes = {
  //handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
