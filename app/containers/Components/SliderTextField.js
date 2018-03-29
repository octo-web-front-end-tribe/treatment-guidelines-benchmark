import React from "react";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";

import Slider, { createSliderWithTooltip } from "rc-slider";
const SliderWithTooltip = createSliderWithTooltip(Slider);


export default ({name, value, label, classes, onChange, onValueChange, min = 0, max, step}) => (
  <div className={classes.sliderTextField }>
    <Grid item lg={6} direction="column">
      <TextField
        className={classes.formControl}
        id={name}
        label={label}
        value={value}
        onChange={onChange}
      />
    </Grid>
    <Grid item lg={6}>
      <div className={classes.slider}>
        <SliderWithTooltip
          onChange={onValueChange}
          min={min}
          max={max}
          step={step}
        />
      </div>
    </Grid>
  </div>
);
