import React, { ChangeEvent } from 'react';
import { SearchIcon } from '../../assets/icons/icons';
import styles from './search.module.css';

const SearchBar: React.FC = (): React.ReactElement => {
	const [searchValue, setSearchValue] = React.useState<string>('');

	function handleSearchValueChange(event: ChangeEvent<HTMLInputElement>): void {
		setSearchValue(event.target.value);
	}

	function handleSearch(): void {
		console.log(searchValue);
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
