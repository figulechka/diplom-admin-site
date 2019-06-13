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
		outline: 'none'
	}
});
