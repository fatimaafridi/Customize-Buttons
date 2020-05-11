import React, { Component } from 'react';
import Customize from './Components/Customize';

export default class extends Component {
	options = {
		background: 'black',
	};
	render() {
		return <Customize />;
	}
}
