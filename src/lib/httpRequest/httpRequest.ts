import axios from 'axios';
import { API_HOST, API_KEY, BASE_URL } from '../../utils/constants';

const http = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST,
	},
});

export class HttpRequest {
	static get = async () => {
		const response = await http.get('/home');
		console.log(response.data);
	};
}
