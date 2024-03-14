import SearchBar from './components/search/search';
import SideBar from './components/sidebar/sidebar';
import VideoScreen from './components/video-screen/video-screen';
import styles from './app.module.css';

function App() {
	return (
		<main className={styles['main-layout']}>
			<section>
				<SearchBar />
			</section>
			<section>
				<VideoScreen />
			</section>
			<section>
				<SideBar />
			</section>
		</main>
	);
}

export default App;
