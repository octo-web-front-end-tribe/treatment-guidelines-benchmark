import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

import styles from './styles';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

class AppLayout extends React.Component {
	state = {
		open: false,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme, children } = this.props;

		return (
			<div className={ classes.root }>
				<AppBar
					position="absolute"
					className={ classNames(classes.appBar, this.state.open && classes.appBarShift) }
				>
					<Toolbar disableGutters={ !this.state.open }>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={ this.handleDrawerOpen }
							className={ classNames(classes.menuButton, this.state.open && classes.hide) }
						>
							<MenuIcon/>
						</IconButton>
						<Typography variant="title" color="inherit" noWrap>
							Menu
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={ {
						paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
					} }
					open={ this.state.open }
				>
					<div className={ classes.toolbar }>
						<IconButton onClick={ this.handleDrawerClose }>
							{ theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/> }
						</IconButton>
					</div>
					<Divider/>
					<List>{ mailFolderListItems }</List>
					<Divider/>
					<List>{ otherMailFolderListItems }</List>
				</Drawer>
				<main className={ classes.content }>
					<div className={ classes.toolbar }/>
					{ children }
				</main>
			</div>
		);
	}
}

AppLayout.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	children: PropTypes.element,
};

export default withStyles(styles, { withTheme: true })(AppLayout);
