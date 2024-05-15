import { render, screen } from "@testing-library/react";
import PokemonDetails from "components/PokemonDetails";
import { Provider } from "react-redux";
import { store } from "app/store";

describe("PokemonDetail component", () => {
  it("should renders Pokemon Details", () => {
    const data = {
      name: "Bulbasaur",
      sprites: { front_default: "bulbasaur.jpg" },
      types: [{ slot: 1, type: { name: "electric", url: "electric.url" } }],
      height: 4,
      weight: 60,
    };
    render(<PokemonDetails data={data} />);

    const nameElement = screen.getByRole("title");
    const imageElement = screen.getByRole("pokemon_image");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent("Bulbasaur");
    expect(imageElement).toHaveAttribute(
      "src",
      `${data.sprites.front_default}`
    );
  });
});
