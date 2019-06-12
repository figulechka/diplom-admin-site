import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) => createStyles({
	container: {
		height: '100%',
		width: 220,
		borderRight: `1px solid ${theme.palette.divider}`
	}
});
