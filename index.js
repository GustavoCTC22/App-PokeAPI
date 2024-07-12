document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector(".pokemon-info");

  const apiUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // Hacer una solicitud GET a la API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      showPokemon(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      appDiv.innerHTML = "Error al cargar los datos";
    });
});

function showPokemon(pokemon) {
  const pokeContainer = document.querySelector("#pokemon-info");
  const templatePokemon = `
  <div>
      <div>
        <h2>${pokemon.name}</h2>
        <p>#001</p>
      </div>
      <img src="${pokemon.sprites.other["official-artwork"].front_default}" />
      <div>
        <div>Poison</div>
        <div>Grass</div>
      </div>
      <div>
        <div>
          <div>6.9kg</div>
          <p>${pokemon.weight}</p>
        </div>
        <div>
          <div>0.7m</div>
          <p>Height</p>
        </div>
      </div>
    </div>
  `;

  pokeContainer.innerHTML = templatePokemon;
}
