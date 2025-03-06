import { useState, useEffect } from "react";
import EmojiCard from "@/components/feactures/home/EmojiCard";
import { dataEmojis } from "@/components/feactures/home/data/emojis";
import { Emoji } from "./interfaces/emojis.interface";

interface EmojiGridProps {
  search: string;
}

function EmojiGrid({ search }: EmojiGridProps) {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const filteredEmojis = dataEmojis.filter((emoji) => {
      return (
        emoji.category.toLowerCase().includes(search.toLowerCase()) ||
        emoji.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setEmojis(filteredEmojis);
    setLoading(false);
  }, [search]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {emojis.map((emoji) => (
        <EmojiCard key={emoji.id} emoji={emoji} />
      ))}
    </div>
  );
}

export default EmojiGrid;
