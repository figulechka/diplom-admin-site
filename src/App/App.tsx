import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
	menuAnchorElement: HTMLElement | null;
}

class App extends React.Component<Props, State> {
	public state: State = {
		version: 101,
		menuAnchorElement: null
	};

	private printVersion(): string {
		const { version } = this.state;
		// @ts-ignore
		const versionString: string = [...`${version}`].join('.');

		return `v ${versionString}`;
	}

	private readonly onPublishClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ menuAnchorElement: event.currentTarget });
	};

	private readonly onPublishMenuClose = () => {
		this.setState({
			menuAnchorElement: null
		});
	};

	private readonly publish = (upgradeType: 'major'| 'minor' | 'patch') => {
		const { version } = this.state;
		const newVersion: number = version +
			((upgradeType === 'major') ? 100 : (upgradeType === 'minor') ? 10 : (upgradeType === 'patch') ? 1 : 0);

		this.setState({
			version: newVersion,
			menuAnchorElement: null
		});
	};

	public render(): React.ReactElement {
		const { classes } = this.props;
		const { menuAnchorElement } = this.state;

		return (
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						{this.printVersion()}
					</Typography>
					<Button
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={this.onPublishClick}
						color="inherit"
					>
						Опубликовать
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={menuAnchorElement}
						keepMounted
						open={Boolean(menuAnchorElement)}
						onClose={this.onPublishMenuClose}
					>
						<MenuItem onClick={() => this.publish('major')}>Мажорная версия</MenuItem>
						<MenuItem onClick={() => this.publish('minor')}>Минорная версия</MenuItem>
						<MenuItem onClick={() => this.publish('patch')}>Патч</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(App);
