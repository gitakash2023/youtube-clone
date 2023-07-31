import React from "react";
import { Search } from "./Search/Search";

export const Header = ({ searchString, setSearchString, handleSearch }) => {
  return (
    <>
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
        handleSearch={handleSearch}
      />
    </>
  );
};
