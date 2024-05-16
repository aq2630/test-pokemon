export function capitalizeString(input: string): string {
  if (!input) return input;
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function extractPokemonId(url: string): string | null {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? match[1] : null;
}

export function pokeImagegenerator(id: string | null) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
