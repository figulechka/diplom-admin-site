import React from 'react';
import styles from './App.styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

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

	private readonly onPublishButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({ menuAnchorElement: event.currentTarget });
	};

	private readonly onPublishMenuClose = () => {
		this.setState({
			menuAnchorElement: null
		});
	};

	private readonly onPublishItemClick = (upgradeType: 'major' | 'minor' | 'patch') => {
		const { version } = this.state;
		const newVersion: number = version +
			((upgradeType === 'major') ? 100 : (upgradeType === 'minor') ? 10 : (upgradeType === 'patch') ? 1 : 0);

		this.setState({
			version: newVersion,
			menuAnchorElement: null
		});
	};

	private renderPublishButton(): React.ReactElement {
		const { menuAnchorElement } = this.state;

		return (
			<>
				<Button
					aria-controls="publish-menu"
					aria-haspopup="true"
					onClick={this.onPublishButtonClick}
					color="inherit"
				>
					Опубликовать
				</Button>
				<Menu
					id="publish-menu"
					anchorEl={menuAnchorElement}
					keepMounted
					open={Boolean(menuAnchorElement)}
					onClose={this.onPublishMenuClose}
				>
					<MenuItem onClick={() => this.onPublishItemClick('major')}>Мажорная версия</MenuItem>
					<MenuItem onClick={() => this.onPublishItemClick('minor')}>Минорная версия</MenuItem>
					<MenuItem onClick={() => this.onPublishItemClick('patch')}>Патч</MenuItem>
				</Menu>
			</>
		);
	}

	private renderSearchInput(): React.ReactElement {
		const { classes } = this.props;

		return (
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder="Поиск…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput
					}}
					inputProps={{ 'aria-label': 'Search' }}
				/>
			</div>
		);
	}

	public render(): React.ReactElement {
		const { classes } = this.props;

		return (
			<AppBar position="static">
				<Toolbar>
					{this.renderSearchInput()}
					<Typography variant="h6" className={classes.title}>
						{this.printVersion()}
					</Typography>
					{this.renderPublishButton()}
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles)(App);
