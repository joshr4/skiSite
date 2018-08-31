import React from 'react'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavLink = ({ to, text, eventKey }) => (
  <LinkContainer to={to}>
    <NavItem eventKey={eventKey}>{text}</NavItem>
  </LinkContainer>
)

export default NavLink
