import React from 'react';
import styles from './App.styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Table from '../Table';
import AddModal from '../AddModal';
import { bodyParts, symptoms } from '../Table/Table.data';

interface Props extends WithStyles<typeof styles> {

}

interface State {
	selectedListItemIndex: number;
}

class App extends React.Component<Props, State> {
	public state: State = {
		selectedListItemIndex: 0
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

	private readonly rawTableData: string[] = [
		bodyParts,
		symptoms
	];

	private readonly onItemClick = (itemIndex: number) => this.setState({ selectedListItemIndex: itemIndex });

	public render(): React.ReactElement {
		const { classes } = this.props;
		const { selectedListItemIndex } = this.state;

		return (
			<div className={classes.container}>
				<Header />
				<div className={classes.contentContainer}>
					<div className={classes.sidebarContainer}>
						<Sidebar
							listItems={this.listItems}
							selectedItemIndex={selectedListItemIndex}
							onItemClick={this.onItemClick}
						/>
					</div>
					<div className={classes.tableContainer}>
						<Table
							data={this.rawTableData[selectedListItemIndex] || ''}
						/>
					</div>
				</div>
				<AddModal show={true} />
			</div>
		);
	}
}

export default withStyles(styles)(App);
