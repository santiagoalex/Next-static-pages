import { getCharacter } from "@/app/lib/character";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Character() {
  const { router } = Router;
  const [character, setCharacter] = useState();

  useEffect(async () => {
    if (!router?.query?.id) {
      return;
    }

    setCharacter(await (await getCharacter(router?.query?.id)).json());

    console.log("RRRRRRAAAA", character);
  }, [router]);

  return (
    <div>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
}
