import React from "react";
import compIcon from "../../assests/compIcon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ListItem from "../listItem/ListItem";

const Card = (props) => {
  const fullStars = Math.floor(props.starsNum);
  const halfStars = props.starsNum % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const printStars = () => {
    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarRateRoundedIcon sx={{ color: "gold" }} />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<StarHalfRoundedIcon sx={{ color: "gold" }} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOutlineRoundedIcon sx={{ color: "gold" }} />);
    }
    return stars;
  };

  return (
    <div className={props.cardClassName}>
      <div className={props.cardNumberContainerClassName}>
        {props.cardNumer}
      </div>
      <div
        className={
          props.cardNumer === 1 || props.cardNumer === 2
            ? props.bestTagContainerClassName
            : "d-none"
        }
      >
        {props.cardNumer === 1 ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <EmojiEventsOutlinedIcon /> Best Choice
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <DiamondOutlinedIcon /> Best Value
          </div>
        )}
      </div>
      <div className={props.cardImageClassName}>
        <div>
          <img src={compIcon} alt="Icon" />
          <p>{props.imageDesc}</p>
        </div>
      </div>
      {props.cardNumer !== 4 ? (
        <div className={props.CardDescClassName}>
          <p>
            <b>{props.firstSubHead}</b> {props.FirstSubHeadDesc}
          </p>
          <span>
            <b>Main Highlights</b>
          </span>
          <p className={props.highlightsClassName}>
            [What you get]: {props.highlightsDesc}
          </p>
          <p
            style={{ color: "skyblue", display: "flex", alignItems: "center" }}
          >
            Show more <KeyboardArrowDownIcon sx={{ color: "skyblue" }} />
          </p>
        </div>
      ) : (
        <div className={props.CardDescClassName}>
          <p>
            <b>{props.firstSubHead}</b> {props.FirstSubHeadDesc}
          </p>
          <div className={props.discountContainerClassName}>26% Off</div>
          <br />
          <span>
            <b>Main Highlights</b>
          </span>
          <p
            className={`${props.highlightsClassName} ${props.highlightsClassName4}`}
          >
            <div>
              <span>9.9</span> Building Responsive
            </div>
            <div>
              <span>8.9</span> Cool
            </div>
            <div>
              <span>8.9</span> Docs
            </div>
          </p>
          <p className={props.loveClassName}>
            Why we love it
            <ul>
              <ListItem listItem={props.listItem}>Documentation</ListItem>
              <ListItem listItem={props.listItem}>Easy to Use</ListItem>
              <ListItem listItem={props.listItem}>Out Of Box</ListItem>
            </ul>
          </p>
          <p
            style={{ color: "skyblue", display: "flex", alignItems: "center" }}
          >
            Show more <KeyboardArrowDownIcon sx={{ color: "skyblue" }} />
          </p>
        </div>
      )}
      <div className={props.moreContainerClassName}>
        <div className={props.ratingContainerClassName}>
          <h1>{props.rating}</h1>
          <p>
            {props.rating > 9.5
              ? "Exceptional"
              : props.rating > 9.2
              ? "Excellent"
              : "Very Good"}
          </p>
          {printStars()}
        </div>
        <div className={props.viewButtonContainerClassName}>
          <h2>View</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
