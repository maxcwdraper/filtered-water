import "./Button.css";
import Balatro from "./blocks/Backgrounds/Balatro/Balatro.tsx";

type ButtonProps = {
  handleClick: () => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ handleClick, className }) => {
  return (
    <div>
      <Balatro />
      <button onClick={handleClick} className={className}>
        Filter
      </button>
    </div>
  );
};

export default Button;
