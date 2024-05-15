import React from "react";
import "./pokemonDetails.css";
import { capitalizeString } from "app/data/helpers";
import {
  PokemonDataKeys,
  PokemonType,
  PokemonDetailsProps,
} from "./pokemonDetailsTypes";
import { POKEMON_DETAILS_VALUES } from "./pokemonConstants";

const renderPokemonTypes = (types: PokemonType[]) => {
  return types.map((typeData) => (
    <div className="type_name" key={typeData.slot}>
      <p>{typeData.type.name}</p>
    </div>
  ));
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data }) => {
  if (!data) return <div>No data available</div>;

  return (
    <div className="details_wrapper">
      <div className="details_box">
        <h3 role="title" className="title">
          {capitalizeString(data.name)}
        </h3>
        <img
          role="pokemon_image"
          src={data.sprites.front_default}
          alt={data.name}
        />

        {(Object.keys(POKEMON_DETAILS_VALUES) as PokemonDataKeys[]).map(
          (key, index) => {
            if (key === "types") {
              return (
                <div className="list_box types_box" key={`${key}-${index}`}>
                  <h3>{POKEMON_DETAILS_VALUES[key]}</h3>
                  <div>{renderPokemonTypes(data.types)}</div>
                </div>
              );
            }
            return (
              <div className="list_box" key={`${key}-${index}`}>
                <h3>{POKEMON_DETAILS_VALUES[key]}</h3>
                <p>{data[key]}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
