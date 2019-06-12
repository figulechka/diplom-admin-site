import React from 'react';
import styles from './App.styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface Props extends WithStyles<typeof styles> {

}

interface State {

}

class App extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<Header />
				<div className={classes.contentContainer}>
					<Sidebar />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(App);
