export default theme => ({
	root: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
	},
	grid: {
		'&:hover': {
			opacity: 0.5,
		},
	},
	icon: {
		width: "100%",
		height: "100%",
	},
	iconPaper: theme.mixins.gutters({
		width: 200,
		height: 200,
		padding: "25%",
		textAlign: "center",
		'&:hover': {
			backgroundColor: "lightGrey"
		},
	}),
	textPaper: theme.mixins.gutters({
		marginTop: 1,
		textAlign: "center",
		padding: "0!important",
		color: "#49A48C",
	}),
	link: {
		paddingLeft: 20,
		paddingRight: 20,
	}
});
