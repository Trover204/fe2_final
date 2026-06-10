/* ══════════════════════════════════════
   POKEMON DATA — 20 player pokemon
══════════════════════════════════════ */
const PLAYER_POKEMON = {
  pikachu:{name:'PIKACHU',emoji:'<a href="https://pokemondb.net/pokedex/pikachu"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/pikachu.png" alt="Pikachu"></a>',hp:90,level:35,color:'#F8D030',skills:[
    {name:'Thunderbolt',emoji:'⚡',type:'electric',dmg:[35,55],pp:15,fx:'#FFD700'},
    {name:'Quick Attack',emoji:'💨',type:'normal',dmg:[20,35],pp:30,fx:'#E0E0E0'},
    {name:'Thunder',emoji:'🌩️',type:'electric',dmg:[50,80],pp:10,fx:'#FFD700'},
    {name:'Iron Tail',emoji:'🔩',type:'normal',dmg:[25,45],pp:15,fx:'#C0C0C0'},
  ]},
  charizard:{name:'CHARIZARD',emoji:'<a href="https://pokemondb.net/pokedex/charizard"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charizard.png" alt="Charizard"></a>',hp:110,level:36,color:'#F08030',skills:[
    {name:'Flamethrower',emoji:'🔥',type:'fire',dmg:[40,65],pp:15,fx:'#FF4500'},
    {name:'Fly',emoji:'🦅',type:'flying',dmg:[30,50],pp:15,fx:'#87CEEB'},
    {name:'Fire Blast',emoji:'💥',type:'fire',dmg:[55,85],pp:5,fx:'#FF6600'},
    {name:'Dragon Claw',emoji:'🐉',type:'dragon',dmg:[35,55],pp:15,fx:'#7038F8'},
  ]},
  blastoise:{name:'BLASTOISE',emoji:'<a href="https://pokemondb.net/pokedex/blastoise"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/blastoise.png" alt="Blastoise"></a>',hp:105,level:36,color:'#6890F0',skills:[
    {name:'Hydro Pump',emoji:'💧',type:'water',dmg:[45,75],pp:5,fx:'#1E90FF'},
    {name:'Surf',emoji:'🌊',type:'water',dmg:[35,55],pp:15,fx:'#4169E1'},
    {name:'Ice Beam',emoji:'🧊',type:'ice',dmg:[40,60],pp:10,fx:'#98D8D8'},
    {name:'Rapid Spin',emoji:'🌀',type:'normal',dmg:[20,35],pp:40,fx:'#E0E0E0'},
  ]},
  venusaur:{name:'VENUSAUR',emoji:'<a href="https://pokemondb.net/pokedex/venusaur"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/venusaur.png" alt="Venusaur"></a>',hp:100,level:36,color:'#78C850',skills:[
    {name:'Solar Beam',emoji:'☀️',type:'grass',dmg:[45,75],pp:10,fx:'#FFD700'},
    {name:'Vine Whip',emoji:'🌿',type:'grass',dmg:[25,40],pp:25,fx:'#78C850'},
    {name:'Petal Dance',emoji:'🌸',type:'grass',dmg:[40,70],pp:10,fx:'#FF69B4'},
    {name:'Sludge Bomb',emoji:'☣️',type:'poison',dmg:[35,55],pp:10,fx:'#9932CC'},
  ]},
  gengar:{name:'GENGAR',emoji:'<a href="https://pokemondb.net/pokedex/gengar"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/gengar.png" alt="Gengar"></a>',hp:95,level:36,color:'#705898',skills:[
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[40,65],pp:15,fx:'#4B0082'},
    {name:'Dream Eater',emoji:'😴',type:'psychic',dmg:[45,70],pp:15,fx:'#9932CC'},
    {name:'Dark Pulse',emoji:'🌑',type:'dark',dmg:[38,58],pp:15,fx:'#705848'},
    {name:'Sludge Wave',emoji:'☣️',type:'poison',dmg:[35,52],pp:10,fx:'#A040A0'},
  ]},
  mewtwo:{name:'MEWTWO',emoji:'<a href="https://pokemondb.net/pokedex/mewtwo"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/mewtwo.png" alt="Mewtwo"></a>',hp:130,level:70,color:'#F85888',skills:[
    {name:'Psystrike',emoji:'🔮',type:'psychic',dmg:[65,100],pp:10,fx:'#F85888'},
    {name:'Aura Sphere',emoji:'💠',type:'fighting',dmg:[55,80],pp:20,fx:'#C03028'},
    {name:'Ice Beam',emoji:'🧊',type:'ice',dmg:[50,75],pp:10,fx:'#98D8D8'},
    {name:'Thunderbolt',emoji:'⚡',type:'electric',dmg:[50,70],pp:15,fx:'#F8D030'},
  ]},
  lucario:{name:'LUCARIO',emoji:'<a href="https://pokemondb.net/pokedex/riolu"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/riolu.png" alt="Riolu"></a>',hp:102,level:45,color:'#4169E1',skills:[
    {name:'Aura Sphere',emoji:'💠',type:'fighting',dmg:[45,70],pp:20,fx:'#4169E1'},
    {name:'Close Combat',emoji:'👊',type:'fighting',dmg:[50,80],pp:5,fx:'#C03028'},
    {name:'Flash Cannon',emoji:'✨',type:'steel',dmg:[40,60],pp:10,fx:'#B8B8D0'},
    {name:'Extreme Speed',emoji:'💨',type:'normal',dmg:[35,50],pp:5,fx:'#E0E0E0'},
  ]},
  dragonite:{name:'DRAGONITE',emoji:'<a href="https://pokemondb.net/pokedex/dragonite"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/dragonite.png" alt="Dragonite"></a>',hp:120,level:55,color:'#6B4226',skills:[
    {name:'Dragon Rush',emoji:'🐉',type:'dragon',dmg:[50,80],pp:10,fx:'#7038F8'},
    {name:'Thunder',emoji:'🌩️',type:'electric',dmg:[45,75],pp:10,fx:'#F8D030'},
    {name:'Hyper Beam',emoji:'💥',type:'normal',dmg:[60,90],pp:5,fx:'#E0E0E0'},
    {name:'Fire Blast',emoji:'🔥',type:'fire',dmg:[45,70],pp:5,fx:'#FF4500'},
  ]},
  umbreon:{name:'UMBREON',emoji:'<a href="https://pokemondb.net/pokedex/umbreon"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/umbreon.png" alt="Umbreon"></a>',hp:108,level:40,color:'#705848',skills:[
    {name:'Dark Pulse',emoji:'🌑',type:'dark',dmg:[38,60],pp:15,fx:'#705848'},
    {name:'Moonblast',emoji:'🌙',type:'psychic',dmg:[45,70],pp:15,fx:'#F85888'},
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[40,60],pp:15,fx:'#4B0082'},
    {name:'Foul Play',emoji:'😈',type:'dark',dmg:[30,55],pp:15,fx:'#705848'},
  ]},
  gardevoir:{name:'GARDEVOIR',emoji:'<a href="https://pokemondb.net/pokedex/gardevoir"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/gardevoir.png" alt="Gardevoir"></a>',hp:100,level:42,color:'#F85888',skills:[
    {name:'Moonblast',emoji:'🌙',type:'psychic',dmg:[50,78],pp:15,fx:'#F85888'},
    {name:'Psychic',emoji:'🔮',type:'psychic',dmg:[40,65],pp:10,fx:'#9932CC'},
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[38,58],pp:15,fx:'#4B0082'},
    {name:'Focus Blast',emoji:'💥',type:'fighting',dmg:[45,75],pp:5,fx:'#C03028'},
  ]},
  tyranitar:{name:'TYRANITAR',emoji:'<a href="https://pokemondb.net/pokedex/tyranitar"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/tyranitar.png" alt="Tyranitar"></a>',hp:125,level:55,color:'#705848',skills:[
    {name:'Stone Edge',emoji:'🪨',type:'rock',dmg:[50,80],pp:5,fx:'#B8A038'},
    {name:'Crunch',emoji:'😬',type:'dark',dmg:[40,65],pp:15,fx:'#705848'},
    {name:'Earthquake',emoji:'🌋',type:'ground',dmg:[55,85],pp:10,fx:'#E0C068'},
    {name:'Ice Punch',emoji:'🧊',type:'ice',dmg:[38,58],pp:15,fx:'#98D8D8'},
  ]},
  blaziken:{name:'BLAZIKEN',emoji:'<a href="https://pokemondb.net/pokedex/vulpix"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/vulpix.png" alt="Vulpix"></a>',hp:108,level:48,color:'#F08030',skills:[
    {name:'Blaze Kick',emoji:'🔥',type:'fire',dmg:[45,75],pp:10,fx:'#FF4500'},
    {name:'High Jump Kick',emoji:'🦵',type:'fighting',dmg:[50,80],pp:10,fx:'#C03028'},
    {name:'Sky Uppercut',emoji:'✊',type:'fighting',dmg:[40,65],pp:15,fx:'#C03028'},
    {name:'Flamethrower',emoji:'💥',type:'fire',dmg:[38,62],pp:15,fx:'#FF6600'},
  ]},
  absol:{name:'ABSOL',emoji:'<a href="https://pokemondb.net/pokedex/absol"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/absol.png" alt="Absol"></a>',hp:95,level:40,color:'#705848',skills:[
    {name:'Night Slash',emoji:'🌑',type:'dark',dmg:[40,65],pp:20,fx:'#705848'},
    {name:'Psycho Cut',emoji:'🔮',type:'psychic',dmg:[38,60],pp:20,fx:'#F85888'},
    {name:'Sucker Punch',emoji:'👊',type:'dark',dmg:[35,55],pp:5,fx:'#705848'},
    {name:'Perish Song',emoji:'🎵',type:'normal',dmg:[30,50],pp:5,fx:'#E0E0E0'},
  ]},
  togekiss:{name:'TOGEKISS',emoji:'<a href="https://pokemondb.net/pokedex/togekiss"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/togekiss.png" alt="Togekiss"></a>',hp:105,level:45,color:'#A890F0',skills:[
    {name:'Air Slash',emoji:'🌪️',type:'flying',dmg:[40,65],pp:15,fx:'#A890F0'},
    {name:'Aura Sphere',emoji:'💠',type:'fighting',dmg:[45,68],pp:20,fx:'#4169E1'},
    {name:'Moonblast',emoji:'🌙',type:'psychic',dmg:[48,72],pp:15,fx:'#F85888'},
    {name:'Flamethrower',emoji:'🔥',type:'fire',dmg:[35,55],pp:15,fx:'#FF4500'},
  ]},
  glaceon:{name:'GLACEON',emoji:'<a href="https://pokemondb.net/pokedex/glaceon"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/glaceon.png" alt="Glaceon"></a>',hp:98,level:40,color:'#98D8D8',skills:[
    {name:'Ice Beam',emoji:'🧊',type:'ice',dmg:[40,65],pp:10,fx:'#98D8D8'},
    {name:'Blizzard',emoji:'❄️',type:'ice',dmg:[55,85],pp:5,fx:'#ADD8E6'},
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[35,55],pp:15,fx:'#4B0082'},
    {name:'Quick Attack',emoji:'💨',type:'normal',dmg:[20,35],pp:30,fx:'#E0E0E0'},
  ]},
  machamp:{name:'MACHAMP',emoji:'<a href="https://pokemondb.net/pokedex/machamp"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/machamp.png" alt="Machamp"></a>',hp:112,level:45,color:'#C03028',skills:[
    {name:'Dynamic Punch',emoji:'💥',type:'fighting',dmg:[50,80],pp:5,fx:'#C03028'},
    {name:'Close Combat',emoji:'👊',type:'fighting',dmg:[55,85],pp:5,fx:'#C03028'},
    {name:'Stone Edge',emoji:'🪨',type:'rock',dmg:[45,72],pp:5,fx:'#B8A038'},
    {name:'Thunder Punch',emoji:'⚡',type:'electric',dmg:[35,55],pp:15,fx:'#F8D030'},
  ]},
  raichu:{name:'RAICHU',emoji:'<a href="https://pokemondb.net/pokedex/raichu"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/raichu.png" alt="Raichu"></a>',hp:92,level:36,color:'#F8D030',skills:[
    {name:'Thunderbolt',emoji:'⚡',type:'electric',dmg:[38,58],pp:15,fx:'#F8D030'},
    {name:'Volt Tackle',emoji:'💥',type:'electric',dmg:[52,80],pp:15,fx:'#FFD700'},
    {name:'Thunder Wave',emoji:'🌩️',type:'electric',dmg:[28,45],pp:20,fx:'#F8D030'},
    {name:'Iron Tail',emoji:'🔩',type:'steel',dmg:[30,50],pp:15,fx:'#B8B8D0'},
  ]},
  espeon:{name:'ESPEON',emoji:'<a href="https://pokemondb.net/pokedex/espeon"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/espeon.png" alt="Espeon"></a>',hp:96,level:40,color:'#F85888',skills:[
    {name:'Psychic',emoji:'🔮',type:'psychic',dmg:[42,68],pp:10,fx:'#9932CC'},
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[38,58],pp:15,fx:'#4B0082'},
    {name:'Dazzling Gleam',emoji:'✨',type:'psychic',dmg:[45,70],pp:10,fx:'#FFD700'},
    {name:'Quick Attack',emoji:'💨',type:'normal',dmg:[22,38],pp:30,fx:'#E0E0E0'},
  ]},
  snorlax:{name:'SNORLAX',emoji:'<a href="https://pokemondb.net/pokedex/snorlax"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/snorlax.png" alt="Snorlax"></a>',hp:160,level:50,color:'#78C850',skills:[
    {name:'Body Slam',emoji:'💥',type:'normal',dmg:[42,68],pp:15,fx:'#E0E0E0'},
    {name:'Hyper Beam',emoji:'💫',type:'normal',dmg:[60,90],pp:5,fx:'#FFD700'},
    {name:'Earthquake',emoji:'🌋',type:'ground',dmg:[50,75],pp:10,fx:'#E0C068'},
    {name:'Ice Punch',emoji:'🧊',type:'ice',dmg:[35,55],pp:15,fx:'#98D8D8'},
  ]},
  scyther:{name:'SCYTHER',emoji:'<a href="https://pokemondb.net/pokedex/scyther"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/scyther.png" alt="Scyther"></a>',hp:98,level:38,color:'#78C850',skills:[
    {name:'X-Scissor',emoji:'✂️',type:'grass',dmg:[40,65],pp:15,fx:'#78C850'},
    {name:'Aerial Ace',emoji:'🌪️',type:'flying',dmg:[36,55],pp:20,fx:'#A890F0'},
    {name:'Night Slash',emoji:'🌑',type:'dark',dmg:[38,58],pp:20,fx:'#705848'},
    {name:'Quick Attack',emoji:'💨',type:'normal',dmg:[22,38],pp:30,fx:'#E0E0E0'},
  ]},
};

