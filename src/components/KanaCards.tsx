import React from "react";
import "./styles.css";

interface KanaCardProps {
  type: "HIRAGANA" | "KATAKANA";
  character: string;
}

const KanaCard: React.FC<KanaCardProps> = ({ type, character }) => {
  return (
    <div>
      <article className="kana-card">
        <span className="card-name"> {type} </span>
        <span className="card-character"> {character}</span>
      </article>
    </div>
  );
};

const KanaCards: React.FC = () => {
  return (
    <div className="kana-cards-container">
      <KanaCard type="HIRAGANA" character="あ" />
      <KanaCard type="KATAKANA" character="ア" />
    </div>
  );
};
export default KanaCards;
