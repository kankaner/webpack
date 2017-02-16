//Greeter.js

// var config =  require('./config.json');
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }

//ES6语法，使用babel
import React,{Component} from 'react';
import config from './config.json';
import add from './add.json';

import styles from './Greeter.css';//导入

class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
                <h1>{add.addTest}</h1>
            </div>
        );
    }
}
export default Greeter
