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
    title: "Battisa",
    image: "trees.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: ["Introduction", "32- Pillars", "Garbh Griah", "Current Situation"],
    description: [
      "बारसूर के प्रवेश द्वार पर बाईं ओर बत्तीसा मंदिर खंडहर रूप में देखा जा सकता है।  शिलालेखों के अनुसार, इस मंदिर का निर्माण 1030 ई. में हुआ था। नागवंशीय शासक सोमेश्वर देव की रानी द्वारा। इस मंदिर में 32 पत्थर के स्तंभों का उपयोग होने के कारण यह बत्तीसा मंदिर गुड़ी के नाम से प्रसिद्ध हो गया। इसमें दो गर्भगृह हैं और विशाल मंडप पत्थर के खंडों से बना है। एक सुंदर मूर्तिकला नंदी बाहर गर्भगृह की ओर मुख करके विराजमान है। 11वीं सदी के इस मंदिर की वास्तुकला विस्मयकारी है। वर्तमान में इसे राज्य सरकार द्वारा संरक्षित घोषित किया गया है।",
      "Chapter Description 2",
      "Chapter Description 3",
      "Chpater Description 4",
    ],
  },
  {
    id: 2,
    title: "Danteshwari Mandir",
    image: "river.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: ["Chapter 1", "chapter 2", "chapter 3", "chapter 4"],
    description: [
      "Danteshwari Temple is Hindu temple, dedicated to Goddess Danteshwari, and is one of the 52 Shakti Peethas, shrines of Shakti, the divine feminine, spread across India. The temple built in the 14th century, is situated in Dantewada, a town situated 80 km from Jagdalpur Tehsil, Chhattisgarh.",
      "Chapter Description 2",
      "Chapter Description 3",
      "Chpater Description 4",
    ],
  },
  {
    id: 3,
    title: "Mama Bhacha",
    image: "meditate-under-tree.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: ["Chapter 1", "chapter 2", "chapter 3", "chapter 4"],
    description: [
      "11वीं शताब्दी में निर्मित यह मंदिर खजुराहो मंदिर का समकालीन है। एक लोककथा के अनुसार गंगवंशीय शासक का भतीजा (बांचा) बुद्धिमान था। उन्होंने उत्कल से एक राजमिस्त्री को बुलाया और मंदिर का निर्माण कराया, इसकी भव्यता से ईर्ष्या करते हुए, शासक ने अपने ही भतीजे के खिलाफ लड़ाई लड़ी। भतीजे ने अपना सिर काटकर इस मंदिर में रख दिया। यह मंदिर मध्यम अवस्था में है और इसकी वास्तुकला अत्यंत भव्य है।",
      "Chapter Description 2",
      "Chapter Description 3",
      "Chpater Description 4",
    ],
  },
  {
    id: 4,
    title: "Twin Ganesha",
    image: "beach.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: ["Chapter 1", "chapter 2", "chapter 3", "chapter 4"],
    description: [
      "Twin Ganesha is famous for its historical significance. The city Barsur is named after king Banasur, who was a great devotee of Lord Shiva. It is said that daughters of Banasur, Usha and his minister’s daughter Chitralekha were best friends. They were the devotee of Ganesha. So they asked their fathers to construct a temple for them. They created this twin Ganesha temple of Barsur.",
      "Chapter Description 2",
      "Chapter Description 3",
      "Chpater Description 4",
    ],
  },
  {
    id: 5,
    title: "Solha Khambha",
    image: "yosemite-stars.webp",
    audio: ["danteshwari-english.mp3", "trees.mp3", "river.mp3", "waterfall.mp3"],
    chaptersTitle: ["Chapter 1", "chapter 2", "chapter 3", "chapter 4"],
    description: [
      "Solah Khambaha Chapter 1",
      "Solah Khambaha Chapter 2",
      "Solah Khambaha Chapter 3",
      "Solah Khambaha Chapter 4",
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
