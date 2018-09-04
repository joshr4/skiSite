import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store'
import { Nav, Navbar, NavItem, Button, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { default as NavLink } from './NavLink'

/**
 * COMPONENT
 */
class Header extends Component {
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
      <header>
        <Navbar className='Josh1' inverse collapseOnSelect style={{ borderRadius: '0px', padding: '0% 15%' }}>
          <Navbar.Header className='Josh2'>
            <Navbar.Brand>
              <LinkContainer to='/splash'>
                <a>SkiDelivery</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='Josh3' style={{}}>
            {/* <Nav>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav> */}
            {isLoggedIn ? (
              <Nav className='Josh4' style={{ marginRight: '12%' }} pullRight activeKey={this.state.activeTab} onSelect={key => this.handleSelect(key)}>
                <NavLink to='/home' text='Home' eventKey={2} />
                <NavLink to='/trips' text='Trips' eventKey={3} />
                <NavLink to='/gear' text='Gear' eventKey={4} />
                <NavLink to='/account' text='My Account' eventKey={5} />
                <NavItem onClick={() => handleLogout()}>Logout</NavItem>
              </Nav>
            ) : (<div />)}
            {isLoggedIn ? (<div />) : (
              <Nav pullRight activeKey={this.state.activeTab} onSelect={key => this.handleSelect(key)}>
                <NavLink to='/login' text='Login' eventKey={2} />
                <NavLink to='/signup' text='Sign Up' eventKey={3} />
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </header>
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

export default connect(mapState, mapDispatch, null, { pure: false })(Header)

/**
* PROP TYPES
*/
Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
