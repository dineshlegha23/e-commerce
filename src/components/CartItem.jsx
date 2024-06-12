import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartAmount } from "../store/cartSlice";
import { removeFromCart } from "../store/cartSlice";
import { formatPrice } from "../utils/helpers";

const CartItem = ({ id, image, name, price, amount, color, stock }) => {
  const dispatch = useDispatch();

  return (
    <article className="grid grid-cols-[318px_1fr_1fr_1fr_auto] md:grid-cols-[2fr_1fr_0.5fr] justify-items-center items-center tracking-widest">
      <div className="flex gap-4 xs:gap-2 w-full items-center">
        <img
          src={image}
          alt={name}
          className="min-w-32 max-w-32 md:max-w-20 md:min-w-20 xs:max-w-16 xs:min-w-16 h-20 xs:h-16 rounded-lg"
        />
        <div className="flex flex-col items-start xs:gap-1">
          <h5 className="text-sm capitalize font-bold xs:text-xs">{name}</h5>
          <p className="flex items-center gap-2 text-black/50 text-sm xs:text-xs tracking-wide font-semibold">
            Color :
            <span
              className="h-4 w-4 inline-block rounded-full bg-red-400"
              style={{ backgroundColor: color }}
            ></span>
          </p>
          <p className="text-brown md:block xs:text-xs font-semibold hidden">
            {formatPrice(price)}
          </p>
        </div>
      </div>
      <p className="text-brown md:hidden">{formatPrice(price)}</p>
      <AmountButtons
        amount={amount}
        setAmount={setCartAmount}
        stock={stock}
        dispatch={dispatch}
        id={id}
      />
      <p className="text-black/50 font-semibold md:hidden">
        {formatPrice(price * amount)}
      </p>
      <FaTrash
        onClick={() => dispatch(removeFromCart({ id }))}
        color="white"
        size={25}
        className="bg-red-700 rounded-md p-[6px] cursor-pointer"
      />
    </article>
  );
};

export default CartItem;
