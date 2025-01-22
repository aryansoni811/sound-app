import { useState, createContext } from "react";

export const ChapterContext = createContext({
  chapter: 0,
  setChapter: (_chapter: number) => {},
});

export default function ChapterProvider({ children }: { children: React.ReactNode }) {
  const [chapter, setChapter] = useState(0);

  return (
    <ChapterContext.Provider value={{ chapter, setChapter }}>{children}</ChapterContext.Provider>
  );
}
