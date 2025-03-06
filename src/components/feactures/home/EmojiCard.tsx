import { Emoji } from "@/components/feactures/home/interfaces/emojis.interface";

interface EmojiCardProps {
  emoji: Emoji;
}

function EmojiCard({ emoji }: EmojiCardProps) {
  const handleCopy = () => {
    window.navigator.clipboard.writeText(emoji.symbol);
  };

  return (
    <div className="square" onClick={handleCopy}>
      <span>{emoji.symbol}</span>
      <div className="flex flex-col items-center gap-1">
        <small>{emoji.name}</small>
        <span className="text-sm bg-linear-to-bl from-violet-500 to-fuchsia-500 px-2 text-white rounded-xl">
          {emoji.category}
        </span>
      </div>
    </div>
  );
}

export default EmojiCard;