/* ══════════════════════════════════════
   30 STAGES — scaled difficulty
══════════════════════════════════════ */
const ALL_ENEMIES = [
  // Stage 1–5: Starter/Rookie
  {name:'RATTATA',emoji:'<a href="https://pokemondb.net/pokedex/rattata"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/rattata.png" alt="Rattata"></a>',hp:40,level:5},
  {name:'PIDGEY',emoji:'<a href="https://pokemondb.net/pokedex/pidgey"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pidgey.png" alt="Pidgey"></a>',hp:42,level:6},
  {name:'CATERPIE',emoji:'<a href="https://pokemondb.net/pokedex/caterpie"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/caterpie.png" alt="Caterpie"></a>',hp:38,level:4},
  {name:'WEEDLE',emoji:'<a href="https://pokemondb.net/pokedex/weedle"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/weedle.png" alt="Weedle"></a>',hp:36,level:5},
  {name:'GEODUDE',emoji:'<a href="https://pokemondb.net/pokedex/geodude"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/geodude.png" alt="Geodude"></a>',hp:45,level:7},
  // Stage 6–10: Early trainers
  {name:'CHARMANDER',emoji:'<a href="https://pokemondb.net/pokedex/charmander"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charmander.png" alt="Charmander"></a>',hp:55,level:12},
  {name:'SQUIRTLE',emoji:'<a href="https://pokemondb.net/pokedex/squirtle"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/squirtle.png" alt="Squirtle"></a>',hp:58,level:12},
  {name:'BULBASAUR',emoji:'<a href="https://pokemondb.net/pokedex/bulbasaur"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/bulbasaur.png" alt="Bulbasaur"></a>',hp:56,level:12},
  {name:'JIGGLYPUFF',emoji:'<a href="https://pokemondb.net/pokedex/jigglypuff"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/jigglypuff.png" alt="Jigglypuff"></a>',hp:65,level:14},
  {name:'CLEFAIRY',emoji:'<a href="https://pokemondb.net/pokedex/clefairy"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/clefairy.png" alt="Clefairy"></a>',hp:62,level:13},
  // Stage 11–15: Mid-tier
  {name:'HAUNTER',emoji:'<a href="https://pokemondb.net/pokedex/haunter"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/haunter.png" alt="Haunter"></a>',hp:75,level:22},
  {name:'KADABRA',emoji:'<a href="https://pokemondb.net/pokedex/kadabra"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/kadabra.png" alt="Kadabra"></a>',hp:72,level:22},
  {name:'CHARMELEON',emoji:'<a href="https://pokemondb.net/pokedex/charmeleon"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charmeleon.png" alt="Charmeleon"></a>',hp:78,level:24},
  {name:'WARTORTLE',emoji:'<a href="https://pokemondb.net/pokedex/wartortle"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/wartortle.png" alt="Wartortle"></a>',hp:76,level:23},
  {name:'IVYSAUR',emoji:'<a href="https://pokemondb.net/pokedex/ivysaur"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ivysaur.png" alt="Ivysaur"></a>',hp:80,level:25},
  // Stage 16–20: Strong trainers
  {name:'ELECTABUZZ',emoji:'<a href="https://pokemondb.net/pokedex/electabuzz"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/electabuzz.png" alt="Electabuzz"></a>',hp:90,level:32},
  {name:'MAGMAR',emoji:'<a href="https://pokemondb.net/pokedex/magmar"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/magmar.png" alt="Magmar"></a>',hp:88,level:31},
  {name:'LAPRAS',emoji:'<a href="https://pokemondb.net/pokedex/lapras"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/lapras.png" alt="Lapras"></a>',hp:100,level:35},
  {name:'ARCANINE',emoji:'<a href="https://pokemondb.net/pokedex/arcanine"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/arcanine.png" alt="Arcanine"></a>',hp:95,level:34},
  {name:'ALAKAZAM',emoji:'<a href="https://pokemondb.net/pokedex/alakazam"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/alakazam.png" alt="Alakazam"></a>',hp:85,level:33},
  // Stage 21–25: Elite
  {name:'SALAMENCE',emoji:'<a href="https://pokemondb.net/pokedex/salamence"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/salamence.png" alt="Salamence"></a>',hp:108,level:48},
  {name:'METAGROSS',emoji:'<a href="https://pokemondb.net/pokedex/metagross"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/metagross.png" alt="Metagross"></a>',hp:110,level:50},
  {name:'GARCHOMP',emoji:'<a href="https://pokemondb.net/pokedex/garchomp"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/garchomp.png" alt="Garchomp"></a>',hp:112,level:52},
  {name:'TOGEKISS',emoji:'<a href="https://pokemondb.net/pokedex/togekiss"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/togekiss.png" alt="Togekiss"></a>',hp:105,level:48},
  {name:'LUCARIO',emoji:'<a href="https://pokemondb.net/pokedex/lucario"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/lucario.png" alt="Lucario"></a>',hp:102,level:48},
  // Stage 26–30: Legendary BOSS
  {name:'ARTICUNO',emoji:'<a href="https://pokemondb.net/pokedex/articuno"><img src="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/articuno.png" alt="Articuno"></a>',hp:115,level:60},
  {name:'ZAPDOS',emoji:'<a href="https://pokemondb.net/pokedex/zapdos"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/zapdos.png" alt="Zapdos"></a>',hp:118,level:62},
  {name:'MOLTRES',emoji:'<a href="https://pokemondb.net/pokedex/moltres"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/moltres.png" alt="Moltres"></a>',hp:120,level:64},
  {name:'RAIKOU',emoji:'<a href="https://pokemondb.net/pokedex/raikou"><img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/raikou.png" alt="Raikou"></a>',hp:125,level:68},
  {name:'MEWTWO',emoji:'<a href="https://pokemondb.net/pokedex/mewtwo"><img src="https://img.pokemondb.net/sprites/sword-shield/normal/mewtwo.png" alt="Mewtwo"></a>',hp:140,level:75},
];

