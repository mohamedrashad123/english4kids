import { Grid } from '@material-ui/core';
import React from 'react';
import SearchInput from '../../inputs/SearchInput';
import CustomSelectMenu from '../../inputs/SelectInput';
import styles from './filter.module.css';

const unitOptions = [
	// { value: 1, label: 'unit 1' },
	// { value: 2, label: 'unit 2' },
	// { value: 3, label: 'unit 3' },
	// { value: 4, label: 'unit 4' },
	// { value: 5, label: 'unit 5' },
	// { value: 6, label: 'unit 6' },
	// { value: 7, label: 'unit 7' },
	// { value: 8, label: 'unit 8' },
	// { value: 9, label: 'unit 9' },
	{ value: 10, label: 'unit 10' },
	{ value: 11, label: 'unit 11' },
	{ value: 12, label: 'unit 12' },
	{ value: 13, label: 'unit 13' },
	{ value: 14, label: 'unit 14' },
	{ value: 15, label: 'unit 15' },
	{ value: 16, label: 'unit 16' },
	{ value: 17, label: 'unit 17' },
	{ value: 18, label: 'unit 18' },
];

const FilterOptions = ({ handleSearch, changeUnit }) => {
	return (
		<div className={styles.FilterOptions}>
			<Grid className={styles.gridContainer} container spacing={3}>
				<Grid item xs={12} sm={4}>
					<CustomSelectMenu
						placeholder="Select Unit"
						options={unitOptions}
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
