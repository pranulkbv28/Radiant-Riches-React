import React from "react";
import compIcon from "../../assests/compIcon.png";

const Card2 = (props) => {
  return (
    <div className={props.cardClassName}>
      <div className={props.imageContainerClassname}>
        <img src={compIcon} alt="Icon" />
      </div>
      <div className={props.discountContainerClassName}>
        <span>20% Off</span> <span>Limited Time</span>
      </div>
      <div className={props.cardTitleClassName}>WebBuilder1</div>
      <div className={props.cardDescClassName}>
        Computer Modern classic with wix support
      </div>
      <div className={props.pricingContainerClassName}>
        <span className={props.spClassName}>$39.96</span>{" "}
        <span className={props.mrpClassName}>$49.96</span>{" "}
        <span className={props.discountRateClassName}>(20% Off)</span>
      </div>
      <div className={props.viewContainerClassName}>View Deal</div>
    </div>
  );
};

export default Card2;
