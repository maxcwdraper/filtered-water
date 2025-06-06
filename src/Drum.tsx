import "./Drum.css";
import Button from "./Button.tsx";
import { useState } from "react";

type DrumProps = {
  debris: string[];
};

const Drum: React.FC<DrumProps> = ({ debris }) => {
  const [filteredWater, setFilteredWater] = useState<string[]>(debris);
  const handleWaterFilter = () => {
    let filteredDebris = filteredWater.filter((word: string): boolean => word === "salt " || word === "calcite " || word === "rubber ");
    setFilteredWater(filteredDebris);
  };
  return (
    <div>
      <Button handleClick={handleWaterFilter} className="filter" />
      <div className="contaminant-box">
        <p className="contaminants">{filteredWater}</p>
      </div>
    </div>
  );
};

export default Drum;
