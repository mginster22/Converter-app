import React from "react";
import Container from "../Container/index";
import InputWrapper from "../InputWrapper";
import { useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import styles from "./Header.module.scss";

const Header = () => {

  const inputValue =useInput()
  const { rates } = useSelector((state) => state);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Be the first to know the exchange rate
          </h1>
          <p>Ukrainian hryvnia {(Number(rates.USD) / 36.804).toFixed(4)} USD</p>
        </div>
        <div className={styles.wrapper}>
          <InputWrapper
            currency={inputValue.currency1}
            currencies={Object.keys(rates)}
            price={inputValue.price1}
            onPriceChange={inputValue.handlerPriceChange1}
            onCurrencyChange={inputValue.handlerCurrency1}
          />
          <InputWrapper
            currency={inputValue.currency2}
            currencies={Object.keys(rates)}
            price={inputValue.price2}
            onPriceChange={inputValue.handlerPriceChange2}
            onCurrencyChange={inputValue.handlerCurrencyChange2}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
