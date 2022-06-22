import React, { useState } from 'react';
import LessonsList from '../LessonsList/LessonsList';
import HomeIcon from './HomeIcon.svg';
import FilterOptions from './filter/Filter';
import ProgressRange from '../ProgressRange/ProgressRange';
import GamesList from '../gamesList/GamesList';
import classes from './Home.module.css';
import Typography from '@mui/material/Typography';

let searchTimeout = null;
const Home = () => {
	const [unitId, setUnitId] = useState('');
	const [search, setSearch] = useState('');
	const [gradeId, setGradeId] = useState('1');

	const changeUnit = (unitId) => setUnitId(unitId);
	const handleSearch = (event) => {
		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			setSearch(event.target.value);
		}, 800);
	};

	return (
		<div className={classes.home}>
			<div className="welcomeBox d-flex">
				<img src={HomeIcon} />
				<div className="welcomeBoxContent">
					<h1 className="h1">
						<span className="primary_text">Hi, </span> Muhammed
					</h1>
					<Typography variant="subtitle1" component="div" style={{ width: '90%' }}>
						Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account
					</Typography>
				</div>
			</div>
			<FilterOptions changeUnit={changeUnit} handleSearch={handleSearch} />
			<div className={classes.listContainer}>
				<LessonsList unitId={unitId} search={search} gradeId={gradeId} />
			</div>
			<ProgressRange baseheight={12} barheight="12px" barbackground="#6E41E2" value={20} max={20} padding="10px" width={100} />
			<div className={classes.listContainer}>
				<h2 className="h1">Unlocked Games!</h2>
				<GamesList />
			</div>
		</div>
	);
};

export default Home;
