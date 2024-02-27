import React from "react";
import styles from "./mainContent.module.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Card from "../card/Card";

const MainContent = () => {
  let cardDeets = [
    {
      starsNum: 5,
      cardClassName: styles.cardClass,
      cardNumberContainerClassName: styles.cardNumberContainerClass,
      cardNumer: 1,
      bestTagContainerClassName: styles.bestTagContainerClass,
      cardImageClassName: styles.cardImageClass,
      imageDesc: "Builder 1",
      CardDescClassName: styles.CardDescClass,
      firstSubHead: "WixPro 72-Inch Responsive Website Builder- ",
      FirstSubHeadDesc:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlightsClassName: styles.highlightsClass,
      highlightsDesc:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      moreContainerClassName: styles.moreContainerClass,
      ratingContainerClassName: styles.ratingContainerClass,
      rating: "9.8",
      viewButtonContainerClassName: styles.viewButtonContainerClass,
    },
    {
      starsNum: 4.5,
      cardClassName: styles.cardClass,
      cardNumberContainerClassName: styles.cardNumberContainerClass,
      cardNumer: 2,
      bestTagContainerClassName: styles.bestTagContainerClass,
      cardImageClassName: styles.cardImageClass,
      imageDesc: "Builder",
      CardDescClassName: styles.CardDescClass,
      firstSubHead: "SiteCraft68-Inch Ultimate Web Design Studio- ",
      FirstSubHeadDesc:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White).",
      highlightsClassName: styles.highlightsClass,
      highlightsDesc:
        "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      moreContainerClassName: styles.moreContainerClass,
      ratingContainerClassName: styles.ratingContainerClass,
      rating: "9.5",
      viewButtonContainerClassName: styles.viewButtonContainerClass,
    },
    {
      starsNum: 3.8,
      cardClassName: styles.cardClass,
      cardNumberContainerClassName: styles.cardNumberContainerClass,
      cardNumer: 3,
      bestTagContainerClassName: styles.bestTagContainerClass,
      cardImageClassName: styles.cardImageClass,
      imageDesc: "Builder 1",
      CardDescClassName: styles.CardDescClass,
      firstSubHead: "WixPro 72-Inch Responsive Website Builder- ",
      FirstSubHeadDesc:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue).",
      highlightsClassName: styles.highlightsClass,
      highlightsDesc:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      moreContainerClassName: styles.moreContainerClass,
      ratingContainerClassName: styles.ratingContainerClass,
      rating: "9.3",
      viewButtonContainerClassName: styles.viewButtonContainerClass,
    },
    {
      starsNum: 3.3,
      cardClassName: styles.cardClass,
      cardNumberContainerClassName: styles.cardNumberContainerClass,
      cardNumer: 4,
      bestTagContainerClassName: styles.bestTagContainerClass,
      cardImageClassName: styles.cardImageClass,
      imageDesc: "CDK",
      CardDescClassName: styles.CardDescClass,
      firstSubHead: "CDK Responsive Builder: ",
      FirstSubHeadDesc:
        "An extensive library of widgets and app, and detailed step-by-step guides.",
      discountContainerClassName: styles.discountContainerClass,
      highlightsClassName: styles.highlightsClass,
      highlightsClassName4: styles.highlightsClass4,
      loveClassName: styles.loveClass,
      moreContainerClassName: styles.moreContainerClass,
      ratingContainerClassName: styles.ratingContainerClass,
      rating: "9.1",
      viewButtonContainerClassName: styles.viewButtonContainerClass,
      listItem: styles.listItem,
    },
  ];

  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Best Website builders in the US</h1>
      <hr />
      <div className={styles.menu}>
        <div>
          <span>
            <CheckCircleOutlineRoundedIcon /> Last Updated - February 22, 2020
          </span>
          <span>
            <InfoOutlinedIcon /> Advertising Disclosure
          </span>
        </div>
        <div>
          <span className={styles.relevant}>
            Top Relevant <KeyboardArrowDownIcon />
          </span>
        </div>
      </div>
      <hr />
      <div className={styles.typeMenu}>
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>
      <div className={styles.pathMenu}>
        <span>Home</span>
        <KeyboardArrowRightRoundedIcon />
        <span>Hosting for all</span>
        <KeyboardArrowRightRoundedIcon />
        <span>Hosting</span>
        <KeyboardArrowRightRoundedIcon />
        <span>Hosting6</span>
        <KeyboardArrowRightRoundedIcon />
        <span>Hosting5</span>
      </div>
      <div className={styles.cardContainer}>
        {cardDeets.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
