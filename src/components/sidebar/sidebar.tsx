import React from 'react';
import styles from './sidebar.module.css';
import { VideoDetails } from '../../pages/home/home';

type sideBarProps = {
	videos: VideoDetails[];
};

const SideBar: React.FC<sideBarProps> = ({ videos }): React.ReactElement => {
	console.log(videos);
	return (
		<div className={styles['sidebar-container']}>
			{videos.map((video, idx) => {
				if (video !== undefined) {
					return (
						<div key={idx} className={styles['card']}>
							<img height={'100%'} width={'100%'} src={video.thumbNail} />
						</div>
					);
				}
			})}
		</div>
	);
};

export default SideBar;
