import { withStyles, WithStyles } from '@material-ui/core';
import styles from './AddModal.styles';
import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { bodyParts as bodyPartsRawData, parseData } from '../Table/Table.data';

interface Props extends WithStyles<typeof styles> {
	show: boolean;
	onClose: () => void;
}

interface State {
	selectedBodyPart: string;
}

class AddModal extends React.Component<Props, State> {
	public state: State = {
		selectedBodyPart: ''
	};

	private readonly onSelect = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const { name, value } = event.target;

		this.setState({ [`selected${name}`]: value } as any);
	};

	public render(): React.ReactElement {
		const { show, classes, onClose } = this.props;
		const { selectedBodyPart } = this.state;
		// @ts-ignore
		const bodyParts = [...new Set(parseData(bodyPartsRawData).map(([, name]) => name).slice(1))];

		return (
			<Modal
				open={show}
				onClose={onClose}
			>
				<div className={classes.contentContainer}>
					<Typography variant="h6" component="h6" className={classes.title}>
						Добавить "Симптомы"
					</Typography>
					<TextField
						className={classes.input}
						label="Название"
					/>
					<FormControl className={classes.input}>
						<InputLabel htmlFor="body-part">Часть тела</InputLabel>
						<Select
							value={selectedBodyPart}
							onChange={this.onSelect}
							inputProps={{ name: 'BodyPart', id: 'body-part' }}
						>
							{bodyParts.map((bodyPart: string) => (
								<MenuItem value={bodyPart} key={bodyPart}>{bodyPart}</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(AddModal);
