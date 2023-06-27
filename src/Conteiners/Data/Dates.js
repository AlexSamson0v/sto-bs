import React from 'react';
import TextField from '@material-ui/core/TextField';

const App = () => {

return (
	<div style={{
	margin: '21px',
	display: 'block',
	width: 'fit-content'
	}}>
	<h3>на какую дату вы планируете?</h3>
	<TextField
		id="date"
		label="выберите дату"
		type="date"
		defaultValue="2023-06-24"
		InputLabelProps={{
		shrink: true,
		}}
	/>
	</div>
);
}

export default App;

