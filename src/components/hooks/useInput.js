import { useState, useEffect } from "react";
import { getAllCurrencies } from "../../api";
import { setRates } from "../../reducer/curencySlice";
import { useSelector, useDispatch } from "react-redux";
import { CONSTANTS } from "../../constants";
const { BASE_CURRENCY_IN, BASE_CURRENCY_TO, BASE_PRICE_IN, BASE_PRICE_TO } =
  CONSTANTS;
export const useInput = () => {
  const dispatch = useDispatch();

  const formatNum = (num) => num.toFixed(4);
  const { rates } = useSelector((state) => state);

  const [price1, setPrice1] = useState(BASE_PRICE_TO);
  const [currency1, setCurrency1] = useState(BASE_CURRENCY_TO);
  const [price2, setPrice2] = useState(BASE_PRICE_IN);
  const [currency2, setCurrency2] = useState(BASE_CURRENCY_IN);

  useEffect(() => {
    getAllCurrencies().then(({ data }) => {
      dispatch(setRates(data.rates));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(rates[currency2]);
  const handlerPriceChange1 = (price1) => {
    setPrice2(formatNum((price1 * rates[currency2]) / rates[currency1]));
    setPrice1(price1);
  };

  const handlerCurrency1 = (currency1) => {
    setPrice2(formatNum((price1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handlerPriceChange2 = (price2) => {
    setPrice1(formatNum((price2 * rates[currency1]) / rates[currency2]));
    setPrice2(price2);
  };
  const handlerCurrencyChange2 = (currency2) => {
    setPrice1(formatNum((price2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  return {
    price1,
    currency1,
    price2,
    currency2,
    handlerPriceChange1,
    handlerCurrency1,
    handlerPriceChange2,
    handlerCurrencyChange2,
  };
};
