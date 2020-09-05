import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class VoteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { candidateId: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ candidateId: event.target.value });
    }

    handleSubmit(event) {
        alert('A election Id was submitted: ' + this.state.candidateId);
        event.preventDefault();
    }

    render() {
        return (
            <Row>
                <Col lg="1" />
                <Col lg='10'>
                    <Form>
                        <FormGroup>
                            <Label for="candidateId">Vote fo candidate</Label>
                            <Input type="text" name="candidateId" id="candidateid" placeholder="Enter candidate address" onChange={this.handleChange} />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Vote</Button>
                    </Form>
                </Col>
                <Col lg="1" />
            </Row>
        );
    }
}

export default VoteComponent;
