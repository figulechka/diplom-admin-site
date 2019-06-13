import { withStyles, WithStyles } from '@material-ui/core';
import styles from './AddModal.styles';
import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

interface Props extends WithStyles<typeof styles> {
	show: boolean;
	onClose: () => void;
}

interface State {

}

class AddModal extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const { show, classes, onClose } = this.props;

		return (
			<Modal
				open={show}
				onClose={onClose}
			>
				<div className={classes.contentContainer}>
					<Typography variant="h6" component="h6" className={classes.title}>
						Добавить симптом
					</Typography>
					<TextField
						className={classes.input}
						label="Название"
					/>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(AddModal);
