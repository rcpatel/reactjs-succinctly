import React from "react";
import ReactDom from "react-dom";
import App from "../src/components/App.js"
import ClickableImage from "../src/components/ClickableImage.js"

ReactDom.render(<App />, document.getElementById("root"));


/* ClickableImage as a stateless function component

var ClickableImage = function(props){
    return(
        <div>
        <a href={props.href}>
        <img src={props.src} />
        </a>
        <img src={props.src} />
        </div>
    );
};
*/

/* ClickableImage as a createClass component - React.createClass was deprecated in 15.5 and
moved to a separate library and now removed from React main library

var createReactClass = require("create-react-class");
var ClickableImage = createReactClass({
    render: function(){
        return(
            <div>
            <a href={this.props.href}>
            <img src={this.props.src} />
            </a>
            </div>
        );
    }
});
*/


ReactDom.render(<ClickableImage href="http://google.com" src="http://google.com" />,  
document.getElementById("clickImage"));

var createReactClass = require("create-react-class");
var Timer = createReactClass({
    getInitialState: function(){
        return { counter: this.props.initialSeconds};
    },
    componentDidMount: function(){
        var component = this, currentCounter;
        component.timerId = setInterval(function(){
            currentCounter = component.state.counter;
            if( currentCounter == 1 ){
                clearInterval(component.timerId);
            }
            component.setState({counter: currentCounter - 1});
        }, 1000);
    },
    render: function(){
        return <div>{this.state.counter}</div>;
    }
});


ReactDom.render(<Timer initialSeconds={45}/>, document.getElementById("timer"));
