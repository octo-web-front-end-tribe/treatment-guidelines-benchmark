import React from "react";
import { FormControlLabel } from 'material-ui/Form';
import Switch from "material-ui/Switch";

export default ({checked, onChange, name, label}) => (
	<FormControlLabel
		control={
			<Switch
				checked={!!checked}
				onChange={onChange}
				value={name}
			/>
		}
		label={label}
	/>
);
