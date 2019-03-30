import React, { Component } from 'react';

export default class SuccessAlert extends Component 
{
    constructor(props){
        super(props);
    }

    render() 
    {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}
