import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
	button: {
		background: 'red',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
	buttonBlue: {
		background: 'blue',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
	},
	buttonBlack: {
		background: 'black',
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
	},
});

export default function DynamicClassNames() {
	const classes = useStyles();
	const [color, setColor] = useState('default');

	const handleChange = (event) => {
		setColor(event.target.checked ? 'blue' : 'default');
	};

	return (
		<Fragment>
			<h3>Set the control label to dynamically customize button colour</h3>
			<p>
				<FormControlLabel
					control={
						<Switch
							checked={color === 'blue'}
							onChange={handleChange}
							color='primary'
							value='dynamic-class-name'
						/>
					}
					label='Blue'
				/>
				<Button
					className={clsx(classes.button, {
						[classes.buttonBlue]: color === 'blue',
					})}>
					{'Class name branch'}
				</Button>
			</p>
		</Fragment>
	);
}
