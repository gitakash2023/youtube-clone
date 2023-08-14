import React, { useContext } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
 import classes from "./Search.module.scss";
import MyContext from "@/components/MyContext/MyContext";

export const Search = () => {
  const { searchString, setSearchString, handleSearch } = useContext(MyContext);

  return (
    <>
      <div className={classes.searchContainer}>
        <div>
          <input
            className={classes.searchInput}
            value={searchString}
            type="text"
            placeholder=" Search"
            onChange={(e) => {
              setSearchString?.(e.target.value as string);
            }}
          />
        </div>
        <div className={classes.searchIcon}>
          <SearchSharpIcon onClick={handleSearch} />
        </div>
      </div>
    </>
  );
};
