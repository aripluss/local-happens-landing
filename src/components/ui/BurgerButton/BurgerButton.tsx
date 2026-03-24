import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

type BurgerButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onToggle,
}) => {
  return (
    <button
      className="burger-btn"
      onClick={onToggle}
      style={{ backgroundColor: "transparent" }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
    </button>
  );
};
