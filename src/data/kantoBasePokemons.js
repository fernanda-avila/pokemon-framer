
export const kantoBasePokemons = [
  {
    name: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    type: "grass",
    hp: 100,
    attacks: [
      { name: "Vine Whip", cost: ["grass"], damage: "45" },
      { name: "Tackle", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Ivysaur",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      type: "grass",
      hp: 140,
      attacks: [
        { name: "Razor Leaf", cost: ["grass", "grass"], damage: "70" },
        { name: "Seed Bomb", cost: ["grass"], damage: "50" }
      ],
      evolution: {
        name: "Venusaur",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        type: "grass",
        hp: 200,
        attacks: [
          { name: "Solar Beam", cost: ["grass", "grass", "grass"], damage: "160" },
          { name: "Petal Blizzard", cost: ["grass", "grass"], damage: "120" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Charmander",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    type: "fire",
    hp: 100,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Scratch", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Charmeleon",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      type: "fire",
      hp: 150,
      attacks: [
        { name: "Flamethrower", cost: ["fire", "fire"], damage: "90" },
        { name: "Fire Fang", cost: ["fire"], damage: "60" }
      ],
      evolution: {
        name: "Charizard",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        type: "fire",
        hp: 200,
        attacks: [
          { name: "Fire Spin", cost: ["fire", "fire", "fire"], damage: "150" },
          { name: "Flare Blitz", cost: ["fire", "fire"], damage: "120" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    type: "water",
    hp: 100,
    attacks: [
      { name: "Water Gun", cost: ["water"], damage: "30" },
      { name: "Tackle", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Wartortle",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      type: "water",
      hp: 150,
      attacks: [
        { name: "Bubble", cost: ["water", "water"], damage: "40" },
        { name: "Bite", cost: ["water"], damage: "20" }
      ],
      evolution: {
        name: "Blastoise",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        type: "water",
        hp: 210,
        attacks: [
          { name: "Hydro Pump", cost: ["water", "water", "water"], damage: "160" },
          { name: "Skull Bash", cost: ["water", "water"], damage: "130" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Caterpie",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "String Shot", cost: [], damage: "10" },
      { name: "Bug Bite", cost: ["bug"], damage: "20" }
    ],
    evolution: {
      name: "Metapod",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      type: "bug",
      hp: 100,
      attacks: [
        { name: "Harden", cost: [], damage: "0" },
        { name: "Tackle", cost: [], damage: "20" }
      ],
      evolution: {
        name: "Butterfree",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        type: "bug",
        hp: 140,
        attacks: [
          { name: "Gust", cost: ["bug", "bug"], damage: "50" },
          { name: "Psybeam", cost: ["bug"], damage: "30" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Weedle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "Poison Sting", cost: ["bug"], damage: "15" },
      { name: "String Shot", cost: [], damage: "10" }
    ],
    evolution: {
      name: "Kakuna",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      type: "bug",
      hp: 100,
      attacks: [
        { name: "Harden", cost: [], damage: "0" },
        { name: "Poison Sting", cost: ["bug"], damage: "15" }
      ],
      evolution: {
        name: "Beedrill",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        type: "bug",
        hp: 150,
        attacks: [
          { name: "Twineedle", cost: ["bug", "bug"], damage: "60" },
          { name: "Pin Missile", cost: ["bug"], damage: "30" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Pidgey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Gust", cost: ["flying"], damage: "20" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Pidgeotto",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
      type: "flying",
      hp: 130,
      attacks: [
        { name: "Wing Attack", cost: ["flying", "flying"], damage: "50" },
        { name: "Sand Attack", cost: [], damage: "0" }
      ],
      evolution: {
        name: "Pidgeot",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        type: "flying",
        hp: 180,
        attacks: [
          { name: "Hurricane", cost: ["flying", "flying", "flying"], damage: "120" },
          { name: "Aerial Ace", cost: ["flying", "flying"], damage: "80" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Rattata",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    type: "normal",
    hp: 80,
    attacks: [
      { name: "Quick Attack", cost: [], damage: "15" },
      { name: "Bite", cost: ["normal"], damage: "20" }
    ],
    evolution: {
      name: "Raticate",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
      type: "normal",
      hp: 120,
      attacks: [
        { name: "Hyper Fang", cost: ["normal", "normal"], damage: "60" },
        { name: "Super Fang", cost: ["normal"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Spearow",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["flying"], damage: "20" },
      { name: "Leer", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Fearow",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
      type: "flying",
      hp: 140,
      attacks: [
        { name: "Drill Peck", cost: ["flying", "flying"], damage: "70" },
        { name: "Fury Attack", cost: ["flying"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Ekans",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    type: "poison",
    hp: 90,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Wrap", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Arbok",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Poison Fang", cost: ["poison", "poison"], damage: "70" },
        { name: "Bite", cost: ["poison"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Pikachu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    type: "electric",
    hp: 100,
    attacks: [
      { name: "Thunder Shock", cost: ["electric"], damage: "30" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Raichu",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      type: "electric",
      hp: 150,
      attacks: [
        { name: "Thunderbolt", cost: ["electric", "electric"], damage: "90" },
        { name: "Spark", cost: ["electric"], damage: "50" }
      ],
      evolution: null
    }
  },
    {
    name: "Sandshrew",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    type: "ground",
    hp: 100,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Sand Attack", cost: ["ground"], damage: "0" }
    ],
    evolution: {
      name: "Sandslash",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
      type: "ground",
      hp: 150,
      attacks: [
        { name: "Slash", cost: ["ground", "ground"], damage: "70" },
        { name: "Swift", cost: ["ground"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Nidoran♀",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Scratch", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Nidorina",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Double Kick", cost: ["poison", "poison"], damage: "60" },
        { name: "Bite", cost: ["poison"], damage: "30" }
      ],
      evolution: {
        name: "Nidoqueen",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
        type: "poison",
        hp: 190,
        attacks: [
          { name: "Earth Power", cost: ["poison", "poison", "poison"], damage: "130" },
          { name: "Body Slam", cost: ["poison", "poison"], damage: "90" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Nidoran♂",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Horn Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Nidorino",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Double Kick", cost: ["poison", "poison"], damage: "60" },
        { name: "Fury Attack", cost: ["poison"], damage: "30" }
      ],
      evolution: {
        name: "Nidoking",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
        type: "poison",
        hp: 190,
        attacks: [
          { name: "Megahorn", cost: ["poison", "poison", "poison"], damage: "140" },
          { name: "Earthquake", cost: ["poison", "poison"], damage: "100" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Clefairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    type: "fairy",
    hp: 100,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sing", cost: ["fairy"], damage: "0" }
    ],
    evolution: {
      name: "Clefable",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
      type: "fairy",
      hp: 160,
      attacks: [
        { name: "Moonblast", cost: ["fairy", "fairy"], damage: "90" },
        { name: "Metronome", cost: ["fairy"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Vulpix",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    type: "fire",
    hp: 90,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Tail Whip", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Ninetales",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      type: "fire",
      hp: 160,
      attacks: [
        { name: "Fire Blast", cost: ["fire", "fire"], damage: "100" },
        { name: "Confuse Ray", cost: ["fire"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Jigglypuff",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    type: "fairy",
    hp: 120,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sing", cost: ["fairy"], damage: "0" }
    ],
    evolution: {
      name: "Wigglytuff",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
      type: "fairy",
      hp: 180,
      attacks: [
        { name: "Double Slap", cost: ["fairy", "fairy"], damage: "60" },
        { name: "Body Slam", cost: ["fairy"], damage: "40" }
      ],
      evolution: null
    }
  },
  {
    name: "Zubat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    type: "poison",
    hp: 80,
    attacks: [
      { name: "Leech Life", cost: ["poison"], damage: "20" },
      { name: "Supersonic", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Golbat",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
      type: "poison",
      hp: 130,
      attacks: [
        { name: "Wing Attack", cost: ["poison", "poison"], damage: "60" },
        { name: "Bite", cost: ["poison"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Oddish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    type: "grass",
    hp: 90,
    attacks: [
      { name: "Absorb", cost: ["grass"], damage: "20" },
      { name: "Sleep Powder", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Gloom",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
      type: "grass",
      hp: 130,
      attacks: [
        { name: "Acid", cost: ["grass", "grass"], damage: "40" },
        { name: "Mega Drain", cost: ["grass"], damage: "30" }
      ],
      evolution: {
        name: "Vileplume",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
        type: "grass",
        hp: 170,
        attacks: [
          { name: "Petal Dance", cost: ["grass", "grass", "grass"], damage: "120" },
          { name: "Solar Beam", cost: ["grass", "grass"], damage: "90" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Paras",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Stun Spore", cost: ["bug"], damage: "0" }
    ],
    evolution: {
      name: "Parasect",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
      type: "bug",
      hp: 130,
      attacks: [
        { name: "Slash", cost: ["bug", "bug"], damage: "70" },
        { name: "Spore", cost: ["bug"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Venonat",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    type: "bug",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Confusion", cost: ["bug"], damage: "20" }
    ],
    evolution: {
      name: "Venomoth",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
      type: "bug",
      hp: 140,
      attacks: [
        { name: "Psychic", cost: ["bug", "bug"], damage: "90" },
        { name: "Poison Powder", cost: ["bug"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Diglett",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    type: "ground",
    hp: 60,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Sand Attack", cost: ["ground"], damage: "0" }
    ],
    evolution: {
      name: "Dugtrio",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
      type: "ground",
      hp: 100,
      attacks: [
        { name: "Earthquake", cost: ["ground", "ground"], damage: "100" },
        { name: "Slash", cost: ["ground"], damage: "40" }
      ],
      evolution: null
    }
  },
  {
    name: "Meowth",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    type: "normal",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Pay Day", cost: ["normal"], damage: "10" }
    ],
    evolution: {
      name: "Persian",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
      type: "normal",
      hp: 140,
      attacks: [
        { name: "Slash", cost: ["normal", "normal"], damage: "70" },
        { name: "Fury Swipes", cost: ["normal"], damage: "30" }
      ],
      evolution: null
    }
  },
  {
    name: "Psyduck",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    type: "water",
    hp: 100,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Confusion", cost: ["water"], damage: "20" }
    ],
    evolution: {
      name: "Golduck",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
      type: "water",
      hp: 160,
      attacks: [
        { name: "Hydro Pump", cost: ["water", "water"], damage: "110" },
        { name: "Psychic", cost: ["water"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Mankey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    type: "fighting",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Low Kick", cost: ["fighting"], damage: "30" }
    ],
    evolution: {
      name: "Primeape",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
      type: "fighting",
      hp: 140,
      attacks: [
        { name: "Karate Chop", cost: ["fighting", "fighting"], damage: "80" },
        { name: "Seismic Toss", cost: ["fighting"], damage: "50" }
      ],
      evolution: null
    }
  },
  {
    name: "Growlithe",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    type: "fire",
    hp: 110,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Bite", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Arcanine",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
      type: "fire",
      hp: 180,
      attacks: [
        { name: "Flamethrower", cost: ["fire", "fire"], damage: "100" },
        { name: "Fire Fang", cost: ["fire"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Poliwag",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Hypnosis", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Poliwhirl",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
      type: "water",
      hp: 130,
      attacks: [
        { name: "Water Gun", cost: ["water", "water"], damage: "60" },
        { name: "Double Slap", cost: ["water"], damage: "30" }
      ],
      evolution: {
        name: "Poliwrath",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
        type: "water",
        hp: 180,
        attacks: [
          { name: "Hydro Pump", cost: ["water", "water", "water"], damage: "150" },
          { name: "Dynamic Punch", cost: ["water", "water"], damage: "100" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Abra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    type: "psychic",
    hp: 60,
    attacks: [
      { name: "Teleport", cost: [], damage: "0" },
      { name: "Psywave", cost: ["psychic"], damage: "10" }
    ],
    evolution: {
      name: "Kadabra",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
      type: "psychic",
      hp: 100,
      attacks: [
        { name: "Confusion", cost: ["psychic", "psychic"], damage: "50" },
        { name: "Psybeam", cost: ["psychic"], damage: "30" }
      ],
      evolution: {
        name: "Alakazam",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
        type: "psychic",
        hp: 150,
        attacks: [
          { name: "Psychic", cost: ["psychic", "psychic", "psychic"], damage: "130" },
          { name: "Recover", cost: ["psychic"], damage: "0" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Machop",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    type: "fighting",
    hp: 120,
    attacks: [
      { name: "Karate Chop", cost: ["fighting"], damage: "30" },
      { name: "Low Kick", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Machoke",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
      type: "fighting",
      hp: 160,
      attacks: [
        { name: "Seismic Toss", cost: ["fighting", "fighting"], damage: "80" },
        { name: "Submission", cost: ["fighting"], damage: "60" }
      ],
      evolution: {
        name: "Machamp",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
        type: "fighting",
        hp: 200,
        attacks: [
          { name: "Dynamic Punch", cost: ["fighting", "fighting", "fighting"], damage: "150" },
          { name: "Cross Chop", cost: ["fighting", "fighting"], damage: "120" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Bellsprout",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    type: "grass",
    hp: 90,
    attacks: [
      { name: "Vine Whip", cost: ["grass"], damage: "30" },
      { name: "Growth", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Weepinbell",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
      type: "grass",
      hp: 130,
      attacks: [
        { name: "Razor Leaf", cost: ["grass", "grass"], damage: "70" },
        { name: "Acid", cost: ["grass"], damage: "30" }
      ],
      evolution: {
        name: "Victreebel",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
        type: "grass",
        hp: 170,
        attacks: [
          { name: "Leaf Blade", cost: ["grass", "grass", "grass"], damage: "140" },
          { name: "Solar Beam", cost: ["grass", "grass"], damage: "100" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Tentacool",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Poison Sting", cost: ["water"], damage: "20" },
      { name: "Supersonic", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Tentacruel",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
      type: "water",
      hp: 140,
      attacks: [
        { name: "Bubble Beam", cost: ["water", "water"], damage: "80" },
        { name: "Acid", cost: ["water"], damage: "40" }
      ],
      evolution: null
    }
  },
  {
    name: "Geodude",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    type: "rock",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Defense Curl", cost: ["rock"], damage: "0" }
    ],
    evolution: {
      name: "Graveler",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
      type: "rock",
      hp: 140,
      attacks: [
        { name: "Rock Throw", cost: ["rock", "rock"], damage: "70" },
        { name: "Rollout", cost: ["rock"], damage: "40" }
      ],
      evolution: {
        name: "Golem",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
        type: "rock",
        hp: 190,
        attacks: [
          { name: "Earthquake", cost: ["rock", "rock", "rock"], damage: "150" },
          { name: "Stone Edge", cost: ["rock", "rock"], damage: "120" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Ponyta",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    type: "fire",
    hp: 100,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Stomp", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Rapidash",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
      type: "fire",
      hp: 150,
      attacks: [
        { name: "Fire Blast", cost: ["fire", "fire"], damage: "100" },
        { name: "Flame Wheel", cost: ["fire"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Slowpoke",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    type: "water",
    hp: 120,
    attacks: [
      { name: "Confusion", cost: ["water"], damage: "20" },
      { name: "Water Gun", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Slowbro",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
      type: "water",
      hp: 170,
      attacks: [
        { name: "Psychic", cost: ["water", "water"], damage: "90" },
        { name: "Withdraw", cost: ["water"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Magnemite",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    type: "electric",
    hp: 80,
    attacks: [
      { name: "Thunder Shock", cost: ["electric"], damage: "20" },
      { name: "Sonic Boom", cost: [], damage: "10" }
    ],
    evolution: {
      name: "Magneton",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
      type: "electric",
      hp: 130,
      attacks: [
        { name: "Thunderbolt", cost: ["electric", "electric"], damage: "80" },
        { name: "Electro Ball", cost: ["electric"], damage: "50" }
      ],
      evolution: null
    }
  },
  {
    name: "Farfetch'd",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    type: "flying",
    hp: 100,
    attacks: [
      { name: "Cut", cost: ["flying"], damage: "30" },
      { name: "Sand Attack", cost: [], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Doduo",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["flying"], damage: "20" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Dodrio",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
      type: "flying",
      hp: 140,
      attacks: [
        { name: "Drill Peck", cost: ["flying", "flying"], damage: "80" },
        { name: "Tri Attack", cost: ["flying"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Seel",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    type: "water",
    hp: 110,
    attacks: [
      { name: "Headbutt", cost: ["water"], damage: "30" },
      { name: "Growl", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Dewgong",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
      type: "water",
      hp: 160,
      attacks: [
        { name: "Aurora Beam", cost: ["water", "water"], damage: "90" },
        { name: "Ice Shard", cost: ["water"], damage: "50" }
      ],
      evolution: null
    }
  },
  {
    name: "Grimer",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    type: "poison",
    hp: 120,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sludge", cost: ["poison"], damage: "30" }
    ],
    evolution: {
      name: "Muk",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
      type: "poison",
      hp: 170,
      attacks: [
        { name: "Sludge Bomb", cost: ["poison", "poison"], damage: "90" },
        { name: "Acid Armor", cost: ["poison"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Shellder",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    type: "water",
    hp: 60,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Withdraw", cost: ["water"], damage: "0" }
    ],
    evolution: {
      name: "Cloyster",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
      type: "water",
      hp: 100,
      attacks: [
        { name: "Ice Beam", cost: ["water", "water"], damage: "90" },
        { name: "Spike Cannon", cost: ["water"], damage: "40" }
      ],
      evolution: null
    }
  },
  {
    name: "Gastly",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    type: "ghost",
    hp: 60,
    attacks: [
      { name: "Lick", cost: ["ghost"], damage: "20" },
      { name: "Confuse Ray", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Haunter",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
      type: "ghost",
      hp: 100,
      attacks: [
        { name: "Shadow Ball", cost: ["ghost", "ghost"], damage: "60" },
        { name: "Night Shade", cost: ["ghost"], damage: "30" }
      ],
      evolution: {
        name: "Gengar",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        type: "ghost",
        hp: 150,
        attacks: [
          { name: "Shadow Punch", cost: ["ghost", "ghost", "ghost"], damage: "130" },
          { name: "Dream Eater", cost: ["ghost", "ghost"], damage: "100" }
        ],
        evolution: null
      }
    }
  },
  {
    name: "Onix",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    type: "rock",
    hp: 110,
    attacks: [
      { name: "Rock Throw", cost: ["rock"], damage: "30" },
      { name: "Harden", cost: [], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Drowzee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    type: "psychic",
    hp: 100,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Hypnosis", cost: ["psychic"], damage: "0" }
    ],
    evolution: {
      name: "Hypno",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
      type: "psychic",
      hp: 150,
      attacks: [
        { name: "Psychic", cost: ["psychic", "psychic"], damage: "90" },
        { name: "Dream Eater", cost: ["psychic"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Krabby",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    type: "water",
    hp: 70,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Leer", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Kingler",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
      type: "water",
      hp: 120,
      attacks: [
        { name: "Crabhammer", cost: ["water", "water"], damage: "90" },
        { name: "Vice Grip", cost: ["water"], damage: "50" }
      ],
      evolution: null
    }
  },
  {
    name: "Voltorb",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    type: "electric",
    hp: 80,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Spark", cost: ["electric"], damage: "20" }
    ],
    evolution: {
      name: "Electrode",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
      type: "electric",
      hp: 120,
      attacks: [
        { name: "Thunderbolt", cost: ["electric", "electric"], damage: "80" },
        { name: "Self-Destruct", cost: ["electric"], damage: "100" }
      ],
      evolution: null
    }
  },
  {
    name: "Exeggcute",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    type: "grass",
    hp: 100,
    attacks: [
      { name: "Barrage", cost: ["grass"], damage: "20" },
      { name: "Hypnosis", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Exeggutor",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
      type: "grass",
      hp: 150,
      attacks: [
        { name: "Solar Beam", cost: ["grass", "grass"], damage: "120" },
        { name: "Psychic", cost: ["grass"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Cubone",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    type: "ground",
    hp: 100,
    attacks: [
      { name: "Bone Club", cost: ["ground"], damage: "30" },
      { name: "Growl", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Marowak",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
      type: "ground",
      hp: 140,
      attacks: [
        { name: "Bonemerang", cost: ["ground", "ground"], damage: "80" },
        { name: "Headbutt", cost: ["ground"], damage: "50" }
      ],
      evolution: null
    }
  },
  {
    name: "Hitmonlee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    type: "fighting",
    hp: 120,
    attacks: [
      { name: "Jump Kick", cost: ["fighting"], damage: "50" },
      { name: "Hi Jump Kick", cost: ["fighting"], damage: "70" }
    ],
    evolution: null
  },
  {
    name: "Hitmonchan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    type: "fighting",
    hp: 120,
    attacks: [
      { name: "Comet Punch", cost: ["fighting"], damage: "40" },
      { name: "Mach Punch", cost: ["fighting"], damage: "50" }
    ],
    evolution: null
  },
  {
    name: "Lickitung",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    type: "normal",
    hp: 140,
    attacks: [
      { name: "Lick", cost: ["normal"], damage: "30" },
      { name: "Slam", cost: [], damage: "40" }
    ],
    evolution: null
  },
  {
    name: "Koffing",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Smog", cost: ["poison"], damage: "20" },
      { name: "Sludge", cost: [], damage: "30" }
    ],
    evolution: {
      name: "Weezing",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Sludge Bomb", cost: ["poison", "poison"], damage: "90" },
        { name: "Toxic", cost: ["poison"], damage: "0" }
      ],
      evolution: null
    }
  },
  {
    name: "Rhyhorn",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    type: "ground",
    hp: 130,
    attacks: [
      { name: "Horn Attack", cost: ["ground"], damage: "30" },
      { name: "Stomp", cost: [], damage: "30" }
    ],
    evolution: {
      name: "Rhydon",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
      type: "ground",
      hp: 170,
      attacks: [
        { name: "Earthquake", cost: ["ground", "ground"], damage: "100" },
        { name: "Horn Drill", cost: ["ground"], damage: "70" }
      ],
      evolution: null
    }
  },
  {
    name: "Chansey",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    type: "normal",
    hp: 250,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Soft-Boiled", cost: ["normal"], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Tangela",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    type: "grass",
    hp: 130,
    attacks: [
      { name: "Vine Whip", cost: ["grass"], damage: "35" },
      { name: "Bind", cost: [], damage: "20" }
    ],
    evolution: null
  },
  {
    name: "Kangaskhan",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    type: "normal",
    hp: 180,
    attacks: [
      { name: "Comet Punch", cost: ["normal"], damage: "40" },
      { name: "Dizzy Punch", cost: ["normal"], damage: "70" }
    ],
    evolution: null
  },
  {
    name: "Horsea",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Smokescreen", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Seadra",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
      type: "water",
      hp: 130,
      attacks: [
        { name: "Water Gun", cost: ["water", "water"], damage: "70" },
        { name: "Dragon Breath", cost: ["water"], damage: "40" }
      ],
      evolution: null
    }
  },
  {
    name: "Goldeen",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    type: "water",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["water"], damage: "20" },
      { name: "Tail Whip", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Seaking",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
      type: "water",
      hp: 140,
      attacks: [
        { name: "Horn Drill", cost: ["water", "water"], damage: "90" },
        { name: "Waterfall", cost: ["water"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Staryu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Swift", cost: ["water"], damage: "20" },
      { name: "Recover", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Starmie",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
      type: "water",
      hp: 130,
      attacks: [
        { name: "Water Pulse", cost: ["water", "water"], damage: "80" },
        { name: "Psychic", cost: ["water"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Mr. Mime",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    type: "psychic",
    hp: 100,
    attacks: [
      { name: "Confusion", cost: ["psychic"], damage: "30" },
      { name: "Barrier", cost: [], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Scyther",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    type: "bug",
    hp: 140,
    attacks: [
      { name: "Fury Cutter", cost: ["bug"], damage: "40" },
      { name: "Wing Attack", cost: ["bug"], damage: "60" }
    ],
    evolution: null
  },
  {
    name: "Jynx",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    type: "psychic",
    hp: 130,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Lovely Kiss", cost: ["psychic"], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Electabuzz",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    type: "electric",
    hp: 130,
    attacks: [
      { name: "Thunder Punch", cost: ["electric"], damage: "50" },
      { name: "Quick Attack", cost: [], damage: "20" }
    ],
    evolution: null
  },
  {
    name: "Magmar",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    type: "fire",
    hp: 130,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Smog", cost: [], damage: "20" }
    ],
    evolution: null
  },
  {
    name: "Pinsir",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    type: "bug",
    hp: 140,
    attacks: [
      { name: "Vice Grip", cost: ["bug"], damage: "50" },
      { name: "Guillotine", cost: ["bug"], damage: "70" }
    ],
    evolution: null
  },
  {
    name: "Tauros",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    type: "normal",
    hp: 150,
    attacks: [
      { name: "Horn Attack", cost: ["normal"], damage: "40" },
      { name: "Stomp", cost: [], damage: "30" }
    ],
    evolution: null
  },
  {
    name: "Magikarp",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    type: "water",
    hp: 40,
    attacks: [
      { name: "Splash", cost: [], damage: "0" },
      { name: "Flail", cost: ["water"], damage: "10" }
    ],
    evolution: {
      name: "Gyarados",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      type: "water",
      hp: 190,
      attacks: [
        { name: "Hydro Pump", cost: ["water", "water", "water"], damage: "150" },
        { name: "Dragon Rage", cost: ["water", "water"], damage: "100" }
      ],
      evolution: null
    }
  },
  {
    name: "Lapras",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    type: "water",
    hp: 200,
    attacks: [
      { name: "Ice Beam", cost: ["water"], damage: "50" },
      { name: "Surf", cost: ["water"], damage: "60" }
    ],
    evolution: null
  },
  {
    name: "Ditto",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    type: "normal",
    hp: 100,
    attacks: [
      { name: "Transform", cost: [], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Eevee",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    type: "normal",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Tail Whip", cost: ["normal"], damage: "0" }
    ],
    evolution: {
      name: "Vaporeon",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
      type: "water",
      hp: 180,
      attacks: [
        { name: "Hydro Pump", cost: ["water", "water"], damage: "110" },
        { name: "Aurora Beam", cost: ["water"], damage: "70" }
      ],
      evolution: null
    }
    // Nota: Eevee tem outras evoluções (Jolteon, Flareon, etc) que podem ser adicionadas como propriedades alternativas
  },
  {
    name: "Porygon",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    type: "normal",
    hp: 120,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Sharpen", cost: ["normal"], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Omanyte",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    type: "rock",
    hp: 90,
    attacks: [
      { name: "Water Gun", cost: ["rock"], damage: "30" },
      { name: "Withdraw", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Omastar",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
      type: "rock",
      hp: 140,
      attacks: [
        { name: "Hydro Pump", cost: ["rock", "rock"], damage: "100" },
        { name: "Rock Slide", cost: ["rock"], damage: "70" }
      ],
      evolution: null
    }
  },
  {
    name: "Kabuto",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    type: "rock",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Harden", cost: ["rock"], damage: "0" }
    ],
    evolution: {
      name: "Kabutops",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
      type: "rock",
      hp: 140,
      attacks: [
        { name: "Slash", cost: ["rock", "rock"], damage: "90" },
        { name: "Aqua Jet", cost: ["rock"], damage: "60" }
      ],
      evolution: null
    }
  },
  {
    name: "Aerodactyl",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    type: "flying",
    hp: 150,
    attacks: [
      { name: "Wing Attack", cost: ["flying"], damage: "60" },
      { name: "Ancient Power", cost: ["flying"], damage: "80" }
    ],
    evolution: null
  },
  {
    name: "Snorlax",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    type: "normal",
    hp: 220,
    attacks: [
      { name: "Body Slam", cost: ["normal"], damage: "70" },
      { name: "Rest", cost: [], damage: "0" }
    ],
    evolution: null
  }
];