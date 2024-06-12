import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ id, amount, setAmount, stock, dispatch }) => {
  const descreaseAmount = () => {
    if (amount === 1) {
      return;
    } else {
      if (dispatch) {
        dispatch(setAmount({ type: "decrease", id }));
      }
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const increaseAmount = () => {
    if (amount === stock) {
      return;
    } else {
      if (dispatch) {
        dispatch(setAmount({ type: "increase", id }));
      } else {
        setAmount((prevAmount) => prevAmount + 1);
      }
    }
  };

  return (
    <div
      className={`flex items-center ${
        id ? "gap-2 xs:gap-0" : "gap-5"
      } px-4 pt-6 pb-4`}
    >
      <button>
        <FaMinus size={14} cursor={"pointer"} onClick={descreaseAmount} />
      </button>

      <span
        className={`${
          id ? "text-2xl md:text-lg" : "text-4xl"
        } font-bold text-black/80 w-10 text-center`}
      >
        {amount}
      </span>
      <button>
        <FaPlus size={14} cursor={"pointer"} onClick={increaseAmount} />
      </button>
    </div>
  );
};

export default AmountButtons;
