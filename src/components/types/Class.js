import React, {Component} from 'react';
import logo from '../../logo.svg';

class ClassComponent extends Component {

    constructor (props) {
        super (props);
    
        this.state = {
    color: 'red',
    }    
}
updateBackgroundColor = () => {
    this.setState ({
        color:'blue',
    });
};

    render (){
        return (
            <div style={{backgroundColor: this.state.color}} >
                <h3>Class Component</h3>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <button onClick={this.updateBackgroundColor}>
                    Cambia de color
                </button>
            </div>
        );
    }
}

export default ClassComponent;