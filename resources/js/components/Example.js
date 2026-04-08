import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Button} from 'reactstrap';

export default class Example extends Component {
    //constructor is a special method used to initialize the state of the class when an instance
    // of the class is created!
    constructor()
    {
        //To ensure the compoennt is properly initisalized within react's internal functionality!
        super()
        //This is an object to hold data that can change over time. It make the applicaation more dynamic!
        this.state={
            posts:[]
        }
    }
    render(){
    return (
        <div className="container">
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>React Post 1</td>
                        <td>This is the first reactstrap Post </td>
                        <td>
                        <Button color="success" size="sm">Edit</Button>
                        <Button color="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}