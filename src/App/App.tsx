import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {

}

interface State {
	version: number;
}

export default class App extends React.Component<Props, State> {
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
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">
							{this.printVersion()}
						</Typography>
						<Button
							color="inherit"
							onClick={this.onPublishClick}
						>
							Опубликовать
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
