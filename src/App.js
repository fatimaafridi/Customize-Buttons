import React, { Component, Fragment } from 'react';
import Customize from './Components/Customize';
import DynamicCustomizationClasses from './Components/DynamicClassNames';
import DynamicCustomizationInline from './Components/DynamicInlineStyling';

export default class extends Component {
	options = {
		background: 'black',
	};
	render() {
		return (
			<Fragment>
				<Customize />
				<DynamicCustomizationClasses />
				<DynamicCustomizationInline />
			</Fragment>
		);
	}
}
