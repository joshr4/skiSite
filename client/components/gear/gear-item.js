import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../store'

const GearItem = props => {
  const { type, name, description, warehouseId } = props.gear
  return (
    <div style={{ 'display': 'flex' }}>
      <img style={{ 'maxHeight': '10em', 'maxWidth': '10em' }} src={type === 'snowboard' ? '/img/snowboard.png' : '/img/skis.jpg'} />
      <div>
        <h4>{name}</h4>
        <h5>{description}</h5>
        <p>warehouse location: #{warehouseId}</p>
      </div>
    </div>
  )
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

export default connect(mapState, mapDispatch)(GearItem)

/**
 * PROP TYPES
 */
GearItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
