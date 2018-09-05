import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const Privacy = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div style={{margin:'6% 0%', textAlign:'center'}}>
      <h2>Privacy Policy</h2>
      <p>This privacy policy discloses the privacy practices for the website. This privacy policy applies to information collected by this website online. Your privacy is important to us, and we will never share your personal information with 3rd party partners or advertisers. Note, this privacy policy is available under a Creative Commons Sharealike license, and was originally created by Automattic.com.



Your privacy is critically important to us. At this website, we follow these principles for securing your information:

We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.

We aim to make it as simple as possible for you to control what information on your website is shared publicly (or kept private), indexed by search engines, and permanently deleted.

We aim for full transparency on how we gather, use, and share your personal information.

​

Below is our Privacy Policy, which incorporates and clarifies these principles.

​

Who We Are and What This Policy Covers

Our mission is to empower you to do your best work. This Privacy Policy applies to information that we collect about you when you use:

Our website and all associated pages, forms and mailing lists

Any information collected via opt-in on Mailchimp landing page</p>
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

export default connect(mapState, mapDispatch)(Privacy)

/**
 * PROP TYPES
 */
Privacy.propTypes = {
  // name: PropTypes.string.isRequired,
  // displayName: PropTypes.string.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  // error: PropTypes.object
}
