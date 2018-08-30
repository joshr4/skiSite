import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Splash } from './index'
import { me } from '../store'
import { Nav, NavItem } from 'react-bootstrap'

/**
 * COMPONENT
 */
class Trips extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props
    return (
      <div>
        <h3>Trips Page</h3>
        <div>
          <Nav
            bsStyle="tabs"
            justified
            activeKey={1}
            onSelect={key => this.handleSelect(key)}
          >
            <NavItem eventKey={1} href="/home">
              NavItem 1 content
          </NavItem>
            <NavItem eventKey={2} title="Item">
              NavItem 2 content
          </NavItem>
            <NavItem eventKey={3} disabled>
              NavItem 3 content
          </NavItem>
          </Nav>
          <br />
          <Nav
            bsStyle="pills"
            justified
            activeKey={1}
            onSelect={key => this.handleSelect(key)}
          >
            <NavItem eventKey={1} href="/home">
              NavItem 1 content
          </NavItem>
            <NavItem eventKey={2} title="Item">
              NavItem 2 content
          </NavItem>
            <NavItem eventKey={3} disabled>
              NavItem 3 content
          </NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Trips))

/**
 * PROP TYPES
 */
Trips.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
