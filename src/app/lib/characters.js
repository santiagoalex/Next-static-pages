export async function getCharacters() {
  try {
    const characters = await fetch("https://rickandmortyapi.com/api/character");
    return characters;
  } catch (error) {
    console.error(error);
  }
}
