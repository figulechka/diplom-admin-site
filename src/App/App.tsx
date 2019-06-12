import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing }: Theme) => createStyles({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: spacing(2)
	},
	title: {
		flexGrow: 1
	}
});

interface Props extends WithStyles<typeof styles> {

}

interface State {
	version: number;
}

class App extends React.Component<Props, State> {
	public state: State = {
		version: 101
	};

	private printVersion(): string {
		const { version } = this.state;

		// @ts-ignore
		// tslint:disable-next-line:prefer-template
		return 'v' + [...`${version}`].join('.');
	}

	private readonly onPublishClick = () => this.setState({ version: this.state.version + 1 });

	public render(): React.ReactElement {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.root}>
					<AppBar position="static">
						<Toolbar>
							<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								{this.printVersion()}
							</Typography>
							<Button
								onClick={this.onPublishClick}
								color="inherit"
							>
								Опубликовать
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(App);
