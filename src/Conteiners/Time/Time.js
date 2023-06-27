import React from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {

return (
	<div style={{
	margin: '21px',
	display: 'block',
	width: 'fit-content'
	}}>
	<h3>На какое время вы планируете?</h3>
	<TextField 
		label="выберите время"
		defaultValue="09:30"
		type="time"
		InputLabelProps={{
		shrink: true,
		}}
		// 5 minutes
		inputProps={{
		step: 300,
		}}
	/>
	</div>
);
}

export default App;
