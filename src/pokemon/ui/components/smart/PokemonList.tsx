'use client';

import { Pokemon } from '@/pokemon/domain/Pokemon.model';
import { PokemonCard } from '@/pokemon/ui/components/dumb/PokemonCard';
import { usePokemonList } from '@/pokemon/application/usePokemonList';

export const PokemonList = () => {
  const { pokemon } = usePokemonList();
  return (
    <>
      {pokemon.map((pokemon: Pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>;
      })}
    </>
  );
};
