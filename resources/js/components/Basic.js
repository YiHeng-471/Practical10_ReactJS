import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor() {
        super()
        this.state = {
            //Zone 1: state variables are defined here
            posts: [],
            newPostModal: false,
            updatePostModal: false,
            newPostData: { title: "", content: "", user_id: "" },
            updatePostData: { id:"", title: "", content:"", user_id:"" }
        }
    }

    // Zone 2: functions are defined here, for example, addPost, updatePost, deletePost,
    toggleNewPostModal() {
        this.setState({ 
            newPostModal: !this.state.newPostModal 
        })
    }

    toggleUpdatePostModal() {
        this.setState({ 
            updatePostModal: !this.state.updatePostModal 
        })
    }

    addPost() {
        // API call to add post will be made here
        axios.post('http://127.0.0.1:8000/api/post',
            this.state.newPostData).then((response) => {
                let { posts } = this.state
                this.setState({
                    posts,
                    newPostModal: false,
                    newPostData: { title: "", content: "", user_id: "" }
                })
            })
        
    }

    render() {
        // Zone 3: visual elements are defined here
        return(
            <div>
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Post</Button>
                <Modal isOpen={this.state.newPostModal} toggle={this.toggleNewPostModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}>Title of the Modal</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                id="title" placeholder="Enter title (e.g. Advanced Web Application Development)" 
                                value={this.state.newPostData.title} 
                                onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.title = e.target.value
                                    this.setState({ newPostData })
                                }}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input 
                                id="content" placeholder="Enter content" 
                                value={this.state.newPostData.content} onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.content = e.target.value
                                    this.setState({ newPostData })
                                }}></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="user_id">User ID</Label>
                            <Input 
                                id="user_id" placeholder="Enter user ID" 
                                value={this.state.newPostData.user_id} onChange={(e) => {
                                    let { newPostData } = this.state
                                    newPostData.user_id = e.target.value
                                    this.setState({ newPostData })
                                }}></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addPost.bind(this)}>
                            Add
                        </Button>
                        <Button color="secondary" onClick={this.toggleNewPostModal.bind(this)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById('examples')) {
    ReactDOM.render(<Example />, document.getElementById('examples'));
}