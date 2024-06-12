const env = import.meta.env


export const CONFIGS = {
	API_URL: `${env.VITE_API_URL}/${env.VITE_API_VERSION}`,
};