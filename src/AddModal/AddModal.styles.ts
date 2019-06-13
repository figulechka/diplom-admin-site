import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) => createStyles({
	contentContainer: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		outline: 'none',
		height: 'auto'
	},
	title: {
		marginBottom: 15
	},
	input: {
		width: '100%',
		marginBottom: 10
	},
	checkBox: {
		marginLeft: 0
	},
	buttonContainer: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	button: {
		marginRight: 16
	}
});
