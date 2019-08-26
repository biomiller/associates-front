import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SearchForAssociates } from "./Components/SearchForAssociates";
import { AssociatesList } from "./Components/AssociatesList";
import { AssociatesCarousel } from "./Components/AssociatesCarousel"
import ReactList from 'react-list';
import { Collapse, Col, Row, Container, Button, CardBody, Card } from "reactstrap"

import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: "",
      associates: [],
      collapse: false

    }
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  setAssociates = (associates) => {
    console.log(associates.data);
    this.setState({
      associates: associates.data
    })
  }

  setLoading = (message) => {
    this.setState({
      loading: message
    })
  }

  render() {
    return (
      <Router >
        <Container>
          <Route path={`/`} render={() => <SearchForAssociates setAssociates={this.setAssociates} setLoading={this.setLoading} />} />
          <h1>{this.state.loading}</h1>

          <Button color="primary" onClick={this.toggle} style={{
            alignSelf: 'stretch'
          }}>View Associates</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <h1>{this.state.loading}</h1>
                <Route exact path={`/`} render={() => <Row><AssociatesList associates={this.state.associates} /></Row>} />
              </CardBody>
            </Card>
          </Collapse>
        </Container>
      </Router >


    );
  }
}

export default App;
