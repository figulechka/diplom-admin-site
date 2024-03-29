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
import { bodyParts as bodyPartsRawData, parseData, symptoms as symptomsRawData } from '../Table/Table.data';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

interface Props extends WithStyles<typeof styles> {
	show: boolean;
	onClose: () => void;
}

interface State {
	selectedBodyPart: string;
	selectedParentSymptom: string;
}

class AddModal extends React.Component<Props, State> {
	public state: State = {
		selectedBodyPart: '',
		selectedParentSymptom: ''
	};

	private readonly onSelect = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		const { name, value } = event.target;

		this.setState({ [`selected${name}`]: value } as any);
	};

	public render(): React.ReactElement {
		const { show, classes, onClose } = this.props;
		const { selectedBodyPart, selectedParentSymptom } = this.state;
		// @ts-ignore
		const bodyParts = [...new Set(parseData(bodyPartsRawData).map(([, name]) => name).slice(1))];
		// @ts-ignore
		const parentSymptoms = [...new Set(parseData(symptomsRawData).map(([, name]) => name).slice(1))].sort();

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

					<FormControlLabel
						className={classes.checkBox}
						value="isCritical"
						control={<Checkbox color="primary" />}
						label="Критичный"
						labelPlacement="start"
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

					<FormControl className={classes.input}>
						<InputLabel htmlFor="parent-symptom">Родительский симптом</InputLabel>
						<Select
							value={selectedParentSymptom}
							onChange={this.onSelect}
							inputProps={{ name: 'ParentSymptom', id: 'parent-symptom' }}
						>
							{parentSymptoms.map((symptom: string) => (
								<MenuItem value={symptom} key={symptom}>{symptom}</MenuItem>
							))}
						</Select>
					</FormControl>

					<div className={classes.buttonContainer}>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={onClose}
						>
							Добавить
						</Button>
						<Button
							onClick={onClose}
						>
							Отмена
						</Button>
					</div>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(AddModal);
