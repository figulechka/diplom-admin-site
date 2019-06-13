import { withStyles, WithStyles } from '@material-ui/core';
import styles from './DeleteDialog.styles';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

interface Props extends WithStyles<typeof styles> {
	show: boolean;
	onClose: () => void;
}

interface State {

}

class DeleteDialog extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const { show, onClose } = this.props;

		return (
			<Dialog
				open={show}
				onClose={onClose}
			>
				<DialogTitle>Подтвердите действие</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Вы действительно хотите удалить запись "Озноб"?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose} color="primary">
						Да
					</Button>
					<Button onClick={onClose} color="primary" autoFocus>
						Нет
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default withStyles(styles)(DeleteDialog);
