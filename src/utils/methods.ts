import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "config";

export const baseURL = `${config.service.BASE_URL}`;

const axiosRequests = axios.create({
  baseURL,
});

const handleResponse = (response: AxiosResponse) => {
  return response.data;
}

const handleError = async (error: Error) => {
  if (axios.isAxiosError(error) && !!error.response && !!error.config) {
    const { status } = error.response;
    if (status === 401) {
      window.location.href = "/login";
    } else {
      console.info("error", error);
      throw new Error(error.response.data.message ?? error.message);
    }
  }
};

axiosRequests.interceptors.response.use(handleResponse, handleError);

const getRequest = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  return await axiosRequests.get(url, config);
};

const postRequest = async (url: string, payload?: object, config?: AxiosRequestConfig) => {
  return await axiosRequests.post(url, payload, config);
};

const putRequest = async (url: string, payload: object) => {
  return await axiosRequests.put(url, payload);
};

const patchRequest = async (url: string, payload?: object) => {
  return await axiosRequests.patch(url, payload);
};

const deleteRequest = async (url: string) => {
  return await axiosRequests.delete(url);
};

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
