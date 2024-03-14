import React from 'react';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
	width?: string | number;
	height?: string | number;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
	width = '24',
	height = '24',
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			width={width}
			height={height}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
			/>
		</svg>
	);
};
