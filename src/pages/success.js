import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon 2.0 | Order Placed</title>
      </Head>
      <Header />;
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Order Confirmed, Thank You!</h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation to your
            e-mail once your item has been shipped. To check the status of your
            order, go to <b>My Orders</b>.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go To My Orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
