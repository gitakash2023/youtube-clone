import React from "react";
import { Search } from "./Search/Search";
// import FilterPage from "./FilterButtons/FilterList";
import { Category } from "@/components/Category/category";

const Header = () => {
  return (
    <>
      <Search />
      <Category />
      {/* <FilterPage /> */}
    </>
  );
};

export default Header;
