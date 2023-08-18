async function favoritePokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/494');
    const statusCode = response.status;
    if (!response.ok) {
      throw new Error(statusCode);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error(`Fetch failed with status code ${error}`);
  }
}

favoritePokemon();
