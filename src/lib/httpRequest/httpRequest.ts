import axios, { AxiosResponse } from 'axios';
import { API_HOST, API_KEY, BASE_URL } from '../../utils/constants';

const http = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST,
	},
});

export class HttpRequest {
	static searchVideos = async (search: string): Promise<AxiosResponse> => {
		const response = await http.get(`/search`, { params: { q: search } });
		return response;
	};

	static getVideoWithId = async (id: string): Promise<AxiosResponse> => {
		const response = await http.get(`/embed/${id}`);
		return response;
	};
}
