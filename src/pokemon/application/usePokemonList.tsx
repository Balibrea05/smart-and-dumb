import { Pokemon } from '@/pokemon/domain/Pokemon.model';
import { useEffect, useState } from 'react';
import { pokemonService } from '@/pokemon/infraestructure /Pokemon.service';

export const usePokemonList: () => { pokemon: Pokemon[] } = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const getPokemon: () => Promise<void> = async () => {
    setPokemon(await pokemonService.getAll());
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return {
    pokemon,
  };
};
