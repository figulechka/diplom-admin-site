import React from 'react';
import styles from './Sidebar.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

interface Props extends WithStyles<typeof styles> {

}

interface State {
	selectedItemIndex: number | null;
}

class Sidebar extends React.Component<Props, State> {
	public state: State = {
		selectedItemIndex: null
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

	private readonly onItemClick = (itemIndex: number) => this.setState({ selectedItemIndex: itemIndex });

	public render(): React.ReactElement {
		const { classes } = this.props;
		const { selectedItemIndex } = this.state;

		return (
			<div className={classes.container}>
				<List component="nav">
					{this.listItems.map((listItem: string, index) => (
						<ListItem
							button
							selected={index === selectedItemIndex}
							key={listItem}
							onClick={() => this.onItemClick(index)}
						>
							<ListItemText primary={listItem} />
						</ListItem>
					))}
				</List>
			</div>
		);
	}
}

export default withStyles(styles)(Sidebar);
