import React from 'react';
import { Table, Row, Col } from 'reactstrap';

class candidatesListComponent extends React.Component {


    render() {
        return (
            <div>
                <Row>
                    <Col lg="4"></Col>
                    <h3>Candidate list</h3>
                </Row>
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{ this.props.names [0] }</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg='1' />
                </Row>
            </div>
        );
    }
}

export default candidatesListComponent;
