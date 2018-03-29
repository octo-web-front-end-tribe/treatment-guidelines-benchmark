import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Settings from 'material-ui-icons/Settings';

import Icon1 from '../../images/svg/icones_projet_3_hackathon-02.svg';
import Icon2 from '../../images/svg/icones_projet_3_hackathon-03.svg';
import Icon4 from '../../images/svg/icones_projet_3_hackathon-05.svg';
import Icon5 from '../../images/svg/icones_projet_3_hackathon-06.svg';
import Icon6 from '../../images/svg/icones_projet_3_hackathon-07.svg';
import Icon7 from '../../images/svg/icones_projet_3_hackathon-08.svg';
import Icon8 from '../../images/svg/icones_projet_3_hackathon-09.svg';
import Icon9 from '../../images/svg/icones_projet_3_hackathon-10.svg';
import Icon10 from '../../images/svg/icones_projet_3_hackathon_Plan de travail 1.svg';

import styles from './styles';

const IconList = [
	{ linkTo: 'TherapeuticGuidelines', text: 'Therapeutic guidelines', Icon: Icon5 },
	{ linkTo: 'UsefullTools', text: 'Usefull tools', Icon: Icon10 },
	{ linkTo: 'PatientEducationalMaterial', text: 'Patient educational material', Icon: Icon6 },
	{ linkTo: 'MyNetwork', text: 'My network', Icon: Icon4 },
	{ linkTo: 'MyEducationalMaterial', text: 'My educational material', Icon: Icon7 },
	{ linkTo: 'MyProfessionalForum', text: 'My professional forum', Icon: Icon9 },
	{ linkTo: 'ConnectWithPatients', text: 'Connect with my patients', Icon: Icon2 },
	{ linkTo: 'VideoPodcast', text: 'Video podcasts', Icon: Icon8 },
	{ linkTo: 'Contact', text: 'Contact', Icon: Icon1 },
];

function Dashboard({ classes }) {
	return (
		<Grid container className={ classes.root }>
			{ IconList.map(({ Icon, text, linkTo }) => (
				<NavLink to={ linkTo } className={ classes.link } key={Icon}>
					<Grid item>
						<Paper className={ classes.iconPaper } elevation={ 4 }>
							<img src={Icon} className={ classes.icon }/>
						</Paper>
						<Paper className={ classes.textPaper }>{ text }</Paper>
					</Grid>
				</NavLink>
			)) }
		</Grid>
	);
}

Dashboard.Dashboard = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
