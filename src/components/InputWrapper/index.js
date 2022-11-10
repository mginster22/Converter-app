import React from "react";
import styles from "./InputWrapper.module.scss";
const InputWrapper = ({
  currencies,
  currency,
  price,
  onPriceChange,
  onCurrencyChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="number"
        value={price}
        onChange={(e) => onPriceChange(e.target.value)}
        className={styles.input_price}
      />
      <div className={styles.border}></div>
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className={styles.select}
      >
        {currencies.map((c, i) => (
          <option key={i}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default InputWrapper;
