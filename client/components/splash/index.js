import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'
import {Alert} from 'react-bootstrap'

const Splash = ({handleClick, isLoggedIn}) => (
  <div>
    <header>
      <div>
        <div style={{padding: '3em'}}>
          <h1>Ski delivery service made easy!</h1>
          <h2>
            Sign up today and deliver your skis tomorrow
          </h2>
          <p>
            Spicy jalapeno bacon ipsum dolor amet sirloin doner spare ribs
            sausage, pig short loin capicola pastrami cupim short ribs chuck
            tongue. Sausage hamburger short ribs, sirloin biltong tail short
            loin turkey kielbasa ribeye. Ham pastrami picanha, swine pork
            porchetta fatback flank meatball drumstick kevin beef bacon filet
            mignon andouille. <br />
            <br />Sirloin turducken flank chicken tri-tip pork loin capicola
            kielbasa. Doner picanha pork sirloin ham, ham hock brisket pork chop
            pastrami. Shankle meatloaf venison prosciutto short loin, shoulder
            turducken cow porchetta landjaeger corned beef leberkas tail
            brisket. Turkey chicken burgdoggen leberkas pork chop tri-tip
            pancetta tenderloin. Landjaeger chuck prosciutto beef.
          </p>
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
