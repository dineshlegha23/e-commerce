import { Link } from "react-router-dom";
import Links from "../components/Links";

const Checkout = () => {
  return (
    <section className="min-h-[calc(100vh-174px)]">
      <Links home={true} link={"checkout"} />
      <div className="flex flex-col items-center justify-center mt-20 gap-10">
        <h1 className="text-5xl font-bold">Thank you for placing your order</h1>
        <Link
          to={"/"}
          className="py-2 px-2 bg-brown hover:bg-brown/90 text-white rounded-md"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
