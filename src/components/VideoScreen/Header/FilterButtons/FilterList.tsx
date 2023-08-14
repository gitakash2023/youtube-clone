import MyContext from "@/components/MyContext/MyContext";
import React, { useContext, useState } from "react";
import classes from "./Filter.module.scss";

const FilterList: React.FC = () => {
  const { selectedCategory, setSelectedCategory, categoryHandler } =
    useContext(MyContext);

  return (
    <div>
      <div>
        <button className={classes.filterButoon} onClick={categoryHandler}>
          all
        </button>
      </div>
    </div>
  );
};

export default FilterList;
