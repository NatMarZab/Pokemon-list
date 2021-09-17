import React from "react";
import "../stylesheet/pokemon.scss";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.item.types.map((itemType, index) => {
      return (
        <li key={index} className="type">
          {itemType}
        </li>
      );
    });
  };
  return (
    <article className="article">
      <img src={props.item.url} alt="pokemon" className="pokeImage" />
      <h3 className="poketitle">{props.item.name}</h3>
      <ul className="types">{renderTypes()}</ul>
    </article>
  );
};
export default Pokemon;
