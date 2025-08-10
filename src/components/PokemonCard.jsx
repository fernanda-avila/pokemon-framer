import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/PokemonCard.module.css';

const PokemonCard = ({ name, img, type, hp, attacks }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const typeStyles = {
    fire: {
      primary: '#F08030',
      secondary: '#F8D030',
      bg: 'radial-gradient(circle at top left, #F08030, #E3730E 80%)',
      border: 'linear-gradient(135deg, #F8D030, #F08030)'
    },
    water: {
      primary: '#6890F0',
      secondary: '#98D8D8',
      bg: 'radial-gradient(circle at top left, #6890F0, #386CEB 80%)',
      border: 'linear-gradient(135deg, #98D8D8, #6890F0)'
    },
    electric: {
      primary: '#F8D030',
      secondary: '#F8F878',
      bg: 'radial-gradient(circle at top left, #F8D030, #E0C028 80%)',
      border: 'linear-gradient(135deg, #F8F878, #F8D030)'
    },
    grass: {
      primary: '#78C850',
      secondary: '#A8E080',
      bg: 'radial-gradient(circle at top left, #78C850, #5CA935 80%)',
      border: 'linear-gradient(135deg, #A8E080, #78C850)'
    }
  };

  const style = typeStyles[type] || typeStyles.fire;

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div 
      className={styles.cardContainer}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
      style={{ 
        '--type-primary': style.primary,
        '--type-secondary': style.secondary 
      }}
    >
      <motion.div
        className={styles.card}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Lado de trás da carta */}
        <div className={styles.cardBack}>
          <div className={styles.pokeball}>
            <div className={styles.pokeballCenter} />
          </div>
          <div className={styles.cardBackPattern} />
        </div>

        {/* Lado da frente da carta */}
        <div 
          className={styles.cardFront}
          style={{ background: style.bg }}
        >
          <div className={styles.cardHp}>
            <span>{hp} HP</span>
          </div>

          <div className={styles.pokemonImageContainer}>
            <img 
              src={img} 
              alt={name} 
              className={styles.pokemonImage}
              draggable="false"
            />
            <div className={`${styles.pokemonEffect} ${type}`} />
          </div>

          <div className={styles.cardHeader}>
            <h3 className={styles.pokemonName}>{name}</h3>
            <div className={`${styles.pokemonType} ${type}`}>
              <span>{type}</span>
            </div>
          </div>

          <div className={styles.cardAttacks}>
            {attacks.map((attack, i) => (
              <div key={i} className={styles.attack}>
                <span className={styles.attackCost}>
                  {attack.cost?.map((cost, j) => (
                    <span key={j} className={`${styles.cost} ${cost}`} />
                  ))}
                </span>
                <span className={styles.attackName}>{attack.name}</span>
                <span className={styles.attackDamage}>{attack.damage}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PokemonCard;