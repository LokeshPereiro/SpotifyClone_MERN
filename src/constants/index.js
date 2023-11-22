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
export { randomPlaylist, spotify };
