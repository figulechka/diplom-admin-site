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
	showPopup: boolean;
}

class App extends React.Component<Props, State> {
	public state: State = {
		selectedListItemIndex: 0,
		showPopup: false
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
	private readonly onAddClick = () => this.setState({ showPopup: true });
	private readonly onEditClick = this.onAddClick;
	private readonly onPopupClose = () => this.setState({ showPopup: false });

	public render(): React.ReactElement {
		const { classes } = this.props;
		const { selectedListItemIndex, showPopup } = this.state;

		return (
			<div className={classes.container}>
				<Header />
				<div className={classes.contentContainer}>
					<div className={classes.sidebarContainer}>
						<Sidebar
							listItems={this.listItems}
							selectedItemIndex={selectedListItemIndex}
							onItemClick={this.onItemClick}
							onAddClick={this.onAddClick}
						/>
					</div>
					<div className={classes.tableContainer}>
						<Table
							data={this.rawTableData[selectedListItemIndex] || ''}
							onEditClick={this.onEditClick}
						/>
					</div>
				</div>
				<AddModal
					show={showPopup}
					onClose={this.onPopupClose}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(App);
