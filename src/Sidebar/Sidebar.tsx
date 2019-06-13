import React from 'react';
import styles from './Sidebar.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

interface Props extends WithStyles<typeof styles> {
	listItems: string[];
	selectedItemIndex: number | null;
	onItemClick: (index: number) => void;
}

interface State {

}

class Sidebar extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const { classes, selectedItemIndex, listItems, onItemClick } = this.props;

		return (
			<div className={classes.container}>
				<List component="nav">
					{listItems.map((listItem: string, index) => (
						<ListItem
							button
							selected={index === selectedItemIndex}
							key={listItem}
							onClick={() => onItemClick(index)}
						>
							<div className={classes.listItemContents}>
								<ListItemText primary={listItem} />
								{(index === selectedItemIndex) && (<AddIcon />)}
							</div>
						</ListItem>
					))}
				</List>
			</div>
		);
	}
}

export default withStyles(styles)(Sidebar);
