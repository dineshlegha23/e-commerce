import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCartAmount } from "../store/cartSlice";

const CartItem = ({
  id,
  image,
  name,
  price,
  amount,
  subtotal,
  color,
  stock,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="grid grid-cols-[318px_1fr_1fr_1fr_auto] justify-items-center items-center tracking-widest">
      <div className="flex gap-4 justify-center items-center">
        <img src={image} alt={name} className="w-32 h-20 rounded-lg" />
        <div className="flex flex-col justify-center items-start">
          <h5 className="text-sm capitalize font-bold">{name}</h5>
          <p className="flex items-center gap-2 text-black/50 text-sm tracking-wide font-semibold">
            Color :
            <span
              className="h-4 w-4 inline-block rounded-full bg-red-400"
              style={{ backgroundColor: color }}
            ></span>
          </p>
        </div>
      </div>
      <p className="text-brown">${price}</p>
      <AmountButtons
        amount={amount}
        setAmount={setCartAmount}
        stock={stock}
        dispatch={dispatch}
        id={id}
      />
      <p className="text-black/70">${subtotal}</p>
      <FaTrash
        color="white"
        size={25}
        className="bg-red-700 rounded-md p-[6px] cursor-pointer"
      />
    </article>
  );
};

// const Wrapper = styled.article`
//   .subtotal {
//     display: none;
//   }
//   .price {
//     display: none;
//   }
//   display: grid;
//   grid-template-columns: 200px auto auto;
//   grid-template-rows: 75px;
//   gap: 3rem 1rem;
//   justify-items: center;
//   margin-bottom: 3rem;
//   align-items: center;
//   .title {
//     grid-template-rows: 75px;
//     display: grid;
//     grid-template-columns: 75px 125px;
//     align-items: center;
//     text-align: left;
//     gap: 1rem;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   h5 {
//     font-size: 0.75rem;
//     margin-bottom: 0;
//   }

//   .color {
//     color: var(--clr-grey-5);
//     font-size: 0.75rem;
//     letter-spacing: var(--spacing);
//     text-transform: capitalize;
//     margin-bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     span {
//       display: inline-block;
//       width: 0.5rem;
//       height: 0.5rem;
//       background: red;
//       margin-left: 0.5rem;
//       border-radius: var(--radius);
//     }
//   }
//   .price-small {
//     color: var(--clr-primary-5);
//   }
//   .amount-btns {
//     width: 75px;
//     button {
//       width: 1rem;
//       height: 0.5rem;
//       font-size: 0.75rem;
//     }
//     h2 {
//       font-size: 1rem;
//     }
//   }
//   .remove-btn {
//     color: var(--clr-white);
//     background: transparent;
//     border: transparent;
//     letter-spacing: var(--spacing);
//     background: var(--clr-red-dark);
//     width: 1.5rem;
//     height: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: var(--radius);
//     font-size: 0.75rem;
//     cursor: pointer;
//   }
//   @media (min-width: 776px) {
//     .subtotal {
//       display: block;
//       margin-bottom: 0;
//       color: var(--clr-grey-5);
//       font-weight: 400;
//       font-size: 1rem;
//     }
//     .price-small {
//       display: none;
//     }
//     .price {
//       display: block;
//       font-size: 1rem;
//       color: var(--clr-primary-5);
//       font-weight: 400;
//     }
//     .name {
//       font-size: 0.85rem;
//     }
//     .color {
//       font-size: 0.85rem;
//       span {
//         width: 0.75rem;
//         height: 0.75rem;
//       }
//     }
//     grid-template-columns: 1fr 1fr 1fr 1fr auto;
//     align-items: center;
//     grid-template-rows: 75px;
//     img {
//       height: 100%;
//     }
//     .title {
//       height: 100%;
//       display: grid;
//       grid-template-columns: 100px 200px;
//       align-items: center;
//       gap: 1rem;
//       text-align: left;
//     }
//     .amount-btns {
//       width: 100px;
//       button {
//         width: 1.5rem;
//         height: 1rem;
//         font-size: 1rem;
//       }
//       h2 {
//         font-size: 1.5rem;
//       }
//     }
//   }
// `

export default CartItem;
