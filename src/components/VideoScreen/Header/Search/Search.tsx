import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { brotliDecompress } from "zlib";
import classes from "./Search.module.scss";

export const Search = ({ searchString, setSearchString, handleSearch }) => {
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
              setSearchString(e.target.value);
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
