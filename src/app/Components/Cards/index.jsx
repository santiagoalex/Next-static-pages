import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
const Card = ({ image, name, gender, species }) => {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <h3 className={styles.cardTitle}> {name}</h3>
      <p className={styles.cardGeneralInfo}>
        <strong>Genero : </strong> {gender}
      </p>
      <p className={styles.cardGeneralInfo}>
        <strong>Especie: </strong> {species}
      </p>
      <Link className={styles.link} href="/">
        Regresar a la home
      </Link>
    </article>
  );
};

export default Card;
