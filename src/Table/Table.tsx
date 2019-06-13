import React from 'react';
import styles from './Table.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import MaterialUiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { bodyParts, symptoms, parseData } from './Table.data';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface Props extends WithStyles<typeof styles> {

}

interface State {

}

class Table extends React.Component<Props, State> {
	public render(): React.ReactElement {
		const [headerData, ...tableData]: string[][] = parseData(symptoms);

		return (
			<MaterialUiTable>
				<TableHead>
					<TableRow>
						{headerData.map((headerCell: string) => (
							<TableCell align="right" key={headerCell} size="small">
								{headerCell}
							</TableCell>
						))}
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{tableData.map((rowData: string[], rowIndex: number) => (
						<TableRow key={rowIndex}>
							{rowData.map((cellData: string, cellIndex: number) => (
								<TableCell
									key={`${rowIndex}_${cellIndex}`}
									align="right"
									size="small"
								>
									{(cellData.length > 20) ? `${cellData.slice(0, 20)}...` : cellData}
								</TableCell>
							))}
							<TableCell align="right">
								<EditIcon style={{ marginRight: 10 }} color="primary" />
								<DeleteIcon color="error" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</MaterialUiTable>
		);
	}
}

export default withStyles(styles)(Table);
