import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email } = props

  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center" style={{'paddingTop':'4em'}}>
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Welcome to Ski Delivery</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">Home page dashboard</h2>
          <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a>
        </div>
      </div>
    </header>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
