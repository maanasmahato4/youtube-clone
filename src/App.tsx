import Home from './pages/home/home';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/video/:id' element={<Home />} />
		</Routes>
	);
}

export default App;
