import React from 'react';
import { VideoDetails } from '../pages/home/home';
import { HttpRequest } from '../lib/httpRequest/httpRequest';

type VideoContextProps = {
	videoList: VideoDetails[];
	setVideoList: React.Dispatch<React.SetStateAction<VideoDetails[]>>;
	videoId: string;
	setVideoId: React.Dispatch<React.SetStateAction<string>>;
};

export const VideoContext = React.createContext<VideoContextProps>({
	videoList: [],
	setVideoList: () => {},
	videoId: '',
	setVideoId: () => {},
});

export const VideoContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [videoId, setVideoId] = React.useState<string>('fRh_vgS2dFE');
	const [videoList, setVideoList] = React.useState<VideoDetails[]>([]);

	const contextValues = React.useMemo(
		() => ({
			videoList,
			setVideoList,
			videoId,
			setVideoId,
		}),
		[videoList, videoId],
	);

	React.useEffect(() => {
		const abortController = new AbortController();
		const fetchFeed = async (): Promise<void> => {
			const response = await HttpRequest.searchVideos(`/search/${'sorry'}`);
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
		};
		fetchFeed();

		return abortController.abort();
	}, []);

	return (
		<VideoContext.Provider value={{ ...contextValues }}>
			{children}
		</VideoContext.Provider>
	);
};
