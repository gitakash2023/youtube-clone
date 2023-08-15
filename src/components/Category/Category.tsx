import React, { useContext } from "react";
import MyContext from "../MyContext/MyContext";
import { Chip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import classes from "./category.module.scss";

export const Category = () => {
  const { categories, handleCategoryClick } = useContext(MyContext);
  return (
    <>
      <div className={classes.chip}>
        <ArrowBackIosIcon />
        {categories?.map((item) => (
          <Chip
            label={item.snippet.title}
            size="small"
            onClick={() => handleCategoryClick(item.id)}
          />
        ))}
        <ArrowForwardIosIcon />
      </div>
    </>
  );
};
