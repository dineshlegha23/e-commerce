import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, setAmount, stock }) => {
  const descreaseAmount = () => {
    if (amount === 1) {
      return;
    } else {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const increaseAmount = () => {
    if (amount === stock) {
      return;
    } else {
      setAmount((prevAmount) => prevAmount + 1);
    }
  };

  return (
    <div className="flex items-center gap-5 px-4 pt-6 pb-4">
      <button>
        <FaMinus size={14} cursor={"pointer"} onClick={descreaseAmount} />
      </button>

      <span className="text-4xl font-bold text-black/80 w-10 text-center">
        {amount}
      </span>
      <button>
        <FaPlus size={14} cursor={"pointer"} onClick={increaseAmount} />
      </button>
    </div>
  );
};

export default AmountButtons;