// Enemy skill pools by tier
const SKILL_POOLS = {
  tier1:[
    {name:'Tackle',emoji:'💥',type:'normal',dmg:[12,22],pp:35,fx:'#E0E0E0'},
    {name:'Growl',emoji:'😮',type:'normal',dmg:[8,16],pp:40,fx:'#E0E0E0'},
    {name:'Scratch',emoji:'🐾',type:'normal',dmg:[14,24],pp:35,fx:'#E0E0E0'},
    {name:'Pound',emoji:'👊',type:'normal',dmg:[10,20],pp:35,fx:'#E0E0E0'},
  ],
  tier2:[
    {name:'Ember',emoji:'🔥',type:'fire',dmg:[24,38],pp:25,fx:'#FF4500'},
    {name:'Water Gun',emoji:'💧',type:'water',dmg:[26,40],pp:25,fx:'#1E90FF'},
    {name:'Vine Whip',emoji:'🌿',type:'grass',dmg:[22,35],pp:25,fx:'#78C850'},
    {name:'Thunder Shock',emoji:'⚡',type:'electric',dmg:[24,38],pp:30,fx:'#F8D030'},
  ],
  tier3:[
    {name:'Flamethrower',emoji:'🔥',type:'fire',dmg:[36,56],pp:15,fx:'#FF6600'},
    {name:'Surf',emoji:'🌊',type:'water',dmg:[34,52],pp:15,fx:'#4169E1'},
    {name:'Solar Beam',emoji:'☀️',type:'grass',dmg:[40,62],pp:10,fx:'#FFD700'},
    {name:'Thunderbolt',emoji:'⚡',type:'electric',dmg:[36,58],pp:15,fx:'#FFD700'},
    {name:'Shadow Ball',emoji:'👻',type:'ghost',dmg:[36,56],pp:15,fx:'#4B0082'},
  ],
  tier4:[
    {name:'Fire Blast',emoji:'💥',type:'fire',dmg:[52,80],pp:5,fx:'#FF4500'},
    {name:'Hydro Pump',emoji:'💧',type:'water',dmg:[48,76],pp:5,fx:'#1E90FF'},
    {name:'Thunder',emoji:'🌩️',type:'electric',dmg:[52,82],pp:10,fx:'#FFD700'},
    {name:'Blizzard',emoji:'❄️',type:'ice',dmg:[52,80],pp:5,fx:'#98D8D8'},
    {name:'Earthquake',emoji:'🌋',type:'ground',dmg:[55,85],pp:10,fx:'#E0C068'},
    {name:'Psychic',emoji:'🔮',type:'psychic',dmg:[48,72],pp:10,fx:'#9932CC'},
  ],
  boss:[
    {name:'Hyper Beam',emoji:'💥',type:'normal',dmg:[65,100],pp:5,fx:'#FFD700'},
    {name:'Psystrike',emoji:'🔮',type:'psychic',dmg:[65,100],pp:10,fx:'#F85888'},
    {name:'Origin Pulse',emoji:'🌊',type:'water',dmg:[60,95],pp:5,fx:'#1E90FF'},
    {name:'Precipice Blades',emoji:'🌋',type:'ground',dmg:[60,95],pp:10,fx:'#E0C068'},
    {name:'Spacial Rend',emoji:'💫',type:'dragon',dmg:[65,100],pp:5,fx:'#7038F8'},
  ],
};

