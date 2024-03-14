import styles from './sidebar.module.css';

export default function SideBar() {
	return (
		<div className={styles['sidebar-container']}>
			<div className={styles['card']}></div>
			<div className={styles['card']}></div>
		</div>
	);
}
