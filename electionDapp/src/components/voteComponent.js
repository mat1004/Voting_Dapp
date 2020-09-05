import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import Web3 from "web3";
import votingArtifact from "../artifacts/Voting.json";

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

    async handleSubmit(event) {
        const web3 = new Web3("HTTP://127.0.0.1:7545" || Web3.givenProvider);
        const ABI = votingArtifact.abi;
        const ADD = votingArtifact.networks[5777].address;
        const voting = new web3.eth.Contract(ABI, ADD);
        var accs  = await web3.eth.getAccounts();
        console.log(accs[0]);
        voting.methods.voteForCandidate(web3.utils.asciiToHex(this.state.candidateId)).send({from: accs[0]});
        this.props.update();
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
