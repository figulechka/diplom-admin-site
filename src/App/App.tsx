import React from 'react';
import styles from './App.styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Sidebar from '../Sidebar';

interface Props extends WithStyles<typeof styles> {

}

interface State {
	selectedListItemIndex: number | null;
}

class App extends React.Component<Props, State> {
	public state: State = {
		selectedListItemIndex: null
	};

	private readonly listItems: string[] = [
		'Части тела',
		'Симптомы',
		'Диагнозы',
		'Анализы',
		'Специальности врачей',
		'Врачи',
		'Мед. учреждения'
	];

	private readonly onItemClick = (itemIndex: number) => this.setState({ selectedListItemIndex: itemIndex });

	public render(): React.ReactElement {
		const { classes } = this.props;
		const { selectedListItemIndex } = this.state;

		return (
			<div className={classes.container}>
				<Header />
				<div className={classes.contentContainer}>
					<Sidebar
						listItems={this.listItems}
						selectedItemIndex={selectedListItemIndex}
						onItemClick={this.onItemClick}
					/>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(App);
