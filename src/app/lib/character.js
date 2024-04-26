export async function getCharacter(characterId) {
  try {
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    return characters;
  } catch (error) {
    console.error(error);
  }
}
