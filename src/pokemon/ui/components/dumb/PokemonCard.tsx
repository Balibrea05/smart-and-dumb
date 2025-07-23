import { Pokemon } from '@/pokemon/domain/Pokemon.model';

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
};
