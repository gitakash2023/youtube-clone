import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { brotliDecompress } from "zlib";
<<<<<<< HEAD
import classes from "./Search.module.scss";
=======
>>>>>>> 969c0955f4f160e9026cd4867d9943b284f1af87

interface SearchProps { searchString: string, setSearchString: (s: string) => void, handleSearch: () => void }

export const Search = ({ searchString, setSearchString, handleSearch }: SearchProps) => {
  return (
    <>
      <div className={classes.searchContainer}>
        <div>
          <input
            className={classes.searchInput}
            value={searchString}
            type="text"
<<<<<<< HEAD
=======
            onChange={(e) => {
              setSearchString(e.target.value)
            }}
>>>>>>> 969c0955f4f160e9026cd4867d9943b284f1af87
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
