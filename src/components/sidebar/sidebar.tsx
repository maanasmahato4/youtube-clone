import React from 'react';
import styles from './sidebar.module.css';
import { VideoDetails } from '../../pages/home/home';
import { VideoContext } from '../../context/context';

type sideBarProps = {
	videos: VideoDetails[];
};

const SideBar: React.FC<sideBarProps> = ({ videos }): React.ReactElement => {
	const { setVideoId } = React.useContext(VideoContext);
	return (
		<div className={styles['sidebar-container']}>
			{videos.map((video, idx) => {
				if (video !== undefined) {
					return (
						<div
							key={idx}
							className={styles['card']}
							onClick={() => setVideoId(video.videoId)}
						>
							<img height={'100%'} width={'100%'} src={video.thumbNail} />
						</div>
					);
				}
			})}
		</div>
	);
};

export default SideBar;
