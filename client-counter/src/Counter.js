import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
    
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    counterWillMount(){
        axios.get('/counter')
        .then(({ data }) => { this.setState({ value:data.counter } )})
    }
    
    addCounter() {
        axios.post('/counter/add')
        .then(({ data }) => { this.setState({ value:data.counter } )})
    }

    subtractCounter() {
        axios.post('/counter/subtract')
        .then(({ data }) => { this.setState({ value:data.counter } )})
    }

    render() {
        return (
            <div>
                <h1>{ this.state.value }</h1>
                <button onClick={ this.addCounter.bind(this) }> + </button>
                <button onClick={ this.subtractCounter.bind(this) }> - </button>
            </div>
        )
    }
}

export default Counter; 