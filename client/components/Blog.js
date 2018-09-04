import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const Blog = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <p>BLOG</p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // name: 'login',
    // displayName: 'Login',
    // error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      // evt.preventDefault()
      // const formName = evt.target.name
      // const email = evt.target.email.value
      // const password = evt.target.password.value
      // dispatch(auth(email, password, formName))
    }
  }
}

export default connect(mapState, mapDispatch)(Blog)

/**
 * PROP TYPES
 */
Blog.propTypes = {
  // name: PropTypes.string.isRequired,
  // displayName: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // error: PropTypes.object
}
