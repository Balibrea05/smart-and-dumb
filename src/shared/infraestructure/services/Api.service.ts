import { RequestClient } from '@/shared/infraestructure/clients/Request.client';

const API_DEFAULT_ENDPOINT = process.env.API_URL || 'https://pokeapi.co/api/v2';
export const apiService = {
  get: (url: string) =>
    RequestClient(API_DEFAULT_ENDPOINT + url, { method: 'GET' }),
};
