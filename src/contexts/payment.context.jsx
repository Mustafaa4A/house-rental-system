import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const PaymentContext = createContext({
  price: 0,
  setPrice: () => {},
  tax: 0,
  setTax: () => {},
  discountPercent: 2,
  setDiscount: () => {},
  total: 0,
});

export const PaymentProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(10);
  const [discountPercent, setDiscountPercent] = useState(2);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      Number(price) +
        Number((discountPercent * price) / 100) +
        Number(price * tax) / 100
    );
  }, [price, tax, discountPercent]);

  const value = {
    price,
    setPrice,
    tax,
    setTax,
    discountPercent,
    setDiscountPercent,
    total,
  };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
