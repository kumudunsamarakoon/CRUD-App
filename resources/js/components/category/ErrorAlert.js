import React, { Component } from 'react';

export default class ErrorAlert extends Component 
{
    constructor(props){
        super(props);
    }
    render() 
    {
        return (
            <div className="alert alert-danger" role="alert">
                {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
