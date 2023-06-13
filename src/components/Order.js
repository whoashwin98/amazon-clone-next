import React from "react";
import Currency from "react-currency-formatter";
import moment from "moment";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-sm">Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">Total</p>
          <p>
            <Currency quantity={amount} currency="USD" /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} currency="USD" />
          </p>

          <p className="text-xs whitespace-nowrap self-end flex-1 sm:text-xl text-right text-blue-500">
            {items.length} items
          </p>

          <p
            className="absolute top-2 right-2 w-40 lg:w-72 truncate
          text-xs whitespace-nowrap"
          >
            Order ID : {id}
          </p>
        </div>

        <div className="p-5 sm:p-10">
          <div className="flex space-x-6 overflow-x-auto">
            {images.map((image) => (
              <img src={image} className="h-20 object-contain sm:h-32" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
