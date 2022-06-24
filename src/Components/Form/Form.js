import { Button, Checkbox, Grid, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import form from './signup.jpg';
import classes from './form.module.css';
import { Box } from '@mui/system';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { FormControl, OutlinedInput } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import clsx from 'clsx';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const CustomLabel = () => (
	<label>
		I accept the terms of the offer of the <span className="primary_text">privacy policy</span>
	</label>
);

function Form() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="formContainer">
			<Grid container spacing={3}>
				<Grid item xs={12} lg={9} className={classes.imgContainer}>
					<img src={form} className={classes.formImage} alt="signup" />
				</Grid>
				<Grid item xs={12} lg={3} className={classes.formContainer}>
					<form className={classes.form}>
						<Typography component="div" variant="h3" style={{ margin: '32px 0', padding: '0 15px' }}>
							Join Now!
						</Typography>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className={classes.tabsContainer}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
								<Tab label="Registration" {...a11yProps(0)} className={classes.tab} />
								<Tab label="Sign in" {...a11yProps(1)} className={classes.tab} />
							</Tabs>
						</Box>
						<Stack spacing={3} direction="row" className={classes.iconsContainer}>
							<Typography component="div" className={classes.socialIconsInfo} variant="text" style={{ fontWeight: 'bold' }}>
								You can sign in with social
							</Typography>
							<div>
								<IconButton style={{ background: '#fff', marginRight: '15px' }}>
									<FcGoogle />
								</IconButton>
								<IconButton style={{ background: '#fff' }}>
									<ImFacebook color="#4B629E" />
								</IconButton>
							</div>
						</Stack>
						<TabPanel className={classes.tabBanel} value={value} index={0}>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="Your name"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="E-mail or Phone Number"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="Password"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>
							<FormControl>
								<FormLabel id="demo-row-radio-buttons-group-label">Select your grade</FormLabel>
								<RadioGroup className={classes.radioGroup} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
									<FormControlLabel className="checkboxItem" value="1" control={<Radio />} label="1" />
									<FormControlLabel className="checkboxItem" value="2" control={<Radio />} label="2" />
									<FormControlLabel className="checkboxItem" value="3" control={<Radio />} label="3" />
								</RadioGroup>
							</FormControl>
							<FormControl className={classes.formPolicyContainer}>
								<FormControlLabel control={<Checkbox />} label={<CustomLabel />} />
							</FormControl>
							<FormControl className={classes.formButton}>
								<Button variant="outlined" className={clsx('primaryButton', classes.formButton)}>
									Registration
								</Button>
							</FormControl>
						</TabPanel>
						<TabPanel value={value} index={1} className={classes.tabBanel}>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="E-mail or Phone Number"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="Password"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>
							<FormControl className={classes.textField} sx={{ m: 1, width: '25ch' }} variant="outlined">
								<OutlinedInput
									id="outlined-adornment-weight"
									placeholder="confirm password"
									aria-describedby="outlined-weight-helper-text"
									inputProps={{
										'aria-label': 'weight',
									}}
								/>
							</FormControl>

							<Stack spacing={3} direction="row" justifyContent="space-between">
								<Button className={clsx(classes.formTextBtn, 'primary_text')} variant="text">
									Forget password?
								</Button>
								<Button className={clsx(classes.formTextBtn, 'primary_text')} variant="text">
									Create Account
								</Button>
							</Stack>

							<FormControl className={clsx(classes.formButton, classes.loginBtn)}>
								<Button variant="outlined" className={clsx('primaryButton', classes.formButton)}>
									Sign in
								</Button>
							</FormControl>
						</TabPanel>
					</form>
				</Grid>
			</Grid>
		</div>
	);
}

export default Form;
