
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import BottomMenu from "../components/BottomMenu";
import styles from "../styles/PokemonCard.module.css";
import { kantoBasePokemons } from "../data/kantoBasePokemons";


 
function getRandomPokemons() {
  const shuffled = [...kantoBasePokemons].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}
export default function Home() {
  
  const [pokemons, setPokemons] = useState([]);
  const [flipped, setFlipped] = useState([false, false, false]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ashMessage, setAshMessage] = useState("Ash: Vamos começar!");

  
  useEffect(() => {
    if (pokemons.length === 0) {
      setPokemons(getRandomPokemons());
    }
  }, []);

  
  const handleEvolveClick = () => {
    if (selectedIndex === null) {
      setAshMessage("Ash: Selecione um Pokémon para evoluir!");
      return;
    }
    const current = pokemons[selectedIndex];
    if (!current.evolution) {
      setAshMessage("Ash: Esse Pokémon não pode mais evoluir!");
      return;
    }
    const evolved = current.evolution;
    const updated = [...pokemons];
    updated[selectedIndex] = { ...evolved };
    setPokemons(updated);
    setAshMessage(`Ash: Uau! ${current.name} evoluiu para ${evolved.name}!`);
  };

  
  const handlePokeballClick = (num) => {
    const newFlipped = [false, false, false];
    newFlipped[num - 1] = true;
    setFlipped(newFlipped);
    setSelectedIndex(num - 1);
    setAshMessage(`Ash: ${pokemons[num - 1].name}, eu escolho você!`);
  };

  
  const handleDeckClick = () => {
    setFlipped([true, true, true]);
    setSelectedIndex(null);
    setAshMessage("Ash: Aqui está o seu PokéDeck completo!");
  };


  const handleNextDeck = () => {
    setPokemons(getRandomPokemons());
    setFlipped([false, false, false]);
    setSelectedIndex(null);
    setAshMessage("Ash: Novo deck sorteado!");
  };

  return (
    <>
      <div className={styles.gridContainer} style={{ paddingBottom: "150px" }}>
        {pokemons.length === 0 ? (
          <div style={{textAlign: 'center', width: '100%'}}>Carregando pokémons...</div>
        ) : (
          pokemons.map((pokemon, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                padding: "5px",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
                border: selectedIndex === index ? "3px solid #2196f3" : "2px solid transparent"
              }}
            >
              <PokemonCard
                {...pokemon}
                flipped={flipped[index]}
                evolved={index === selectedIndex && ashMessage.includes('evoluiu para')}
              />
            </div>
          ))
        )}
      </div>

      <BottomMenu
        onEvolveClick={handleEvolveClick}
        onPokeballClick={handlePokeballClick}
        onDeckClick={handleDeckClick}
        onNextDeck={handleNextDeck}
        ashMessage={ashMessage}
      />
    </>
  );
}
