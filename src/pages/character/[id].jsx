import { getCharacter } from "@/app/lib/character";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Character() {
  const router = useRouter();
  const { query } = router;
  const [character, setCharacter] = useState();

  useEffect(() => {
    getUsers();
  }, [query]);

  const getUsers = async () => {
    if (!router?.query?.id) {
      return;
    }
    setCharacter(await (await getCharacter(router?.query?.id)).json());
  };

  return (
    <div>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
}
