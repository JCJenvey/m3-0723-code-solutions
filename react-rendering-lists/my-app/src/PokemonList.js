export default function PokemonList({ pokedex }) {
  const pokemon = pokedex.map((entry) => (
    <li key={entry.number}>{entry.name}</li>
  ));
  return (
    <>
      <ul>{pokemon}</ul>
    </>
  );
}
