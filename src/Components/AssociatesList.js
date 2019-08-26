import React from 'react';
import { Associate } from "./Associate"
import { Col, Row, Container } from "reactstrap"


export function AssociatesList(props) {

  return (
      props.associates.map(associate => (
        <Col xs="2">
        <Associate
          key={associate.forenames}
          associate={associate}
        />
        </Col>
      ))
      
  )


};