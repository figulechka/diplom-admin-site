import { createStyles, Theme } from '@material-ui/core';

export default (theme: Theme) => createStyles({
	container: {
		height: '100%',
		width: '100%'
	},
	cell: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}
});
