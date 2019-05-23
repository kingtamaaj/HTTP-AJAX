import React, { Component } from 'react';
import axios from 'axios';



export default class FriendList extends Component {
    constructor (props) {
    super(props);
    this.state ={
        friends: [],
        activeFriend: null
        };
    }


    componentDidMount() {
        axios 
        .get('http://localhost:5000/friends')
        .then (response => {
            this.setState(() => ({friends: response.data
            }));

        })
    }






}