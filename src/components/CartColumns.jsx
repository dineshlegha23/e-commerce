import React from "react";

const CartColumns = () => {
  return (
    <>
      <div className="grid grid-cols-[316px_1fr_1fr_1fr_auto] md:hidden justify-items-center text-black/50 font-medium tracking-widest">
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div className="w-6"></div>
      </div>
      <hr className="mt-6 mb-11 text-black/20 md:hidden" />
    </>
  );
};

// const Wrapper = styled.div`
//   display: none;
//   @media (min-width: 776px) {
//     display: block;
//     .content {
//       display: grid;
//       grid-template-columns: 316px 1fr 1fr 1fr auto;
//       justify-items: center;
//       column-gap: 1rem;
//       h5 {
//         color: var(--clr-grey-5);
//         font-weight: 400;
//       }
//     }

//     span {
//       width: 2rem;
//       height: 2rem;
//     }
//     hr {
//       margin-top: 1rem;
//       margin-bottom: 3rem;
//     }
//   }
// `

export default CartColumns;