function getEnemySkillPool(stageIdx){
  if(stageIdx>=25) return SKILL_POOLS.boss;
  if(stageIdx>=15) return SKILL_POOLS.tier4;
  if(stageIdx>=10) return SKILL_POOLS.tier3;
  if(stageIdx>=5)  return SKILL_POOLS.tier2;
  return SKILL_POOLS.tier1;
}
function buildEnemyForStage(idx){
  const base=ALL_ENEMIES[idx];
  const pool=getEnemySkillPool(idx);
  // pick 4 skills
  const shuffled=[...pool].sort(()=>Math.random()-.5).slice(0,Math.min(4,pool.length));
  while(shuffled.length<4) shuffled.push(pool[Math.floor(Math.random()*pool.length)]);
  // scale HP with stage
  const hpScale=1+idx*0.15;
  return {...base, hp:Math.round(base.hp*hpScale), maxHP:Math.round(base.hp*hpScale), skills:shuffled};
}

/* ══════════════════════════════════════
   GAME STATE
══════════════════════════════════════ */
let G={
  currentStage:0,       // 0-indexed (0 = stage 1)
  clearedStages:[],     // array of cleared stage indices
  chosenKey:null,       // player pokemon key
  player:null,enemy:null,
  pHP:0,eHP:0,pMaxHP:0,eMaxHP:0,
  pPP:[],turn:'player',
};

