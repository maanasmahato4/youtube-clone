import React from 'react';
import styles from './video-screen.module.css';

type videoScreenProps = {
	defaultVideoId: string;
};

const VideoScreen: React.FC<videoScreenProps> = ({ defaultVideoId }) => {
	const url: string = `https://youtube.com/embed/${defaultVideoId}`;
	return (
		<div className={styles['screen-container']}>
			<iframe
				className={styles['screen-video-player']}
				src={url}
				referrerPolicy='no-referrer-when-downgrade'
				allow='autoplay; encrypted-media'
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoScreen;
