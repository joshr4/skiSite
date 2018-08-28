import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Splash = ({handleClick, isLoggedIn}) => (
  <div>
    <header>
      <div>
        <div>
          <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
          <a href="#about" className="btn btn-primary js-scroll-trigger">Get Started</a>
        </div>
      </div>
    </header>
  </div>
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

export default connect(mapState, mapDispatch)(Splash)

/**
 * PROP TYPES
 */
Splash.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
