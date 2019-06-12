import React from 'react';
import styles from './App.styles';
import Header from '../Header';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface Props extends WithStyles<typeof styles> {

}

interface State {

}

class App extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Header />
			</div>
		);
	}
}

export default withStyles(styles)(App);
