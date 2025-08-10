import PokemonCard from '../components/PokemonCard';
import styles from '../styles/PokemonCard.module.css';

export default function Home() {
  const pokemons = [
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
      name: "Venusaur",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      type: "grass",
      hp: 190,
      attacks: [
        { name: "Solar Beam", cost: ["grass", "grass"], damage: "110" },
        { name: "Vine Whip", cost: ["grass"], damage: "60" }
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

  return (
    <div className={styles.gridContainer}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} {...pokemon} />
      ))}
    </div>
  );
}