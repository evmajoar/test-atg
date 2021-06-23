import { api } from './api-config';

export const getData = async (endpoint: string): Promise<any> => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    console.warn(error);
  }
};
