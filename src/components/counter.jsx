import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: []
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 }); 
    }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return (         
    //         <ul>
    //             { this.state.tags.map(tag => <li key={ tag }>{ tag }</li> ) }
    //         </ul>)
    // }

    render() { 
        return (
        <div> 
            <span>{this.state.value}</span>
            {/* { this.state.tags.length === 0 && 'Please create a new tag!' } */}
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
            
        );
    }

}
 
export default Counter;