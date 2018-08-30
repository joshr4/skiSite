import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../store'

const GearItem = props => {
  const { type, name, description, warehouseId, id } = props.gear
  return (
    <div style={{ 'display': 'flex', 'padding': '0.75em' }}>
      <img style={{ 'maxHeight': '10em', 'maxWidth': '10em','paddingRight': '2em' }} src={type === 'snowboard' ? '/img/snowboard.png' : '/img/skis.jpg'} />
      <div style={{ 'display': 'flex', 'flexDirection': 'column'}}>
        <h4>Gear Name: {name}</h4>
        <p>Description: {description}</p>
        <p>Warehouse: #{warehouseId}</p>
      </div>
      <button onClick={props.editGear}>Edit</button>
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
      //dispatch(logout())
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
