import React, { Component } from 'react';
import ReactDOM from 'react-dom';	

import { Table, Button, Modal, ModalHeader, ModalBody,ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            posts: [], //response of API into post state
            newPostModal:false,
            newPostData:{title:"",content:"",user_id:""}
        }
    }
    loadPost() {
        axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
            this.setState({
                posts: response.data
            }).catch((error) => {
                console.error("Error loading posts:", error.response || error);  // Log error when loading posts
            });
        })
    }

    addPost() {
        axios.post('http://127.0.0.1:8000/api/post', this.state.newPostData).then((response) => {
            let {posts}=this.state
            this.loadPost()            
            this.setState({
                posts,
                newPostModal:false,
                newPostData:{title:"",content:"",user_id:""}
            })
        })
    } 
    componentWillMount() {
        this.loadPost();
    }
    toggleNewPostModal()
    {
        this.setState({newPostModal: !this.state.newPostModal}) // Open the dialog!
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
                    <ModalHeader > Add New Post


                    <Button
                            className="close"
                            onClick={this.addPost.bind(this)} 
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: '20px',
                                color: 'red',
                            }}
                        >
                            <span>&times;</span> {/* Custom "X" character */}
                        </Button>



                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                            id="title"
                            value={this.state.newPostData.title}
                            onChange={(e)=>{
                                let {newPostData}=this.state
                                newPostData.title=e.target.value
                                this.setState({newPostData})
                            }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input 
                            id="content"
                            value={this.state.newPostData.content}
                            onChange={(e)=>{
                                let {newPostData}=this.state
                                newPostData.content=e.target.value
                                this.setState({newPostData})
                            }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_id">User ID</Label>
                            <Input 
                            id="user_id"
                            value={this.state.newPostData.user_id}
                            onChange={(e)=>{
                                let {newPostData}=this.state
                                newPostData.user_id=e.target.value
                                this.setState({newPostData})
                            }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addPost.bind(this)}> Add Post </Button>{' '}
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

