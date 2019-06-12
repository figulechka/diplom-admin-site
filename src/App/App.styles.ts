import { createStyles } from '@material-ui/core';

export default () => createStyles({
	container: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	contentContainer: {
		height: 'calc(100% - 64px)',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	}
});
