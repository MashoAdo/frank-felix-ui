import { API } from "./api";


  export async function handleGetRequest  (url: string, params: any)  {
    return await API.get(url, { params });
  };

  export async function handlePostRequest (url: string, data: any)  {
    return await API.post(url, data);
  };

  export function handleApiError  (error: any)  {
    console.log(error);
  };
