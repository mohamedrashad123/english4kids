import { Grid } from '@material-ui/core';
import React from 'react';
import SearchInput from '../../inputs/SearchInput';
import CustomSelectMenu from '../../inputs/SelectInput';
import styles from './filter.module.css';

const options = [
	{ value: '1', label: 'unit 1' },
	{ value: '2', label: 'unit 2' },
	{ value: '3', label: 'unit 3' },
];

const FilterOptions = ({ handleSearch, changeUnit }) => {
	return (
		<div className={styles.FilterOptions}>
			<Grid className={styles.gridContainer} container spacing={3}>
				<Grid item xs={12} sm={4}>
					<CustomSelectMenu
						placeholder="Select Unit"
						options={options}
						boxShadow="0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)"
						width="100%"
						changeValue={changeUnit}
					/>
				</Grid>
				<Grid item xs={12} sm={8}>
					<SearchInput placeholder="Search for topics you want to learn..." width="100% !important" onChange={handleSearch} />
				</Grid>
			</Grid>
		</div>
	);
};

export default FilterOptions;
