import { withStyles, WithStyles } from '@material-ui/core';
import styles from './AddModal.styles';
import React from 'react';
import Modal from '@material-ui/core/Modal';
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
				<div  className={classes.contentContainer}>
					<Typography variant="subtitle1" id="simple-modal-description">
						My Description
					</Typography>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(AddModal);