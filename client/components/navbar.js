import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

/**
 * COMPONENT
 */
class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 0,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (key) {
    this.setState({activeKey: key})
  }

    render() {
      let { handleClick, isLoggedIn } = this.props
      console.log('active',this.state.activeKey)
      return isLoggedIn ?
        (
          <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={key => this.handleSelect(key)}>
            <LinkContainer to="/splash">
              <NavItem eventKey={1}>SkiDelivery</NavItem>
            </LinkContainer>
            <LinkContainer to="/home">
              <NavItem eventKey={2}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/trips">
              <NavItem eventKey={3}>Trips</NavItem>
            </LinkContainer>
            <LinkContainer to="/gear">
              <NavItem eventKey={4}>Gear</NavItem>
            </LinkContainer>
            <LinkContainer to="/account">
              <NavItem eventKey={5}>My Account</NavItem>
            </LinkContainer>
            <NavItem eventKey={6} href="#" onClick={handleClick}>Logout</NavItem>

          </Nav>
        ) : (
          <Nav bsStyle="tabs" activeKey="1" onSelect={key => this.handleSelect(key)}>
            <NavItem href="/splash">SkiDelivery</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/signup">Sign Up</NavItem>
          </Nav>
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
      handleClick() {
        dispatch(logout())
      }
    }
  }

  //had to add this function and the pure: false option to the connect function below
  //solved a component rendering issue
  const mergeProps = state => {
    return state
  }

  export default connect(mapState, mapDispatch, mergeProps, {pure: false})(Navbar)

/**
* PROP TYPES
*/
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
