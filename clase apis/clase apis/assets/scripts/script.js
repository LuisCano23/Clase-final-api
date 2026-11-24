const contenedor = document.getElementById("pokemones")

async function obtenerPokemon(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const datos = await res.json();
    const pokemones = datos.results

    console.log(pokemones)
    console.log(pokemones.sprites.front_default)

    contenedor.replaceChildren()

    pokemones.forEach((pokemon) => {
        const tarjeta = document.createElement("article")

        const nombre = document.createElement("h2")
        const sprite = document.createElement("img")
        nombre.textContent = pokemon.name
        sprite.src = pokemon.sprites.front_default

        tarjeta.append(nombre)
        contenedor.append(tarjeta)
    });
}

obtenerPokemon()