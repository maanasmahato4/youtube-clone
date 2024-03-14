import React from 'react';
import styles from './video-screen.module.css';

type videoScreenProps = {
	videoUrl: string;
};

const VideoScreen: React.FC<videoScreenProps> = ({ videoUrl }) => {
	return (
		<div className={styles['screen-container']}>
			<iframe
				className={styles['screen-video-player']}
				src={videoUrl}
				referrerPolicy='no-referrer-when-downgrade'
				allow='autoplay; encrypted-media'
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoScreen;
