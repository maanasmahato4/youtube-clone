import React from 'react';
import { VideoDetails } from '../pages/home/home';
import { HttpRequest } from '../lib/httpRequest/httpRequest';

type VideoContextProps = {
	videoUrl: string;
	setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
	videoList: VideoDetails[];
	setVideoList: React.Dispatch<React.SetStateAction<VideoDetails[]>>;
};

export const VideoContext = React.createContext<VideoContextProps | undefined>(
	undefined,
);

export const VideoContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [videoUrl, setVideoUrl] = React.useState<string>(
		'https://youtube.com/embed/fRh_vgS2dFE',
	);
	const [videoList, setVideoList] = React.useState<VideoDetails[]>([]);

	const contextValues = React.useMemo(
		() => ({
			videoUrl,
			setVideoUrl,
			videoList,
			setVideoList,
		}),
		[videoUrl, videoList],
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
