import HouseLevel from "../assets/00.jpg";
import CityLevel from "../assets/01.jpg";
import TowerLevel from "../assets/02.jpg";

const Zero = {
  level: 0,
  name: "Full House",
  board: HouseLevel,
  cover: "https://www.j-opolis.com/fhretro/images/fh_logos/fh_title.jpg",
  characters: [
    {
      name: "Golbat",
      profile: "https://archives.bulbagarden.net/media/upload/7/76/0042Golbat.png",
      found: false,
      xCoord: [62,65],
      yCoord: [37,40],
    },
    {
      name: "Weedle",
      profile: "https://archives.bulbagarden.net/media/upload/3/36/0013Weedle.png",
      found: false,
      xCoord: [64, 68],
      yCoord: [61, 66],
    },
    {
      name: "Gloom",
      profile: "https://archives.bulbagarden.net/media/upload/e/e0/0044Gloom.png",
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
      profile: "https://archives.bulbagarden.net/media/upload/a/a9/0127Pinsir.png",
      found: false,
      xCoord: [10, 19],
      yCoord: [100, 105],
    },
    {
      name: "Kabuto",
      profile: "https://archives.bulbagarden.net/media/upload/d/d2/0140Kabuto.png",
      found: false,
      xCoord: [51, 59],
      yCoord: [73, 77],
    },
    {
      name: "Dragonair",
      profile: "https://archives.bulbagarden.net/media/upload/0/0d/0148Dragonair.png",
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
      profile: "https://archives.bulbagarden.net/media/upload/7/71/0177Natu.png",
      found: false,
      xCoord: [0, 4],
      yCoord: [64, 67],
    },
    {
      name: "Onix",
      profile: "https://archives.bulbagarden.net/media/upload/b/b7/0095Onix.png",
      found: false,
      xCoord: [65, 73],
      yCoord: [105, 110],
    },
    {
      name: "Igglybuff",
      profile: "https://archives.bulbagarden.net/media/upload/0/06/0174Igglybuff.png",
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