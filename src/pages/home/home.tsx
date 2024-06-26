import React from 'react';
import SearchBar from '../../components/search/search';
import SideBar from '../../components/sidebar/sidebar';
import VideoScreen from '../../components/video-screen/video-screen';
import styles from './home.module.css';
import { HttpRequest } from '../../lib/httpRequest/httpRequest';
import { VideoContext } from '../../context/context';

export type VideoDetails = {
	title: string;
	videoId: string;
	views: string;
	thumbNail: string;
};

function Home() {
	const [searchValue, setSearchValue] = React.useState<string>('');
	const { videoList, setVideoList, videoId, setVideoId } =
		React.useContext(VideoContext);
	async function handleSearch(): Promise<void> {
		const response = await HttpRequest.searchVideos(searchValue);
		const videosDetails = response.data.contents.map(
			(content: any): VideoDetails | undefined => {
				if (content.type === 'video') {
					const { title, videoId, stats, thumbnails } = content.video;
					if (thumbnails[0] || thumbnails[1]) {
						return {
							title,
							videoId,
							views: stats.views,
							thumbNail: thumbnails[0].url || thumbnails[1].url,
						};
					}
				}
			},
		);
		setVideoList(videosDetails);
		setVideoId(response.data.contents[0].video.videoId);
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
				<VideoScreen defaultVideoId={videoId} />
			</section>
			<section>
				<SideBar videos={videoList} />
			</section>
		</main>
	);
}

export default Home;
