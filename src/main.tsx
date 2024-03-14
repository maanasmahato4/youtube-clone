import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { VideoContextProvider } from './context/context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<VideoContextProvider>
				<App />
			</VideoContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
