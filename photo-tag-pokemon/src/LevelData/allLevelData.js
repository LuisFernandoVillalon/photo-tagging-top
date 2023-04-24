import HouseLevel from "../assets/00.jpg";
import CityLevel from "../assets/01.jpg";
import TowerLevel from "../assets/02.jpg";
import Pinsir from "../assets/pokemon/0127Pinsir.png";
import Kabuto from "../assets/pokemon/0140Kabuto.png";
import Dragonair from "../assets/pokemon/0148Dragonair.png";
import Golbat from "../assets/pokemon/0042Golbat.png";
import Weedle from "../assets/pokemon/0013Weedle.png";
import Gloom from "../assets/pokemon/0044Gloom.png";
import Natu from "../assets/pokemon/0177Natu.png";
import Onix from "../assets/pokemon/0095Onix.png";
import Igglybuff from "../assets/pokemon/0174Igglybuff.png";


const Zero = {
  level: 0,
  name: "Full House",
  board: HouseLevel,
  cover: "https://www.j-opolis.com/fhretro/images/fh_logos/fh_title.jpg",
  characters: [
    {
      name: "Golbat",
      profile: Golbat,
      found: false,
      xCoord: [62,65],
      yCoord: [37,40],
    },
    {
      name: "Weedle",
      profile: Weedle,
      found: false,
      xCoord: [64, 68],
      yCoord: [61, 66],
    },
    {
      name: "Gloom",
      profile: Gloom,
      found: false,
      xCoord: [20, 26],
      yCoord: [88, 94],
    },
  ],
}
const One = {
  level: 1,
  name: "Saffron City",
  board: CityLevel,
  cover: "https://www.serebii.net/pokearth/maps/kanto-frlg/36.png",
  characters: [
    {
      name: "Pinsir",
      profile: Pinsir,
      found: false,
      xCoord: [10, 19],
      yCoord: [100, 105],
    },
    {
      name: "Kabuto",
      profile: Kabuto,
      found: false,
      xCoord: [51, 59],
      yCoord: [73, 77],
    },
    {
      name: "Dragonair",
      profile: Dragonair,
      found: false,
      xCoord: [31, 39],
      yCoord: [33, 42],
    },
  ],
}
const Two = {
  level: 2,
  name: "Sky Tower",
  board: TowerLevel,
  cover: "https://lparchive.org/Pokemon-Mystery-Dungeon-Red-Rescue-Team/Update%2057/6-Image04.png",
  characters: [
    {
      name: "Natu",
      profile: Natu,
      found: false,
      xCoord: [0, 4],
      yCoord: [64, 67],
    },
    {
      name: "Onix",
      profile: Onix,
      found: false,
      xCoord: [65, 73],
      yCoord: [105, 110],
    },
    {
      name: "Igglybuff",
      profile: Igglybuff,
      found: false,
      xCoord: [28, 39],
      yCoord: [53, 61],
    },
  ],
}
const levelData = [
  Zero,
  One,
  Two
];

export default levelData;