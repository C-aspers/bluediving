import React from "react";
import style from "./Hero.module.scss";
import fondMarin from "../../assets/surface2.jpg";

const header = () => {
  return (
    <article>
      <img
        className={style.container}
        src={fondMarin}
        alt="plongée sous marine"
      ></img>
      <div className={style.title}>
        <h5>plongée - apnée - snorkeling</h5>
        <h1>Centre de plongée à Marseille</h1>
        <h2>Plongez au coeur du Parc National des Calanques</h2>
      </div>
    </article>
  );
};

export default header;
