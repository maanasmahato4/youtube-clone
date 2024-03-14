import React from 'react';
import SearchBar from '../../components/search/search';
import SideBar from '../../components/sidebar/sidebar';
import VideoScreen from '../../components/video-screen/video-screen';
import styles from './home.module.css';
import { HttpRequest } from '../../lib/httpRequest/httpRequest';

function Home() {
	const [searchValue, setSearchValue] = React.useState<string>('');
	const [videoUrl, setVideoUrl] = React.useState<string>('');

	async function handleSearch(): Promise<void> {
		const response = await HttpRequest.searchVideos(searchValue);
		const url = `https://youtube.com/embed/${response.data.contents[0].video.videoId}`;
		setVideoUrl(url);
	}
	return (
		<main className={styles['main-layout']}>
			<section>
				<SearchBar
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					handleSearch={handleSearch}
				/>
			</section>
			<section>
				<VideoScreen videoUrl={videoUrl} />
			</section>
			<section>
				<SideBar />
			</section>
		</main>
	);
}

export default Home;
