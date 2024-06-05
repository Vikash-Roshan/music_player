import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Little Help",
      artist: "Yasper",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/bfcc48c6ff50bc940bc37c43eef9e516d3a6c979-150x150.jpg",
      audio: "https://stream.chillhop.com/mp3/71623",
      color: ["#C4B562", "#45452C"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Seasons",
      artist: "Aso",
      cover: "https://i.scdn.co/image/ab67616d0000b273ba0e05b03186101235c60afa",
      audio: "https://stream.chillhop.com/mp3/8609",
      color: ["#C4B562", "#45452C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Somewhat",
      artist: "Mono:Magic",
      cover: "https://i.scdn.co/image/8f52da9e4164f40620e5129f71a0891043b61224",
      audio: "https://stream.chillhop.com/mp3/8466",
      color: ["#C4B562", "#45452C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Castles in My Cup",
      artist: "Birocratic",
      cover: "https://i.scdn.co/image/8f52da9e4164f40620e5129f71a0891043b61224",
      audio: "https://stream.chillhop.com/mp3/8490",
      color: ["#C4B562", "#45452C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "rekindling",
      artist: "LÌndećis",
      cover: "https://i.scdn.co/image/ab67616d0000b273b2c83945f53b51e9ce6e4986",
      audio: "https://stream.chillhop.com/mp3/9273",
      color: ["#C4B562", "#45452C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Beyond the Sun",
      artist: "IHF",
      cover: "https://i.scdn.co/image/ab67616d0000b2739604bf26e3aa4064882e5f36",
      audio: "https://stream.chillhop.com/mp3/8566",
      color: ["#A2A59C", "#2D1F1A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kauai",
      artist: "Loyae",
      audio: "https://stream.chillhop.com/mp3/74258",
      cover: "https://i.scdn.co/image/ab67616d0000b2739e0935026146d94080489fae",
      color: ["#F7A040", "#6D4711"],
      id: uuidv4(),
      active: false,
    },
  ];
}
