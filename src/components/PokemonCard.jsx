import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/PokemonCard.module.css';


const PokemonCard = ({ name, img, type, hp, attacks, flipped, evolved }) => {
  // O flip agora é controlado externamente
  const [isAnimating, setIsAnimating] = useState(false);

  // Animação de entrada e evolução
  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.3 } },
    evolved: evolved
      ? {
          scale: [1, 1.06, 0.98, 1],
          rotateY: [0, 720], // 2 voltas
          transition: {
            duration: 0.8,
            times: [0, 0.3, 0.7, 1],
            ease: [0.42, 0, 0.58, 1] // easeInOutSine para suavidade
          }
        }
      : {}
  };

  // Hover animado
  const hover = { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)" };

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




  return (
    <motion.div
      className={styles.cardContainer}
      style={{
        '--type-primary': style.primary,
        '--type-secondary': style.secondary
      }}
      initial="initial"
      animate={evolved ? ["animate", "evolved"] : "animate"}
      exit="exit"
      variants={cardVariants}
      whileHover={hover}
    >
      <motion.div
        className={styles.card}
        animate={flipped ? { rotateY: 180 } : { rotateY: 0 }}
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
    </motion.div>
  );
};

export default PokemonCard;