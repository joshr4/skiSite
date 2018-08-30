import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-modal'

const GearModal = props => {
  console.log('line 7', props.gear)
  // const { type, name, description, warehouseId, id } = props.gear
  return (
    <Modal
    isOpen={props.modalIsOpen}
          // onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          // style={{'top':'10em','left':'10em', 'right':'10em',}}
          contentLabel="Example Modal"
    >
    <p>TESTTING</p>
    <p>{props.gear.name}</p>
    </Modal>
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

export default connect(mapState, mapDispatch)(GearModal)

/**
 * PROP TYPES
 */
GearModal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
