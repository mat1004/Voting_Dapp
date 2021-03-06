import React, {Component } from 'react';
import { Row, Col } from 'reactstrap';
import ElectionComponent from './components/electionComponent';
import CandidatesListComponent from './components/candidatesListComponent';
import VoteComponent from './components/voteComponent';
import Web3 from "web3";
import votingArtifact from "./artifacts/Voting.json";

class App extends Component {
  constructor () {
    super ()
    this.state = {
      voting : null,
      candidates : [],
      votes : []
    }
    this.data = this.data.bind(this);
  }

  componentDidMount () {
    this.data ();
  }

  async data () {
    const web3 = new Web3 ("HTTP://127.0.0.1:7545" || Web3.givenProvider);
    const ABI = votingArtifact.abi;
    const ADD = votingArtifact.networks[5777].address;
    const voting = new web3.eth.Contract (ABI, ADD);
    this.setState ({
      voting
    });
    const candidates = await voting.methods.getCandidates ().call ();
    var v = [];
    for(var c in candidates){
      console.log(c);
      v.push(web3.utils.hexToNumber(await voting.methods.totalVotesFor(candidates[c]).call()));
    }
    this.setState ({
      candidates : candidates.map(name => web3.utils.hexToAscii(name)),
      votes: v.map(votes => votes)
    });
    console.log(this.state.votes);
  }

  

  render () {
    return (
      <div className="App">
        <ElectionComponent></ElectionComponent>
        <Row>
          <Col lg="6">
            <CandidatesListComponent names = { this.state.candidates } votes = {this.state.votes} ></CandidatesListComponent>
          </Col>
          <Col lg="6">
            <VoteComponent update = {this.data}></VoteComponent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
