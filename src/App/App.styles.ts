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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flexWrap: 'nowrap'
	},
	sidebarContainer: {
		height: '100%',
		width: 240
	},
	tableContainer: {
		minHeight: '100%',
		maxHeight: '100%',
		width: 'calc(100% - 240px)',
		overflow: 'auto'
	}
});
