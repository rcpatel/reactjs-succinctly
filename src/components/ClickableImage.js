import React, {Component} from 'react';

class ClickableImage extends Component{
    render(){
        return (
            <a href={this.props.href}>
            <img src={this.props.src} />
            </a>
        );
    };
};

export default ClickableImage;