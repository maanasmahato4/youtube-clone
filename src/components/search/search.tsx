import React, { ChangeEvent } from 'react';
import { SearchIcon } from '../../assets/icons/icons';
import styles from './search.module.css';

type SearchBarProps = {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
	handleSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
	searchValue,
	setSearchValue,
	handleSearch,
}): React.ReactElement => {
	function handleSearchValueChange(event: ChangeEvent<HTMLInputElement>): void {
		setSearchValue(event.target.value);
	}

	return (
		<span className={styles['search-bar']}>
			<input
				className={styles['search-input']}
				type='text'
				value={searchValue}
				onChange={handleSearchValueChange}
			/>
			<button
				className={styles['search-button']}
				type='button'
				onClick={handleSearch}
			>
				<SearchIcon />
			</button>
		</span>
	);
};

export default SearchBar;
