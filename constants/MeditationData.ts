export interface MeditationType {
  id: number;
  title: string;
  image: string;
  audio: Array<string>;
  chaptersTitle: Array<string>;
  description: Array<string>;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
    id: 1,
    title: "battisa-title",
    image: "trees.webp",
    audio: ["battisa-hindi.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: [
      "battisa-chapter-1",
      "battisa-chapter-2",
      "battisa-chapter-3",
      "battisa-chapter-4",
    ],
    description: [
      "battisa-description-1",
      "battisa-description-2",
      "battisa-description-3",
      "battisa-description-4",
    ],
  },
  {
    id: 2,
    title: "danteshwari-mandir-title",
    image: "river.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: [
      "danteshwari-chapter-1",
      "danteshwari-chapter-2",
      "danteshwari-chapter-3",
      "danteshwari-chapter-4",
    ],
    description: [
      "danteshwari-description-1",
      "danteshwari-description-2",
      "danteshwari-description-3",
      "danteshwari-description-4",
    ],
  },
  {
    id: 3,
    title: "mama-bhacha-title",
    image: "meditate-under-tree.webp",
    audio: ["mama-bhacha-hindi.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: [
      "mama-bhacha-chapter-1",
      "mama-bhacha-chapter-2",
      "mama-bhacha-chapter-3",
      "mama-bhacha-chapter-4",
    ],
    description: [
      "mama-bhacha-description-1",
      "mama-bhacha-description-2",
      "mama-bhacha-description-3",
      "mama-bhacha-description-4",
    ],
  },
  {
    id: 4,
    title: "twin-ganesha-title",
    image: "beach.webp",
    audio: ["twin-ganesha-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: [
      "twin-ganesha-chapter-1",
      "twin-ganesha-chapter-2",
      "twin-ganesha-chapter-3",
      "twin-ganesha-chapter-4",
    ],
    description: [
      "twin-ganesha-description-1",
      "twin-ganesha-description-2",
      "twin-ganesha-description-3",
      "twin-ganesha-description-4",
    ],
  },
  {
    id: 5,
    title: "solah-khambaha-title",
    image: "yosemite-stars.webp",
    audio: ["yosemite-stars.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: [
      "solah-khambaha-chapter-1",
      "solah-khambaha-chapter-2",
      "solah-khambaha-chapter-3",
      "solah-khambaha-chapter-4",
    ],
    description: [
      "solah-khambaha-description-1",
      "solah-khambaha-description-2",
      "solah-khambaha-description-3",
      "solah-khambaha-description-4",
    ],
  },
];

export const AUDIO_FILES: { [key: string]: any } = {
  "battisa-hindi.mp3": require("@/assets/dantewada-audios/battisa-hindi.mp3"),
  "danteshwari-english.mp3": require("@/assets/dantewada-audios/danteshwari-english.mp3"),
  "mama-bhacha-hindi.mp3": require("@/assets/dantewada-audios/mama-bhacha-hindi.mp3"),
  "twin-ganesha-english.mp3": require("@/assets/dantewada-audios/twin-ganesha-english.mp3"),
  "trees.mp3": require("@/assets/audio/trees.mp3"),
  "river.mp3": require("@/assets/audio/river.mp3"),
  "yosemite-stars.mp3": require("@/assets/audio/yosemite-stars.mp3"),
  "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};
