


import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../styles/BottomMenu.module.css";


export default function BottomMenu({ ashMessage, onEvolveClick, onDeckClick, onNextDeck, onPokeballClick }) {

  return (
    <div className={styles.menuContainer}>
      
      <div className={styles.ashContainer}>
        <Image
          src="/ash.png"
          alt="Ash Ketchum"
          width={100}
          height={100}
          className={styles.ashImage}
        />

        
        <AnimatePresence>
          {ashMessage && (
            <motion.div
              key="ashMessage"
              className={styles.ashMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {ashMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      
      <div className={styles.buttonsContainer}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.evolveButton}
          onClick={onEvolveClick}
        >
          Evoluir
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.deckButton}
          onClick={onDeckClick}
        >
          PokéDeck
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.deckButton}
          onClick={onNextDeck}
        >
          Novo Deck
        </motion.button>
      </div>


      <div className={styles.pokeballsContainer}>
        {[1, 2, 3].map((num) => (
          <motion.img
            key={num}
            src="/pokeball.png"
            alt={`Pokébola ${num}`}
            className={styles.pokeball}
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: num * 0.2
            }}
            onClick={() => onPokeballClick(num)}
          />
        ))}
      </div>
    </div>
  );
}