import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Grid from "material-ui/Grid";
import Tabs, { Tab } from "material-ui/Tabs";
import Slider, { createSliderWithTooltip } from "rc-slider";

import SelectControl from "../Components/SelectControl";
import SliderTextField from "../Components/SliderTextField";
import styles from "./styles";

const SEXES = ["Female", "Male"];
const SliderWithTooltip = createSliderWithTooltip(Slider);

class MultipleSelect extends React.Component {
  state = {
    sex: [],
    age: "",
    race: 1,
		totalCholesterol: "",
		ldlCholesterol: "",
  };

  handleChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value });
  };

	handleValueChange = fieldName => value => {
		this.setState({ [fieldName]: value });
  };

  handleBarChange = fieldName => (event, value) => {
    this.setState({ [fieldName]: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid className={classes.root} lg={6} direction="column">
          <Grid item lg={12}>
            <SelectControl
              classes={classes}
              options={SEXES}
              value={this.state.sex}
              label="Sex"
              handleChange={this.handleChange("sex")}
            />
          </Grid>
          <Grid container alignItems="flex-end" lg={12}>
						<SliderTextField
							name={"age"}
							value={this.state.age}
							label={"Age"}
							classes={classes}
							onChange={this.handleChange("age")}
							onValueChange={this.handleValueChange("age")}
							min={0}
							max={120}
							step={1}
						/>
          </Grid>
          <Grid item lg={12}>
            <AppBar
              className={classes.appBar}
              position="static"
              color="default"
              elevation={0}
            >
              <div className={classes.AppBarLabel}>Race</div>
              <Tabs
                className={classes.AppBarValuesContainer}
                value={this.state.race}
                onChange={this.handleBarChange("race")}
                indicatorColor="primary"
                textColor="primary"
                fullWidth={false}
              >
                <Tab label="African American" />
                <Tab label="Non hispanic white / other" />
              </Tabs>
            </AppBar>
          </Grid>
					<Grid container alignItems="flex-end" lg={12}>
						<SliderTextField
							name={"totalCholesterol"}
							value={this.state.totalCholesterol}
							label={"Total cholesterol (g/l)"}
							classes={classes}
							onChange={this.handleChange("totalCholesterol")}
							onValueChange={this.handleValueChange("totalCholesterol")}
							min={0}
							max={2}
							step={0.01}
						/>
					</Grid>
					<Grid container alignItems="flex-end" lg={12}>
						<SliderTextField
							name={"ldlCholesterol"}
							value={this.state.ldlCholesterol}
							label={"LDL cholesterol (g/l)"}
							classes={classes}
							onChange={this.handleChange("ldlCholesterol")}
							onValueChange={this.handleValueChange("ldlCholesterol")}
							min={0}
							max={2}
							step={0.01}
						/>
					</Grid>
        </Grid>
        <Grid className={classes.root} lg={4} />
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(MultipleSelect);
