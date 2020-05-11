import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function Customize() {
	const style = buttonStyles();

	return (
		<Fragment>
			{/* Through over pseudo classes and props*/}
			<Button className={classes.Button}>Over-riding css</Button>{' '}
			<Button disabled className={classes.Button}>
				Over-riding css
			</Button>{' '}
			{/* Through over riding class properties*/}
			<Button
				classes={{
					root: style.root,
				}}>
				Over-riding css
			</Button>
		</Fragment>
	);
}
