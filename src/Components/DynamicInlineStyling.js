import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = {
	button: {
		background: 'green',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
	},
	buttonBlack: {
		background: 'black',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
	},
};

export default function DynamicInlineStyling() {
	const [color, setColor] = useState('default');

	const handleChange = (event) => {
		setColor(event.target.checked ? 'black' : 'default');
	};

	return (
		<Fragment>
			<p>
				<FormControlLabel
					control={
						<Switch
							checked={color === 'black'}
							onChange={handleChange}
							color='primary'
							value='dynamic-class-name'
						/>
					}
					label='Black'
				/>
				<Button
					style={{
						...styles.button,
						...(color === 'black' ? styles.buttonBlack : {}),
					}}>
					Inline Dynamic
				</Button>
			</p>
		</Fragment>
	);
}
