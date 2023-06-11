import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0 | Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex mx-auto max-w-screen-2xl">
        <div className="flex-grow shadow-sm m-5">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Cart Is Empty." : "Your Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col bg-white m-5 p-10 shadow-md ${
            items.length === 0 && "hidden"
          }`}
        >
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button  mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign In to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
