export default theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
		width: '100%',
  },
  resultControl: {
    margin: theme.spacing.unit,
		width: '100%',
  },
  appBar: {
    color: "grey",
    width: "initial",
    flexDirection: "initial"
  },
  AppBarLabel: {
    display: "flex",
    alignItems: "flex-end",
    padding: "12px 10px 12px 8px",
    color: "rgba(0, 0, 0, 0.54)",
    backgroundColor: "#FAFAFA"
  },
  AppBarValuesContainer: {
    display: "flex",
    alignItems: "flex-end"
  },
  slider: {
    width: "100%",
		padding: 8,
  },
	sliderTextField: {
    width: "100%",
		display: "flex",
		alignItems: "flex-end",
		padding: 8,
	},
	switchField: {
		paddingLeft: 15,
	},
	button: {
  	textAlign: "right",
	},
	button2: {
  	color: "white",
	}
});
