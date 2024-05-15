import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PokemonList from "components/PokemonList";
import { Provider } from "react-redux";
import { store } from "app/store";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

type data =
  | {
      name: string;
      url: string;
    }[]
  | undefined;

describe("PokemonList component", () => {
  const renderComponent = (data: data = undefined) => {
    render(
      <Provider store={store}>
        <Router>
          <PokemonList data={data} />
        </Router>
      </Provider>
    );
  };

  it("should render no data when the data is not available", () => {
    renderComponent();

    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });

  it("should render list of Pokemon", async () => {
    const data = [
      { name: "Bulbasaur", url: "bulbasaur.url" },
      { name: "Charmander", url: "charmander.url" },
    ];

    renderComponent(data);

    const listItems = screen.getAllByRole(`listitem`);

    data.forEach(async (pokemon, index) => {
      const pokemonHeading = screen.getByRole("heading", {
        name: pokemon.name,
      });
      expect(pokemonHeading).toBeInTheDocument();
      expect(listItems[index]).toBeInTheDocument();

      const user = userEvent.setup();
      await user.click(listItems[index]);
    });
  });
});
