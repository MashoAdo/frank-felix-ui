import axios from "axios";
import { CONFIGS } from "../configs/constants";

export const API_INSTANCE = (baseUrl: string) => {
	const axiosInstance = axios.create({
		baseURL: baseUrl,
		headers: {
			"Content-Type": "application/json",
		},
	});

	axiosInstance.interceptors.request.use(
		(config) => {
			//     const accessToken = localStorage.getItem("accessToken");
			// if (accessToken) {
			//   config.headers.authorization = `Bearer ${accessToken}`
			// }
			return config;
		},
		(error) => {
			console.log(error);
			return Promise.reject(error);
		}
	);

	axiosInstance.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response?.status === 401) {
				//   showToaster(
				//     "error",
				//     "sorry your session has expired. Please login to continue",
				//   )

				//   store.dispatch(handleRemoveAccessToken())
				//   store.dispatch(handLogOutUser())

				window.location.href = "/";
			}
		}
	);

	return axiosInstance;
};

export const API = API_INSTANCE(CONFIGS.API_URL);
