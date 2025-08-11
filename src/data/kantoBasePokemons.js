
export const kantoBasePokemons = [
  {
    name: "Bulbasaur",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "grass",
    hp: 100,
    attacks: [
      { name: "Vine Whip", cost: ["grass"], damage: "45" },
      { name: "Tackle", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Ivysaur",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      type: "grass",
      hp: 140,
      attacks: [
        { name: "Razor Leaf", cost: ["grass", "grass"], damage: "70" },
        { name: "Seed Bomb", cost: ["grass"], damage: "50" }
      ],
      evolution: {
        name: "Venusaur",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "fire",
    hp: 100,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Scratch", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Charmeleon",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      type: "fire",
      hp: 150,
      attacks: [
        { name: "Flamethrower", cost: ["fire", "fire"], damage: "90" },
        { name: "Fire Fang", cost: ["fire"], damage: "60" }
      ],
      evolution: {
        name: "Charizard",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "water",
    hp: 100,
    attacks: [
      { name: "Water Gun", cost: ["water"], damage: "30" },
      { name: "Tackle", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Wartortle",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      type: "water",
      hp: 150,
      attacks: [
        { name: "Bubble", cost: ["water", "water"], damage: "40" },
        { name: "Bite", cost: ["water"], damage: "20" }
      ],
      evolution: {
        name: "Blastoise",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "String Shot", cost: [], damage: "10" },
      { name: "Bug Bite", cost: ["bug"], damage: "20" }
    ],
    evolution: {
      name: "Metapod",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      type: "bug",
      hp: 100,
      attacks: [
        { name: "Harden", cost: [], damage: "0" },
        { name: "Tackle", cost: [], damage: "20" }
      ],
      evolution: {
        name: "Butterfree",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "Poison Sting", cost: ["bug"], damage: "15" },
      { name: "String Shot", cost: [], damage: "10" }
    ],
    evolution: {
      name: "Kakuna",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      type: "bug",
      hp: 100,
      attacks: [
        { name: "Harden", cost: [], damage: "0" },
        { name: "Poison Sting", cost: ["bug"], damage: "15" }
      ],
      evolution: {
        name: "Beedrill",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Gust", cost: ["flying"], damage: "20" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Pidgeotto",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      type: "flying",
      hp: 130,
      attacks: [
        { name: "Wing Attack", cost: ["flying", "flying"], damage: "50" },
        { name: "Sand Attack", cost: [], damage: "0" }
      ],
      evolution: {
        name: "Pidgeot",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    type: "normal",
    hp: 80,
    attacks: [
      { name: "Quick Attack", cost: [], damage: "15" },
      { name: "Bite", cost: ["normal"], damage: "20" }
    ],
    evolution: {
      name: "Raticate",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["flying"], damage: "20" },
      { name: "Leer", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Fearow",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    type: "poison",
    hp: 90,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Wrap", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Arbok",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "electric",
    hp: 100,
    attacks: [
      { name: "Thunder Shock", cost: ["electric"], damage: "30" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Raichu",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    type: "ground",
    hp: 100,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Sand Attack", cost: ["ground"], damage: "0" }
    ],
    evolution: {
      name: "Sandslash",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Scratch", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Nidorina",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Double Kick", cost: ["poison", "poison"], damage: "60" },
        { name: "Bite", cost: ["poison"], damage: "30" }
      ],
      evolution: {
        name: "Nidoqueen",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Poison Sting", cost: ["poison"], damage: "20" },
      { name: "Horn Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Nidorino",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
      type: "poison",
      hp: 140,
      attacks: [
        { name: "Double Kick", cost: ["poison", "poison"], damage: "60" },
        { name: "Fury Attack", cost: ["poison"], damage: "30" }
      ],
      evolution: {
        name: "Nidoking",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    type: "fairy",
    hp: 100,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sing", cost: ["fairy"], damage: "0" }
    ],
    evolution: {
      name: "Clefable",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    type: "fire",
    hp: 90,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Tail Whip", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Ninetales",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    type: "fairy",
    hp: 120,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sing", cost: ["fairy"], damage: "0" }
    ],
    evolution: {
      name: "Wigglytuff",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    type: "poison",
    hp: 80,
    attacks: [
      { name: "Leech Life", cost: ["poison"], damage: "20" },
      { name: "Supersonic", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Golbat",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    type: "grass",
    hp: 90,
    attacks: [
      { name: "Absorb", cost: ["grass"], damage: "20" },
      { name: "Sleep Powder", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Gloom",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
      type: "grass",
      hp: 130,
      attacks: [
        { name: "Acid", cost: ["grass", "grass"], damage: "40" },
        { name: "Mega Drain", cost: ["grass"], damage: "30" }
      ],
      evolution: {
        name: "Vileplume",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    type: "bug",
    hp: 80,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Stun Spore", cost: ["bug"], damage: "0" }
    ],
    evolution: {
      name: "Parasect",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    type: "bug",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Confusion", cost: ["bug"], damage: "20" }
    ],
    evolution: {
      name: "Venomoth",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    type: "ground",
    hp: 60,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Sand Attack", cost: ["ground"], damage: "0" }
    ],
    evolution: {
      name: "Dugtrio",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    type: "normal",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Pay Day", cost: ["normal"], damage: "10" }
    ],
    evolution: {
      name: "Persian",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    type: "water",
    hp: 100,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Confusion", cost: ["water"], damage: "20" }
    ],
    evolution: {
      name: "Golduck",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    type: "fighting",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Low Kick", cost: ["fighting"], damage: "30" }
    ],
    evolution: {
      name: "Primeape",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    type: "fire",
    hp: 110,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Bite", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Arcanine",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Hypnosis", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Poliwhirl",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
      type: "water",
      hp: 130,
      attacks: [
        { name: "Water Gun", cost: ["water", "water"], damage: "60" },
        { name: "Double Slap", cost: ["water"], damage: "30" }
      ],
      evolution: {
        name: "Poliwrath",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    type: "psychic",
    hp: 60,
    attacks: [
      { name: "Teleport", cost: [], damage: "0" },
      { name: "Psywave", cost: ["psychic"], damage: "10" }
    ],
    evolution: {
      name: "Kadabra",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
      type: "psychic",
      hp: 100,
      attacks: [
        { name: "Confusion", cost: ["psychic", "psychic"], damage: "50" },
        { name: "Psybeam", cost: ["psychic"], damage: "30" }
      ],
      evolution: {
        name: "Alakazam",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    type: "fighting",
    hp: 120,
    attacks: [
      { name: "Karate Chop", cost: ["fighting"], damage: "30" },
      { name: "Low Kick", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Machoke",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
      type: "fighting",
      hp: 160,
      attacks: [
        { name: "Seismic Toss", cost: ["fighting", "fighting"], damage: "80" },
        { name: "Submission", cost: ["fighting"], damage: "60" }
      ],
      evolution: {
        name: "Machamp",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    type: "grass",
    hp: 90,
    attacks: [
      { name: "Vine Whip", cost: ["grass"], damage: "30" },
      { name: "Growth", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Weepinbell",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
      type: "grass",
      hp: 130,
      attacks: [
        { name: "Razor Leaf", cost: ["grass", "grass"], damage: "70" },
        { name: "Acid", cost: ["grass"], damage: "30" }
      ],
      evolution: {
        name: "Victreebel",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Poison Sting", cost: ["water"], damage: "20" },
      { name: "Supersonic", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Tentacruel",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    type: "rock",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Defense Curl", cost: ["rock"], damage: "0" }
    ],
    evolution: {
      name: "Graveler",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
      type: "rock",
      hp: 140,
      attacks: [
        { name: "Rock Throw", cost: ["rock", "rock"], damage: "70" },
        { name: "Rollout", cost: ["rock"], damage: "40" }
      ],
      evolution: {
        name: "Golem",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    type: "fire",
    hp: 100,
    attacks: [
      { name: "Ember", cost: ["fire"], damage: "30" },
      { name: "Stomp", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Rapidash",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    type: "water",
    hp: 120,
    attacks: [
      { name: "Confusion", cost: ["water"], damage: "20" },
      { name: "Water Gun", cost: [], damage: "20" }
    ],
    evolution: {
      name: "Slowbro",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    type: "electric",
    hp: 80,
    attacks: [
      { name: "Thunder Shock", cost: ["electric"], damage: "20" },
      { name: "Sonic Boom", cost: [], damage: "10" }
    ],
    evolution: {
      name: "Magneton",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    type: "flying",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["flying"], damage: "20" },
      { name: "Quick Attack", cost: [], damage: "15" }
    ],
    evolution: {
      name: "Dodrio",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    type: "water",
    hp: 110,
    attacks: [
      { name: "Headbutt", cost: ["water"], damage: "30" },
      { name: "Growl", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Dewgong",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    type: "poison",
    hp: 120,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Sludge", cost: ["poison"], damage: "30" }
    ],
    evolution: {
      name: "Muk",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    type: "water",
    hp: 60,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Withdraw", cost: ["water"], damage: "0" }
    ],
    evolution: {
      name: "Cloyster",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    type: "ghost",
    hp: 60,
    attacks: [
      { name: "Lick", cost: ["ghost"], damage: "20" },
      { name: "Confuse Ray", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Haunter",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
      type: "ghost",
      hp: 100,
      attacks: [
        { name: "Shadow Ball", cost: ["ghost", "ghost"], damage: "60" },
        { name: "Night Shade", cost: ["ghost"], damage: "30" }
      ],
      evolution: {
        name: "Gengar",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    type: "psychic",
    hp: 100,
    attacks: [
      { name: "Pound", cost: [], damage: "20" },
      { name: "Hypnosis", cost: ["psychic"], damage: "0" }
    ],
    evolution: {
      name: "Hypno",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    type: "water",
    hp: 70,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Leer", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Kingler",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    type: "electric",
    hp: 80,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Spark", cost: ["electric"], damage: "20" }
    ],
    evolution: {
      name: "Electrode",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    type: "grass",
    hp: 100,
    attacks: [
      { name: "Barrage", cost: ["grass"], damage: "20" },
      { name: "Hypnosis", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Exeggutor",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    type: "ground",
    hp: 100,
    attacks: [
      { name: "Bone Club", cost: ["ground"], damage: "30" },
      { name: "Growl", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Marowak",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    type: "poison",
    hp: 100,
    attacks: [
      { name: "Smog", cost: ["poison"], damage: "20" },
      { name: "Sludge", cost: [], damage: "30" }
    ],
    evolution: {
      name: "Weezing",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    type: "ground",
    hp: 130,
    attacks: [
      { name: "Horn Attack", cost: ["ground"], damage: "30" },
      { name: "Stomp", cost: [], damage: "30" }
    ],
    evolution: {
      name: "Rhydon",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Bubble", cost: ["water"], damage: "20" },
      { name: "Smokescreen", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Seadra",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    type: "water",
    hp: 90,
    attacks: [
      { name: "Peck", cost: ["water"], damage: "20" },
      { name: "Tail Whip", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Seaking",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    type: "water",
    hp: 80,
    attacks: [
      { name: "Swift", cost: ["water"], damage: "20" },
      { name: "Recover", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Starmie",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    type: "water",
    hp: 40,
    attacks: [
      { name: "Splash", cost: [], damage: "0" },
      { name: "Flail", cost: ["water"], damage: "10" }
    ],
    evolution: {
      name: "Gyarados",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    type: "normal",
    hp: 100,
    attacks: [
      { name: "Transform", cost: [], damage: "0" }
    ],
    evolution: null
  },
  {
    name: "Eevee",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    type: "normal",
    hp: 100,
    attacks: [
      { name: "Tackle", cost: [], damage: "20" },
      { name: "Tail Whip", cost: ["normal"], damage: "0" }
    ],
    evolution: {
      name: "Vaporeon",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    type: "rock",
    hp: 90,
    attacks: [
      { name: "Water Gun", cost: ["rock"], damage: "30" },
      { name: "Withdraw", cost: [], damage: "0" }
    ],
    evolution: {
      name: "Omastar",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    type: "rock",
    hp: 90,
    attacks: [
      { name: "Scratch", cost: [], damage: "20" },
      { name: "Harden", cost: ["rock"], damage: "0" }
    ],
    evolution: {
      name: "Kabutops",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
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
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    type: "normal",
    hp: 220,
    attacks: [
      { name: "Body Slam", cost: ["normal"], damage: "70" },
      { name: "Rest", cost: [], damage: "0" }
    ],
    evolution: null
  }
];