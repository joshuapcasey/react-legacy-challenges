import React, { Component } from 'react';

export default class DogFetch extends Component {
    constructor(props){
        super(props);
        this.state = { dogImage: '' };
        // this.dogFetch = this.dogFetch.bind(this)
    }

    componentDidMount(){
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then((jsonData) =>{this.setState({dogImage: jsonData.message})}
            )        
            .catch(err => console.log(err))
    }
    fetchDog = () =>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((jsonData) =>{this.setState({dogImage: jsonData.message})}
        )        
        .catch(err => console.log(err))
    }
        
    render(){
        return(
            <div>
            <button onClick={this.fetchDog}>Show me Fido!</button>
            <br />
            <img src={this.state.dogImage} width="500px" alt="Random Dog" />
            </div>
        )
    }
}    