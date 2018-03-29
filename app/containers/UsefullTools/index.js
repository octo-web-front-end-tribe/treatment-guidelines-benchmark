import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import SelectControl from "../Components/SelectControl";

import styles from "./styles";

const SEXES = ["Female", "Male"];

class MultipleSelect extends React.Component {
  state = {
    sex: [],
		age: '',
  };

  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SelectControl
          classes={classes}
          options={SEXES}
          value={this.state.sex}
					label="Sex"
          handleChange={this.handleChange('sex')}
        />
				<TextField
					className={classes.formControl}
					id="age"
					label="Age"
					value={this.state.age}
					onChange={this.handleChange('age')}
				/>
				<TextField
					className={classes.formControl}
					id="race"
					label="race"
					value={this.state.race}
					onChange={this.handleChange('race')}
				/>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(MultipleSelect);
