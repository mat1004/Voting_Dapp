import React from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Row, Col } from 'reactstrap';

class ElectionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { electionId: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ electionId: event.target.value });
    }

    handleSubmit(event) {
        alert('A election Id was submitted: ' + this.state.electionId);
        event.preventDefault();
    }

    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col lg="6">
                        <h1>Election</h1>
                    </Col>
                    <Col lg="4"/>
                    <Col lg="2">
                        <Button >Create Election</Button>
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label for="electionId">Enter election Id</Label>
                        <Input type="text" name="electionId" id="electionId" placeholder="Enter election address" onChange={this.handleChange} />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Jumbotron>
        );
    }
}

export default ElectionComponent;
