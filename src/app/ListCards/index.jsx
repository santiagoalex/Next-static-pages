import React from "react";
import { getCharacters } from "../lib/characters";
import styles from "./listCards.module.css";

import Card from "../Components/Cards";
import Link from "next/link";

const ListCards = async () => {
  const characters = await (await getCharacters()).json();

  return (
    <div className={styles.listCards}>
      {characters.results.map((character) => {
        return (
          <Link key={character.id} href={`/character/${character.id}`}>
            <Card {...character} />
          </Link>
        );
      })}
    </div>
  );
};

export default ListCards;
