import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) => createStyles({
	container: {
		height: '100%',
		width: '100%',
		borderRight: `1px solid ${theme.palette.divider}`
	},
	listItemContents: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
