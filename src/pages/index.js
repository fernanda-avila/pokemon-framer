import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import BottomMenu from "../components/BottomMenu";
import styles from "../styles/PokemonCard.module.css";

export default function Home() {
  // Pokémons iniciais da "coleção geral"
  const initialPokemons = [
    {
      name: "Charizard",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      type: "fire",
      hp: 180,
      attacks: [
        { name: "Flame Thrower", cost: ["fire", "fire"], damage: "90" },
        { name: "Fire Blast", cost: ["fire", "fire", "fire"], damage: "120" }
      ]
    },
    {
      name: "Blastoise",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      type: "water",
      hp: 200,
      attacks: [
        { name: "Hydro Pump", cost: ["water", "water"], damage: "100" },
        { name: "Skull Bash", cost: ["water"], damage: "80" }
      ]
    },
    {
      name: "Pikachu",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "electric",
      hp: 120,
      attacks: [
        { name: "Thunderbolt", cost: ["electric", "electric"], damage: "80" },
        { name: "Quick Attack", cost: [], damage: "40" }
      ]
    }
  ];

  // Pokémons do Ash ligados às pokébolas
  const ashPokemons = [
    {
      name: "Pikachu",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "electric",
      hp: 120,
      attacks: [
        { name: "Thunderbolt", cost: ["electric", "electric"], damage: "80" },
        { name: "Quick Attack", cost: [], damage: "40" }
      ]
    },
    {
      name: "Gengar",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      type: "ghost",
      hp: 170,
      attacks: [
        { name: "Shadow Ball", cost: ["ghost", "ghost"], damage: "90" },
        { name: "Dark Pulse", cost: ["dark"], damage: "80" }
      ]
    },
    {
      name: "Dragonite",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      type: "dragon",
      hp: 200,
      attacks: [
        { name: "Dragon Claw", cost: ["dragon", "dragon"], damage: "100" },
        { name: "Hurricane", cost: ["flying"], damage: "110" }
      ]
    },
    // Evolução do Pikachu: Raichu
    {
      name: "Raichu",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      type: "electric",
      hp: 160,
      attacks: [
        { name: "Volt Tackle", cost: ["electric", "electric", "electric"], damage: "120" },
        { name: "Thunder", cost: ["electric", "electric"], damage: "100" }
      ]
    },
    // Evolução do Gengar: Mega Gengar
    {
      name: "Mega Gengar",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094_f2.png",
      type: "ghost",
      hp: 220,
      attacks: [
        { name: "Hex", cost: ["ghost", "ghost", "dark"], damage: "130" },
        { name: "Nightmare", cost: ["ghost", "dark"], damage: "110" }
      ]
    },
    // Evolução do Dragonite: Mega Dragonite (fanart)
    {
      name: "Mega Dragonite",
      img: "https://static.wikia.nocookie.net/pokepediabr/images/2/2d/Mega_Dragonite.png", // fanart
      type: "dragon",
      hp: 280,
      attacks: [
        { name: "Hyper Beam", cost: ["dragon", "dragon", "colorless"], damage: "200" },
        { name: "Sky Impact", cost: ["flying", "dragon"], damage: "150" }
      ]
    }
  ];

  // Estado guarda pokémons mostrados (inicialmente todos)
  const [pokemons, setPokemons] = useState(initialPokemons);
  // Índice do Pokémon selecionado na lista geral ou null
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Estado pra mensagem do Ash na interface
  const [ashMessage, setAshMessage] = useState("");

  // Quando clicar no botão Evoluir
  const handleEvolveClick = () => {
    if (selectedIndex === null) {
      setAshMessage("Ash: Você precisa selecionar um Pokémon para evoluir!");
      return;
    }

    const updated = [...pokemons];
    const selected = updated[selectedIndex];

    // Evoluções possíveis
    let evolved = null;
    if (selected.name === "Pikachu") {
      evolved = ashPokemons.find(p => p.name === "Raichu");
    } else if (selected.name === "Dragonite") {
      evolved = ashPokemons.find(p => p.name === "Mega Dragonite");
    } else if (selected.name === "Gengar") {
      evolved = ashPokemons.find(p => p.name === "Mega Gengar");
    }

    if (evolved) {
      updated[selectedIndex] = { ...evolved };
      setPokemons(updated);
      setAshMessage(`Ash: Uau! ${selected.name} evoluiu para ${evolved.name}!`);
    } else {
      // fallback: evolução genérica
      updated[selectedIndex] = {
        ...selected,
        name: selected.name + " Evo",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
      };
      setPokemons(updated);
      setAshMessage(`Ash: Uau! ${updated[selectedIndex].name} evoluiu com sucesso!`);
    }
    setSelectedIndex(null);
  };

  // Quando clicar numa pokébola, mostrar o Pokémon do Ash correspondente e mensagem personalizada
  const handlePokeballClick = (num) => {
    const chosenPokemon = ashPokemons[num - 1]; // como você usa números 1,2,3
    setPokemons([chosenPokemon]);
    setSelectedIndex(0); // só tem um Pokémon no array agora
    setAshMessage(`Ash: ${chosenPokemon.name}, eu escolho você!`);
  };

  // NOVO: Quando clicar no botão PokéDeck, volta para a lista inicial completa
  const handleDeckClick = () => {
    setPokemons(initialPokemons);
    setSelectedIndex(null);
    setAshMessage("Ash: Aqui está o seu PokéDeck completo!");
  };

  return (
    <>
      <div className={styles.gridContainer} style={{ paddingBottom: "150px" }}>
        {pokemons.map((pokemon, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              borderRadius: "12px",
              padding: "5px",
              cursor: "pointer",
              transition: "border-color 0.3s ease"
            }}
          >
            <PokemonCard {...pokemon} />
          </div>
        ))}
      </div>

      <BottomMenu
        onEvolveClick={handleEvolveClick}
        onPokeballClick={handlePokeballClick}
        onDeckClick={handleDeckClick}
        ashMessage={ashMessage}
      />
    </>
  );
}
