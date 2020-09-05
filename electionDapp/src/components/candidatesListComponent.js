import React from 'react';
import { Table, Row, Col } from 'reactstrap';

class candidatesListComponent extends React.Component {
    renderTable () {
        return this.props.names.map ((name, index) => {
            return (
                <tr key = { name }>
                    <td>{ index + 1 }</td>
                    <td>{ name }</td>
                    <td></td>
                </tr>
            )
        })
    }

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
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderTable () }
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
