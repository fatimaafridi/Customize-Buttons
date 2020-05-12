import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from './Customize.module.css';

const buttonStyles = makeStyles({
	root: {
		background: 'black',
		padding: '0 20px',
		borderRadius: 3,
		color: 'white',
		height: 36,
	},
});

const CustomeStyleButton = withStyles({
	root: {
		background: 'yellow',
		color: 'black',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	},
})(Button);

const inlineStyle = {
	background: 'black',
	color: 'white',
	height: 45,
	padding: '0 30px',
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	margin: '2px 2px 2px',
};

export default function Customize() {
	const style = buttonStyles();

	return (
		<Fragment>
			{/* Method 1: using withStyles hoc to wrap desired css */}
			<p>
				<CustomeStyleButton>withStyle</CustomeStyleButton>
			</p>
			{/* Method 2: Through pseudo classes and props*/}
			<p>
				<Button className={classes.Button}>Pseudo classes</Button>{' '}
				<Button disabled className={classes.Button}>
					Pseudo classes
				</Button>
			</p>
			{/*Method 3: Through over riding class properties*/}
			<p>
				<Button
					classes={{
						root: style.root,
					}}>
					Over-riding class
				</Button>
			</p>

			{/*Method: 4 Using the inline styles*/}
			<p>
				<Button style={inlineStyle}>inline css</Button>
			</p>
		</Fragment>
	);
}
