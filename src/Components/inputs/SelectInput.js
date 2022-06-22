import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const dot = (color = 'transparent') => ({
	alignItems: 'center',
	display: 'flex',
});

const indicatorSeparatorStyle = { width: 0 };
const IndicatorSeparator = ({ innerProps }) => {
	return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const animatedComponents = makeAnimated();
const colorStyles = {
	container: (base, { selectProps: { width } }) => ({
		...base,
		flex: 1,
		width,
		flexBasis: width,
	}),
	control: (styles, { selectProps: { boxShadow, width } }) => ({
		...styles,
		width,
		backgroundColor: 'white',
		boxShadow,
		borderRadius: '4px',
		border: 'none',
		padding: '18px 10px 8px',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
		};
	},
	input: (styles) => ({ ...styles, ...dot() }),
	placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
	singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
	menu: (styles, { selectProps: { width } }) => ({ ...styles, width, zIndex: 10 }),
};

const placeholderStyle = {
	position: 'absolute',
	top: '2px',
	left: '19px',
	fontSize: '14px',
	color: '#111',
	zIndex: '1',
};

export default function CustomSelectMenu({ options, changeValue, placeholder, ...props }) {
	const [value, setValue] = useState(null);

	const onChange = (option, { action }) => {
		if (action === 'clear') {
			setValue(null);
		}

		if (action === 'select-option') {
			setValue(option);
			changeValue(option?.value);
		}
	};

	const onInputChange = (string, { action }) => {
		if (action === 'input-change') {
			setValue({ value: string, label: string });
		}
	};

	return (
		<div style={{ position: 'relative' }}>
			<p style={placeholderStyle}>{placeholder}</p>
			<Select
				onChange={onChange}
				onInputChange={onInputChange}
				// closeMenuOnSelect={false}
				components={{ ...animatedComponents, IndicatorSeparator }}
				styles={colorStyles}
				options={options}
				value={value}
				defaultValue={value}
				option={value}
				isClearable
				{...props}
				placeholder="select"
			/>
		</div>
	);
}
