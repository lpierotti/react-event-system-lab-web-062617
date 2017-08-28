// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
	
	render() {
		return <input type="password" onKeyUp={this.up}></input>
	}

	up() {
		console.log('Entering password...');
	}
}

export default Keypad;