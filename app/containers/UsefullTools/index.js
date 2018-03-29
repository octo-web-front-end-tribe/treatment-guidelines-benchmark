import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Grid from "material-ui/Grid";
import Tabs, { Tab } from "material-ui/Tabs";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

import { NavLink } from "react-router-dom";

import SelectControl from "../Components/SelectControl";
import SliderTextField from "../Components/SliderTextField";
import SwitchField from "../Components/SwitchField";
import styles from "./styles";

const SEXES = ["Female", "Male"];

class MultipleSelect extends React.Component {
  state = {
    sex: [],
    age: "",
    race: 1,
    totalCholesterol: "",
    ldlCholesterol: "",
    hdlCholesterol: "",
    treatmentWithStatin: false,
    systolicBloodPressure: "",
    treatmentForHypertension: false,
    historyOfDiabetes: false,
    currentSmoker: false,
    aspirinTherapy: false,
    therapyInitiated: false,
    showResult: false,
    baseline: "",
    expected: "",
    adverseEvents: ""
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

  calculate = () => {
    this.setState({
      showResult: true,
      baseline: "42,6 %",
      expected: "31,1 %",
      adverseEvents: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container direction={"column"}>
          <Grid
            container
            className={classes.root}
            lg={6}
            xl={6}
            md={6}
            sm={6}
            xs={6}
          >
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
                  <Tab label="Non hispanic white" />
                  <Tab label="other" />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid container alignItems="flex-end" lg={12}>
              <SliderTextField
                name={"totalCholesterol"}
                value={this.state.totalCholesterol}
                label={"Total cholesterol (mg/dl)"}
                classes={classes}
                onChange={this.handleChange("totalCholesterol")}
                onValueChange={this.handleValueChange("totalCholesterol")}
                min={0}
                max={500}
                step={0.01}
              />
            </Grid>
            <Grid container alignItems="flex-end" lg={12}>
              <SliderTextField
                name={"ldlCholesterol"}
                value={this.state.ldlCholesterol}
                label={"LDL cholesterol (mg/dl)"}
                classes={classes}
                onChange={this.handleChange("ldlCholesterol")}
                onValueChange={this.handleValueChange("ldlCholesterol")}
                min={0}
                max={200}
                step={0.01}
              />
            </Grid>
            <Grid container alignItems="flex-end" lg={12}>
              <SliderTextField
                name={"hdlCholesterol"}
                value={this.state.hdlCholesterol}
                label={"HDL cholesterol (mg/dl)"}
                classes={classes}
                onChange={this.handleChange("hdlCholesterol")}
                onValueChange={this.handleValueChange("hdlCholesterol")}
                min={0}
                max={100}
                step={0.01}
              />
            </Grid>
            <Grid
              container
              alignItems="flex-end"
              lg={12}
              className={classes.switchField}
            >
              <SwitchField
                checked={this.state.treatmentWithStatin}
                onChange={this.handleBarChange("treatmentWithStatin")}
                name={"treatmentWithStatin"}
                label={"Treatment with STATIN"}
              />
            </Grid>
            <Grid container alignItems="flex-end" lg={12}>
              <SliderTextField
                name={"systolicBloodPressure"}
                value={this.state.systolicBloodPressure}
                label={"Systolic blood pressure (mmHg)"}
                classes={classes}
                onChange={this.handleChange("systolicBloodPressure")}
                onValueChange={this.handleValueChange("systolicBloodPressure")}
                min={0}
                max={200}
                step={1}
              />
            </Grid>
            <Grid lg={12} className={classes.switchField}>
              <SwitchField
                checked={this.state.treatmentForHypertension}
                onChange={this.handleBarChange("treatmentForHypertension")}
                name={"treatmentForHypertension"}
                label={"Treatment for hypertension"}
              />
            </Grid>
            <Grid lg={12} className={classes.switchField}>
              <SwitchField
                checked={this.state.historyOfDiabetes}
                onChange={this.handleBarChange("historyOfDiabetes")}
                name={"historyOfDiabetes"}
                label={"History of diabetes"}
              />
            </Grid>
            <Grid lg={12} className={classes.switchField}>
              <SwitchField
                checked={this.state.currentSmoker}
                onChange={this.handleBarChange("currentSmoker")}
                name={"currentSmoker"}
                label={"Current smoker"}
              />
            </Grid>
            <Grid lg={12} className={classes.switchField}>
              <SwitchField
                checked={this.state.aspirinTherapy}
                onChange={this.handleBarChange("aspirinTherapy")}
                name={"aspirinTherapy"}
                label={"Aspirin therapy"}
              />
            </Grid>
            <Grid lg={12} className={classes.switchField}>
              <SwitchField
                checked={this.state.therapyInitiated}
                onChange={this.handleBarChange("therapyInitiated")}
                name={"therapyInitiated"}
                label={"Therapy initiated"}
              />
            </Grid>
            <Grid
              lg={12}
              className={classNames(classes.switchField, classes.button)}
              alignItems="flex-end"
            >
              <Button variant="raised" color="primary" onClick={this.calculate}>
                Calculate
              </Button>
            </Grid>
          </Grid>
					{this.state.showResult && <Grid container lg={6} xl={6} md={6} sm={6} xs={6} direction="row">
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <TextField
                id={"baseline"}
                className={classes.resultControl}
                label={"Baseline 10 years ASCVD Risk"}
                value={this.state.baseline}
                onChange={this.handleChange("baseline")}
              />
            </Grid>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <TextField
                id={"expected"}
                className={classes.resultControl}
                label={"Expected (projected) ASCVD risk if Therapy initiated"}
                value={this.state.expected}
                onChange={this.handleChange("expected")}
              />
            </Grid>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <TextField
                id={"expected"}
                className={classes.resultControl}
                label={"Potential adverse events"}
                value={this.state.adverseEvents}
                onChange={this.handleChange("adverseEvents")}
              />
            </Grid>
          </Grid>}
					{this.state.showResult && <Grid lg={12} alignItems="flex-end" className={classes.button2}>
            <Button
              component={NavLink}
              to="/Results"
              variant="raised"
              color="primary"
            >
              See guidance to treat hypertension in patient with Diabetes
            </Button>
          </Grid>}
        </Grid>
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(MultipleSelect);
