// Greeter.js
/*var config = require('./config.json')
module.exports  = function(){
     var greet = document.createElement('div')
     greet.textContent = config.greeterText
     return greet;
};*/
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
        {config.greetText}
    );
  }
}

export default Greeter;