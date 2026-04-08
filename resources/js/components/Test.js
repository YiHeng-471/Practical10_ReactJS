import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Button color="primary">primary</Button>{' '}
                    <Button>secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>
                </div>
            </div>
        );
    }
}

if (document.getElementById('test')) {
    ReactDOM.render(<Example />, document.getElementById('test'));
}