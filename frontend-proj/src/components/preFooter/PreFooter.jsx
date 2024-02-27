import React from "react";
import styles from "./preFooter.module.css";
import Card2 from "../card2/Card2";

const PreFooter = () => {
  const printCards = () => {
    let i = 1;
    let cards = [];
    for (; i <= 3; i++) {
      cards.push(
        <Card2
          key={i}
          cardClassName={styles.cardClass}
          imageContainerClassname={styles.imageContainerClass}
          discountContainerClassName={styles.discountContainerClass}
          cardTitleClassName={styles.cardTitleClass}
          cardDescClassName={styles.cardDescClass}
          pricingContainerClassName={styles.pricingContainerClass}
          spClassName={styles.spClass}
          mrpClassName={styles.mrpClass}
          discountRateClassName={styles.discountRateClass}
          viewContainerClassName={styles.viewContainerClass}
        />
      );
    }
    return cards;
  };

  return (
    <div className={styles.body}>
      <h1 className={styles.preFooterTitle}>
        Related deals you might like for
      </h1>
      <div className={styles.cardContainer}>{printCards()}</div>
    </div>
  );
};

export default PreFooter;
