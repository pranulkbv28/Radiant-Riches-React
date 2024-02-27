import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ListItem = (props) => {
  return (
    <li className={props.listItem}>
      <CheckCircleOutlineIcon />
      {props.children}
    </li>
  );
};

export default ListItem;
