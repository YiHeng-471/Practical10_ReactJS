import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            posts: [], //response of API into post state
            newPostModal:false,
        }
    }
    loadPost() {
        axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
            this.setState({
                posts: response.data
            })
        })
    }
    componentWillMount() {
        this.loadPost();
    }
    toggleNewPostModal()
    {
        this.setState({newPostModal:true})
    }
    render() {
        let posts = this.state.posts.map((post) => {
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2"> Edit </Button>
                        <Button color="danger" size="sm" className="mr-2"> Delete </Button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">
                {/* toggleNewPostModal is a method (a function defined within a class component in React)  
                that controls the visibility of the modal (the dialog box that appears when adding a new post). 
                When this method is called, it either opens or closes the modal based on the current state of the component.*/}
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Post</Button>
                <Modal isOpen={this.state.newPostModal} toggle={this.toggleNewPostModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}> Add New Post
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input id="content"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_id">User ID</Label>
                            <Input id="user_id"></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}> Add Post </Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewPostModal.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts}
                    </tbody>

                </Table>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