function saveProgress(){try{localStorage.setItem('pkbattle',JSON.stringify({cleared:G.clearedStages,chosen:G.chosenKey}))}catch(e){}}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem('pkbattle')||'{}');
    G.clearedStages=d.cleared||[];
    G.chosenKey=d.chosen||null;
    G.currentStage=G.clearedStages.length>0?G.clearedStages.length:0;
  }catch(e){G.clearedStages=[];G.chosenKey=null;G.currentStage=0;}
}

/* ══════════════════════════════════════
   UTILS
══════════════════════════════════════ */
const $=id=>document.getElementById(id);
const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active')}

/* ══════════════════════════════════════
   STARS (for battle/map screens)
══════════════════════════════════════ */
function mkStars(){
  document.querySelectorAll('.stars').forEach(c=>{
    c.innerHTML='';
    for(let i=0;i<60;i++){
      const s=document.createElement('div');
      s.className='star';
      s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;--delay:-${Math.random()*5}s`;
      c.appendChild(s);
    }
  });
}

/* ══════════════════════════════════════
   NATURE DECORATIONS (select screen)
══════════════════════════════════════ */
function mkNature(){
  const sel=document.getElementById('select-screen');
  // remove old nature elements
  sel.querySelectorAll('.nature-sun,.nature-cloud,.nature-tree,.nature-bird,.nature-butterfly,.nature-grass').forEach(e=>e.remove());

  // Sun
  const sun=document.createElement('div');
  sun.className='nature-sun'; sun.textContent='☀️';
  sel.appendChild(sun);

  // Clouds (3)
  [
    {top:'8%', spd:'26s', dly:'0s',   size:'34px'},
    {top:'18%',spd:'38s', dly:'-14s', size:'28px'},
    {top:'5%', spd:'32s', dly:'-22s', size:'30px'},
  ].forEach(({top,spd,dly,size})=>{
    const cl=document.createElement('div');
    cl.className='nature-cloud';
    cl.style.cssText=`top:${top};--spd:${spd};--dly:${dly};font-size:${size}`;
    cl.textContent='☁️';
    sel.appendChild(cl);
  });

  // Trees (along bottom)
  [
    {left:'2%',  sz:'58px', dly:'0s'},
    {left:'12%', sz:'46px', dly:'-1.5s'},
    {left:'72%', sz:'54px', dly:'-0.8s'},
    {left:'84%', sz:'44px', dly:'-2s'},
    {left:'93%', sz:'50px', dly:'-1s'},
  ].forEach(({left,sz,dly})=>{
    const t=document.createElement('div');
    t.className='nature-tree';
    t.style.cssText=`left:${left};--sz:${sz};--dly:${dly}`;
    t.textContent='🌳';
    sel.appendChild(t);
  });

  // Birds (2)
  [
    {top:'12%', spd:'18s', dly:'0s'},
    {top:'22%', spd:'24s', dly:'-9s'},
  ].forEach(({top,spd,dly})=>{
    const b=document.createElement('div');
    b.className='nature-bird';
    b.style.cssText=`top:${top};--spd:${spd};--dly:${dly}`;
    b.textContent='🐦';
    sel.appendChild(b);
  });

  // Butterflies (2)
  [
    {top:'38%', left:'8%',  spd:'7s',  dly:'0s'},
    {top:'52%', left:'72%', spd:'9s',  dly:'-3s'},
  ].forEach(({top,left,spd,dly})=>{
    const bf=document.createElement('div');
    bf.className='nature-butterfly';
    bf.style.cssText=`top:${top};left:${left};--spd:${spd};--dly:${dly}`;
    bf.textContent='🦋';
    sel.appendChild(bf);
  });

  // Grass strip at bottom
  const grass=document.createElement('div');
  grass.className='nature-grass';
  grass.innerHTML='🌾🌱🌾🌿🌾🌱🌾🌿🌾🌱🌾🌿🌾🌱🌾';
  sel.appendChild(grass);
}

/* ══════════════════════════════════════
   SELECT SCREEN
══════════════════════════════════════ */
function buildSelect(){
  // stage progress
  const done=G.clearedStages.length;
  $('sel-stage-label').textContent=`Cửa Ải ${Math.min(done+1,30)} / 30 — Đã qua: ${done}`;
  $('sel-stage-fill').style.width=(done/30*100)+'%';

  const g=$('poke-grid'); g.innerHTML='';
  Object.entries(PLAYER_POKEMON).forEach(([key,p])=>{
    // Extract img src & alt from emoji HTML string (may be <a><img></a> or plain emoji)
    let sprHTML;
    const imgMatch = p.emoji.match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/i)
                  || p.emoji.match(/<img[^>]+alt=["']([^"']*)["'][^>]*src=["']([^"']+)["']/i);
    if(imgMatch){
      const src = imgMatch[1] || imgMatch[2];
      const alt = imgMatch[2] || imgMatch[1];
      sprHTML = `<img class="pc-img" src="${src}" alt="${alt}" loading="lazy">`;
    } else {
      sprHTML = `<span class="pc-spr">${p.emoji}</span>`;
    }

    const d=document.createElement('div');
    d.className='poke-card';
    d.style.setProperty('--c',p.color);
    d.innerHTML=`${sprHTML}<span class="pc-name">${p.name}</span><span class="pc-type">${p.skills[0].type.toUpperCase()}</span><div class="pc-stat">HP ${p.hp} · Lv.${p.level}</div>`;
    if(G.chosenKey===key) d.classList.add('sel');
    d.addEventListener('click',()=>{
      document.querySelectorAll('.poke-card').forEach(c=>c.classList.remove('sel'));
      d.classList.add('sel');
      G.chosenKey=key;
      $('start-btn').disabled=false;
      saveProgress();
    });
    g.appendChild(d);
  });
  $('start-btn').disabled=!G.chosenKey;
}

$('start-btn').addEventListener('click',()=>{
  if(!G.chosenKey) return;
  G.currentStage=G.clearedStages.length;
  startBattle();
});
$('map-btn').addEventListener('click',()=>{ buildMap(); showScreen('map-screen'); });

/* ══════════════════════════════════════
   MAP SCREEN
══════════════════════════════════════ */
function buildMap(){
  const g=$('map-grid'); g.innerHTML='';
  const done=G.clearedStages.length;
  for(let i=0;i<30;i++){
    const cell=document.createElement('div');
    const isDone=G.clearedStages.includes(i);
    const isCurrent=i===done;
    const isLocked=i>done;
    const isBoss=(i===9||i===19||i===24||i===29);
    cell.className='map-cell '+(isDone?'done':isCurrent?'current':'locked');
    const enemy=ALL_ENEMIES[i];

    // Parse img src from emoji HTML string
    const imgMatch=enemy.emoji.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    const sprHTML=imgMatch
      ?`<img class="mc-img" src="${imgMatch[1]}" alt="${enemy.name}" loading="lazy">`
      :`<div class="mc-spr">${enemy.emoji}</div>`;

    cell.innerHTML=`
      ${isBoss?'<span class="mc-boss">👑</span>':''}
      ${isDone?'<span class="mc-check">✅</span>':''}
      <div class="mc-num">${i+1}</div>
      ${sprHTML}
      <div class="mc-name">${enemy.name}</div>
    `;
    if(isCurrent){
      cell.addEventListener('click',()=>{
        G.currentStage=i;
        startBattle();
        showScreen('battle-screen');
      });
    }
    g.appendChild(cell);
  }
  $('map-sub').textContent=`Đã qua ${done}/30 cửa ải`;
}

$('map-play-btn').addEventListener('click',()=>{
  if(!G.chosenKey){showScreen('select-screen');return;}
  G.currentStage=G.clearedStages.length;
  startBattle();
  showScreen('battle-screen');
});
$('map-sel-btn').addEventListener('click',()=>{ buildSelect(); showScreen('select-screen'); });

/* ══════════════════════════════════════
   START BATTLE
══════════════════════════════════════ */
function setSpr(el, emojiOrHtml){
  const imgMatch = emojiOrHtml.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if(imgMatch){
    el.innerHTML = `<img class="spr-img" src="${imgMatch[1]}" alt="">`;
  } else {
    el.textContent = emojiOrHtml;
  }
}

function startBattle(){
  const p=PLAYER_POKEMON[G.chosenKey];
  const eBase=buildEnemyForStage(G.currentStage);
  G.player=p; G.enemy=eBase;
  G.pHP=p.hp; G.eHP=eBase.hp;
  G.pMaxHP=p.hp; G.eMaxHP=eBase.hp;
  G.pPP=p.skills.map(s=>s.pp);
  G.turn='player';

  setSpr($('p-spr'), p.emoji); setSpr($('e-spr'), eBase.emoji);
  $('p-name').textContent=p.name; $('e-name').textContent=eBase.name;
  $('p-lv').textContent=`Lv.${p.level}`; $('e-lv').textContent=`Lv.${eBase.level}`;
  $('p-spr').className='poke-spr player'; $('e-spr').className='poke-spr enemy';
  $('p-spr').style.opacity=''; $('e-spr').style.opacity='';
  $('result-ov').classList.remove('show');
  $('next-btn').style.display='';

  const isBoss=(G.currentStage===9||G.currentStage===19||G.currentStage===24||G.currentStage===29);
  $('stage-badge').textContent=`${isBoss?'👑 BOSS — ':''}Cửa ${G.currentStage+1}/30`;
  $('stage-badge').style.borderColor=isBoss?'#FF8C00':'var(--yellow)';
  $('stage-badge').style.color=isBoss?'#FF8C00':'var(--yellow)';

  updateHP(); buildSkills();
  msg(`${eBase.name} (Cửa ${G.currentStage+1}) xuất hiện!`);
  showScreen('battle-screen');
}

/* ══════════════════════════════════════
   HP
══════════════════════════════════════ */
function updateHP(){
  const pP=Math.max(0,G.pHP/G.pMaxHP*100);
  const eP=Math.max(0,G.eHP/G.eMaxHP*100);
  const col=p=>p>50?'var(--hp-green)':p>20?'var(--hp-yellow)':'var(--hp-red)';
  const pb=$('p-hp-bar'),eb=$('e-hp-bar');
  pb.style.width=pP+'%'; pb.style.background=col(pP);
  eb.style.width=eP+'%'; eb.style.background=col(eP);
  $('p-hp-num').textContent=`${Math.max(0,G.pHP)}/${G.pMaxHP}`;
  $('e-hp-num').textContent=`${Math.max(0,G.eHP)}/${G.eMaxHP}`;
}

/* ══════════════════════════════════════
   SKILLS
══════════════════════════════════════ */
function buildSkills(){
  const g=$('skills-grid'); g.innerHTML='';
  G.player.skills.forEach((sk,i)=>{
    const b=document.createElement('button');
    b.className=`sk-btn type-${sk.type}`;
    b.id=`sb${i}`;
    b.innerHTML=`<span class="sn">${sk.emoji} ${sk.name}</span><span class="sp">PP ${G.pPP[i]}/${sk.pp}</span>`;
    b.addEventListener('click',()=>playerTurn(i));
    g.appendChild(b);
  });
}
function refreshSkills(){
  G.player.skills.forEach((_,i)=>{
    const b=$(`sb${i}`);
    if(b) b.querySelector('.sp').textContent=`PP ${G.pPP[i]}/${G.player.skills[i].pp}`;
  });
}
function lockSkills(v){
  G.player.skills.forEach((_,i)=>{
    const b=$(`sb${i}`);
    if(b) b.disabled=v||G.pPP[i]<=0;
  });
}

/* ══════════════════════════════════════
   MESSAGE
══════════════════════════════════════ */
function msg(t){$('msg-txt').textContent=t;}

/* ══════════════════════════════════════
   ANIMATION
══════════════════════════════════════ */
function animSpr(id,cls,dur){
  return new Promise(res=>{
    const el=$(id);
    const base=id==='e-spr'?'poke-spr enemy':'poke-spr player';
    el.className=base+' '+cls;
    setTimeout(()=>{el.className=base;res();},dur);
  });
}
function flash(color){
  const el=$('skill-fx');
  el.style.background=color; el.classList.remove('flash');
  void el.offsetWidth; el.classList.add('flash');
}
function particles(emoji,x,y,n=5){
  const f=$('battle-field');
  for(let i=0;i<n;i++){
    const p=document.createElement('div');
    p.className='ptcl';
    const a=Math.random()*Math.PI*2, d=38+Math.random()*55;
    p.style.cssText=`left:${x}%;top:${y}%;--tx:${Math.cos(a)*d}px;--ty:${Math.sin(a)*d}px;--dur:${.45+Math.random()*.45}s;--dly:${Math.random()*.18}s`;
    p.textContent=emoji; f.appendChild(p);
    setTimeout(()=>p.remove(),900);
  }
}
function dmgPop(dmg,isPlayer,crit){
  const f=$('battle-field'),p=document.createElement('div');
  p.className=`dmg-pop ${isPlayer?'p':'e'}`;
  p.textContent=`-${dmg}`; f.appendChild(p);
  if(crit){
    const c=document.createElement('div');
    c.className=`crit-pop ${isPlayer?'p':'e'}`;
    c.textContent='CRITICAL!'; f.appendChild(c);
    setTimeout(()=>c.remove(),1100);
  }
  setTimeout(()=>p.remove(),1300);
}

/* ══════════════════════════════════════
   COMBAT
══════════════════════════════════════ */
async function playerTurn(idx){
  if(G.turn!=='player') return;
  const sk=G.player.skills[idx];
  if(G.pPP[idx]<=0) return;
  G.turn='busy'; lockSkills(true);
  G.pPP[idx]--; refreshSkills();
  const isCrit=Math.random()<0.1;
  msg(`${G.player.name} dùng ${sk.name}!${isCrit?' Critical hit!':''}`);
  await animSpr('p-spr','atk',340);
  flash(sk.fx+'99'); particles(sk.emoji,65,26,6);
  let dmg=rnd(...sk.dmg);
  if(isCrit) dmg=Math.round(dmg*1.5);
  G.eHP=Math.max(0,G.eHP-dmg);
  dmgPop(dmg,false,isCrit);
  await animSpr('e-spr','shake',400);
  updateHP(); await wait(520);
  if(G.eHP<=0){await animSpr('e-spr','faint',650);await wait(280);endBattle(true);return;}
  msg(`${G.enemy.name} chuẩn bị phản công...`);
  await wait(750); await enemyTurn();
}

async function enemyTurn(){
  const sk=G.enemy.skills[Math.floor(Math.random()*G.enemy.skills.length)];
  const isCrit=Math.random()<0.08;
  // Boss stages have higher crit chance
  const bossStage=(G.currentStage>=25);
  const finalCrit=bossStage?Math.random()<0.15:isCrit;
  msg(`${G.enemy.name} dùng ${sk.name}!${finalCrit?' Critical hit!':''}`);
  await animSpr('e-spr','atk',340);
  flash(sk.fx+'99'); particles(sk.emoji,25,62,6);
  let dmg=rnd(...sk.dmg);
  if(finalCrit) dmg=Math.round(dmg*1.5);
  G.pHP=Math.max(0,G.pHP-dmg);
  dmgPop(dmg,true,finalCrit);
  await animSpr('p-spr','shake',400);
  updateHP(); await wait(520);
  if(G.pHP<=0){await animSpr('p-spr','faint',650);await wait(280);endBattle(false);return;}
  msg(`${G.player.name} còn ${G.pHP} HP. Chọn skill!`);
  G.turn='player'; lockSkills(false);
}

/* ══════════════════════════════════════
   END BATTLE
══════════════════════════════════════ */
function endBattle(won){
  G.turn='busy';
  const rt=$('res-txt'),rs=$('res-sub');
  const isBoss=(G.currentStage===9||G.currentStage===19||G.currentStage===24||G.currentStage===29);
  if(won){
    // mark cleared
    if(!G.clearedStages.includes(G.currentStage)){
      G.clearedStages.push(G.currentStage);
      saveProgress();
    }
    rt.textContent='🏆 YOU WIN!'; rt.className='res-txt win';
    const stageNum=G.currentStage+1;
    $('stage-clear-txt').textContent=isBoss?`👑 BOSS CỬA ${stageNum} ĐÃ BẠI!`:`✅ Cửa ${stageNum} hoàn thành!`;
    rs.textContent=`${G.player.name} chiến thắng!\nĐã qua ${G.clearedStages.length}/30 cửa.`;

    // check if all done
    if(G.clearedStages.length>=30){
      $('next-btn').style.display='none';
      rs.textContent+='\n🌟 BẠN ĐÃ CHINH PHỤC TẤT CẢ!';
      setTimeout(()=>showScreen('win-screen'),2500);
    } else {
      $('next-btn').style.display='';
    }
  } else {
    rt.textContent='💀 YOU LOSE...'; rt.className='res-txt lose';
    $('stage-clear-txt').textContent='';
    rs.textContent=`${G.player.name} đã ngã xuống...\nHãy thử lại cửa ${G.currentStage+1}!`;
    $('next-btn').style.display='none';
  }
  $('result-ov').classList.add('show');
}

/* buttons */
$('next-btn').addEventListener('click',()=>{
  if(G.currentStage<29){
    G.currentStage=G.clearedStages.length;
    startBattle();
  } else {
    showScreen('win-screen');
  }
});
$('retry-btn').addEventListener('click',()=>startBattle());
$('back-sel-btn').addEventListener('click',()=>{buildSelect();showScreen('select-screen');});
$('battle-back-btn').addEventListener('click',()=>{buildSelect();showScreen('select-screen');});
/* win screen */
$('win-restart').addEventListener('click',()=>{
  G.clearedStages=[]; G.currentStage=0;
  saveProgress();
  buildSelect(); showScreen('select-screen');
});

/* ══════════════════════════════════════
   TYPE CHART MODAL
══════════════════════════════════════ */
const TYPE_DATA = {
  normal:   {emoji:'⬜', color:'#A8A878', label:'Thường'},
  fire:     {emoji:'🔥', color:'#F08030', label:'Lửa'},
  water:    {emoji:'💧', color:'#6890F0', label:'Nước'},
  grass:    {emoji:'🌿', color:'#78C850', label:'Cỏ'},
  electric: {emoji:'⚡', color:'#F8D030', label:'Điện'},
  ice:      {emoji:'❄️', color:'#98D8D8', label:'Băng'},
  fighting: {emoji:'👊', color:'#C03028', label:'Chiến'},
  poison:   {emoji:'☣️', color:'#A040A0', label:'Độc'},
  ground:   {emoji:'🌋', color:'#E0C068', label:'Đất'},
  flying:   {emoji:'🦅', color:'#A890F0', label:'Bay'},
  psychic:  {emoji:'🔮', color:'#F85888', label:'Tâm linh'},
  rock:     {emoji:'🪨', color:'#B8A038', label:'Đá'},
  ghost:    {emoji:'👻', color:'#705898', label:'Ma'},
  dragon:   {emoji:'🐉', color:'#7038F8', label:'Rồng'},
  dark:     {emoji:'🌑', color:'#705848', label:'Tối'},
  steel:    {emoji:'⚙️', color:'#B8B8D0', label:'Thép'},
};

// strong[attacker] = [defenders it hits x2]
// weak[attacker]   = [defenders it hits x0.5]
// immune[attacker] = [defenders it hits x0]
const TYPE_CHART = {
  normal:   { strong:[], weak:['rock','steel'], immune:['ghost'] },
  fire:     { strong:['grass','ice','steel','bug'], weak:['fire','water','rock','dragon'], immune:[] },
  water:    { strong:['fire','ground','rock'], weak:['water','grass','dragon'], immune:[] },
  grass:    { strong:['water','ground','rock'], weak:['fire','grass','poison','flying','bug','dragon','steel'], immune:[] },
  electric: { strong:['water','flying'], weak:['electric','grass','dragon'], immune:['ground'] },
  ice:      { strong:['grass','ground','flying','dragon'], weak:['water','ice','steel'], immune:[] },
  fighting: { strong:['normal','ice','rock','dark','steel'], weak:['poison','flying','psychic','bug'], immune:['ghost'] },
  poison:   { strong:['grass'], weak:['poison','ground','rock','ghost','steel'], immune:[] },
  ground:   { strong:['fire','electric','poison','rock','steel'], weak:['grass','bug'], immune:['flying'] },
  flying:   { strong:['grass','fighting','bug'], weak:['electric','rock','steel'], immune:[] },
  psychic:  { strong:['fighting','poison'], weak:['psychic','steel'], immune:['dark'] },
  rock:     { strong:['fire','ice','flying','bug'], weak:['fighting','ground','steel'], immune:[] },
  ghost:    { strong:['ghost','psychic'], weak:['dark'], immune:['normal','fighting'] },
  dragon:   { strong:['dragon'], weak:['steel'], immune:['fairy'] },
  dark:     { strong:['ghost','psychic'], weak:['fighting','dark'], immune:[] },
  steel:    { strong:['ice','rock'], weak:['fire','water','electric','steel'], immune:[] },
};

let typeModalActive = null;

function buildTypeModal(){
  const tabs = $('type-modal-tabs');
  const body = $('type-modal-body');
  tabs.innerHTML = '';

  Object.entries(TYPE_DATA).forEach(([key, t]) => {
    const btn = document.createElement('button');
    btn.className = 'type-tab' + (typeModalActive === key ? ' active' : '');
    btn.style.background = t.color;
    btn.textContent = t.emoji + ' ' + t.label;
    btn.addEventListener('click', () => {
      typeModalActive = key;
      buildTypeModal();
    });
    tabs.appendChild(btn);
  });

  if (!typeModalActive) {
    body.innerHTML = '<div class="type-empty" style="padding:20px 0;font-size:11px;color:#2a5a08;">👆 Chọn một hệ để xem chi tiết</div>';
    return;
  }

  const chart = TYPE_CHART[typeModalActive];
  const td = TYPE_DATA[typeModalActive];

  function chipHTML(types) {
    if (!types.length) return '<div class="type-empty">— Không có —</div>';
    return '<div class="type-row">' + types.map(t => {
      const d = TYPE_DATA[t] || {emoji:'❓', color:'#999', label:t};
      return `<span class="type-chip" style="background:${d.color}">${d.emoji} ${d.label}</span>`;
    }).join('') + '</div>';
  }

  body.innerHTML = `
    <div class="type-section-title">
      <span class="type-chip" style="background:${td.color}">${td.emoji} ${td.label}</span>
      đối với:
    </div>
    <div class="type-section-title" style="color:#c00;font-size:clamp(8px,2.2vw,11px);">⚔️ Khắc chế (×2)</div>
    ${chipHTML(chart.strong)}
    <div class="type-divider"></div>
    <div class="type-section-title" style="color:#e08000;font-size:clamp(8px,2.2vw,11px);">🛡️ Kháng cự (×0.5)</div>
    ${chipHTML(chart.weak)}
    <div class="type-divider"></div>
    <div class="type-section-title" style="color:#555;font-size:clamp(8px,2.2vw,11px);">🚫 Miễn nhiễm (×0)</div>
    ${chipHTML(chart.immune)}
  `;
}

$('type-chart-btn').addEventListener('click', () => {
  typeModalActive = null;
  buildTypeModal();
  $('type-modal').classList.add('open');
});
$('type-modal-close').addEventListener('click', () => {
  $('type-modal').classList.remove('open');
});
$('type-modal').addEventListener('click', e => {
  if (e.target === $('type-modal')) $('type-modal').classList.remove('open');
});
/* ── Reset confirm modal ── */
$('reset-btn').addEventListener('click', () => {
  $('reset-modal').classList.add('open');
});
$('reset-cancel-btn').addEventListener('click', () => {
  $('reset-modal').classList.remove('open');
});
$('reset-modal').addEventListener('click', e => {
  if(e.target === $('reset-modal')) $('reset-modal').classList.remove('open');
});
$('reset-confirm-btn').addEventListener('click', () => {
  G.clearedStages = []; G.currentStage = 0; G.chosenKey = null;
  saveProgress();
  $('reset-modal').classList.remove('open');
  buildSelect();
});

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
mkStars();
mkNature();
loadProgress();
buildSelect();

// iOS: prevent double-tap zoom on interactive elements
document.addEventListener('touchend',e=>{
  if(e.target.closest('button,.poke-card,.map-cell')) e.preventDefault();
},{passive:false});

// iOS: prevent rubber-band scroll on non-scrollable screens
document.addEventListener('touchmove',e=>{
  // Allow scroll only on elements that actually overflow
  let el=e.target;
  while(el&&el!==document.body){
    const style=getComputedStyle(el);
    const overflow=style.overflow+style.overflowY;
    if(overflow.includes('scroll')||overflow.includes('auto')){
      // check if it can actually scroll
      if(el.scrollHeight>el.clientHeight) return;
    }
    el=el.parentElement;
  }
  e.preventDefault();
},{passive:false});