import { getCharacter } from "@/app/lib/character";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Page({ staticCharacters }) {
  const router = useRouter();
  const { query } = router;
  const [character, setCharacter] = useState();

  useEffect(() => {
    console.log("caracteres", staticCharacters);
    getUsers();
  }, [query]);

  const getUsers = async () => {
    if (!router?.query?.id) {
      return;
    }
    setCharacter(await (await getCharacter(router?.query?.id)).json());
  };

  return staticCharacters.map((char) => {
    return (
      <div key={char?.name}>
        <img src={char?.image} alt={char?.name} />
      </div>
    );
  });
}

export const getStaticPaths = async () => {
  let paths = [];
  for (let i = 0; i < 20; i++) {
    paths.push({ params: { id: `${i}` } });
  }

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  let staticCharacters = [];

  // Función para hacer el fetch y agregar el resultado al array
  async function fetchData() {
    for (let i = 1; i < 21; i++) {
      try {
        const response = await getCharacter(i);
        const data = await response.json();
        staticCharacters.push(data); // Agregar el resultado al array
        console.log("Resultado agregado:", data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
  }

  await fetchData();
  return { props: { staticCharacters } };
};
