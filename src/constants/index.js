import {
  chillhits,
  classicRock,
  hits80,
  megaHits,
  rapcaviar,
  todayTop,
  top2010,
  vivaLatino,
  spotify,
  card,
  alone,
  madrid,
  arca10Mil,
  nonstop,
  pokerface,
  liberianGirl,
  greedy,
  dreams,
} from "../assets";

const randomPlaylist = [
  {
    title: "Today's Top Hits",
    desc: "Tate McRae is on top of the Hottest 50!",
    image: todayTop,
  },
  {
    title: "RapCaviar",
    desc: "New music from Drake, Lil Wayne and 2 Chainz.",
    image: rapcaviar,
  },
  {
    title: "All Out 2010s",
    desc: "The biggest songs of the 2010s.",
    image: top2010,
  },
  {
    title: "Rock Classics",
    desc: "Rock legends & epic songs that continue to inspire..",
    image: classicRock,
  },
  {
    title: "Chill Hits",
    desc: "Kick back to the best new and recent chill hits.",
    image: chillhits,
  },
  {
    title: "Viva Latino",
    desc: "Today's top Latin hits, elevando nuestra música..",
    image: vivaLatino,
  },
  {
    title: "Mega Hit Mix",
    desc: "A mega mix of 75 favorites from the lst few years!",
    image: megaHits,
  },
  {
    title: "All Out 80s",
    desc: "The biggest songs of the 1980s. Cover: Michael..",
    image: hits80,
  },
];

const randomSongs = [
  {
    id: Math.random() * Date.now(),
    title: "Greedy",
    artist: "Tate McRae",
    image: card,
    mp3: new Audio(greedy),
  },

  {
    id: Math.random() * Date.now(),
    title: "NonStop",
    artist: "Drake",
    image: card,
    mp3: new Audio(nonstop),
  },
  {
    id: Math.random() * Date.now(),
    title: "Poker Face",
    artist: "Lady Gaga",
    image: card,
    mp3: new Audio(pokerface),
  },
  {
    id: Math.random() * Date.now(),
    title: "Dreams",
    artist: "The Camberries",
    image: card,
    mp3: new Audio(dreams),
  },
  {
    id: Math.random() * Date.now(),
    title: "Alone",
    artist: "Alan Walker & Ava Max",
    image: card,
    mp3: new Audio(alone),
  },
  {
    id: Math.random() * Date.now(),
    title: "Arca 10 Mil",
    artist: "Arcangel & Feid",
    image: card,
    mp3: new Audio(arca10Mil),
  },
  {
    id: Math.random() * Date.now(),
    title: "Masdrid City",
    artist: "Ana Mena",
    image: card,
    mp3: new Audio(madrid),
  },
  {
    id: Math.random() * Date.now(),
    title: "Liberian Girl",
    artist: "Michael Jackson",
    image: card,
    mp3: new Audio(liberianGirl),
  },
];
export { randomPlaylist, spotify, randomSongs };
