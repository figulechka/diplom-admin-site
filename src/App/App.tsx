import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {

}

interface State {

}

export default class App extends React.Component<Props, State> {
	public render(): React.ReactElement {
		return (
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		);
	}
}
