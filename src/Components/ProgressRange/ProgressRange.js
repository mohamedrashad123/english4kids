import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme, width, baseheight, barheight, barbackground, padding = '12px' }) => ({
	height: baseheight,
	borderRadius: 127,
	padding,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		height: barheight,
		margin: 'auto',
		left: '8px',
		width: width,
		borderRadius: 127,
		transform: `translateX(0px) !important`,
		transition: 'width .4s linear !important',
		backgroundColor: theme.palette.mode === 'light' ? barbackground : '#308fe8',
	},
}));

export default function CustomizedProgressBars({
	withLabel = false,
	baseheight,
	barheight,
	min = 0,
	max = 100,
	value,
	barbackground,
	padding,
	width,
	className,
	containerClassName,
}) {
	const normalise = (value) => ((value - min) * 100) / (max - min);

	return (
		<Box sx={{ flexGrow: 1, padding: '10px' }} className={containerClassName}>
			{withLabel ? (
				<Box sx={{ minWidth: 35 }}>
					<Typography align="left" paddingLeft={`${normalise(value) - 7}%`} variant="body2" color="text.secondary">
						<strong>{`${Math.round(value)}`}</strong>/<small>{max}</small>
					</Typography>
				</Box>
			) : null}
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ width: '100%', mr: 1 }}>
					<BorderLinearProgress
						className={className}
						variant="determinate"
						value={normalise(value)}
						baseheight={baseheight}
						barheight={barheight}
						barbackground={barbackground}
						padding={padding}
						width={`${normalise(value) - (width === 100 || width === 50 ? 2 : 4)}% !important`}
					/>
				</Box>
			</Box>
		</Box>
	);
}
