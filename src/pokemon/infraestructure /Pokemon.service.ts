import { apiService } from '@/shared/infraestructure/services/Api.service';
import { Pokemon } from '@/pokemon/domain/Pokemon.model';

const API_ENDPOINT = '/pokemon';
export const pokemonService = {
  getAll: async (): Promise<Pokemon[]> => {
    const data = await apiService.get(API_ENDPOINT);

    return data.results as Pokemon[];
  },
};
