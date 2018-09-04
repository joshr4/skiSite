import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import GearItem from './GearItem'
import GearModal from './GearModal'
import { Button, ButtonToo } from 'react-bootstrap'
import { me } from '../../store'

/**
 * COMPONENT
 */
class Gear extends Component {

  constructor() {
    super()
    this.state = {
      modalGear: {},
      modalIsOpen: false,
      userGear: [
        {
          id: 1,
          name: 'Powder',
          description: 'grandpas ski, they are banged up',
          type: 'ski',
          userId: 1,
          warehouseId: 1
        },
        {
          id: 2,
          name: 'Johnnys board',
          description: 'bday gift 2015, last waxes 2017',
          type: 'snowboard',
          userId: 1,
          warehouseId: 3
        },
        {
          id: 3,
          name: 'best skis ever',
          description: 'fast skis',
          type: 'ski',
          userId: 1,
          warehouseId: 2
        }
      ]
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async editGear(id) {
    await this.setState({ modalGear: this.state.userGear.filter(gear => gear.id === id)[0] });
    console.log('line 52', this.state.modalGear)
    this.openModal()
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {

    const { isLoggedIn } = this.props
    return (
      <div>
          <GearModal />
          <h3>Gear Page</h3>
          {this.state.userGear.map(gear => <GearItem gear={gear} key={gear.id} editGear={() => this.editGear(gear.id)} />)}

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
      //dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Gear))

/**
 * PROP TYPES
 */
Gear.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
