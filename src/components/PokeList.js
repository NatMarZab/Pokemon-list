import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheet/pokeList.scss";

const PokeList = (props) => {
  const listItem = props.list.map((item) => {
    return (
      <li key={item.id} className="pokeListItem">
        <Pokemon item={item} />
      </li>
    );
  });
  return <ul className="pokeList prueba">{listItem}</ul>;
};

export default PokeList;
