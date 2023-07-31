import React from "react";
import { Search } from "./Search/Search";

<<<<<<< HEAD
export const Header = ({ searchString, setSearchString, handleSearch }) => {
  return (
    <>
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
        handleSearch={handleSearch}
      />
=======
interface HeaderProps { searchString: string, setSearchString: (s: string) => void, handleSearch: () => void }

export const Header = ({ searchString, setSearchString, handleSearch }: HeaderProps) => {
  return (
    <>
      <Search searchString={searchString} setSearchString={setSearchString} handleSearch={handleSearch} />
>>>>>>> 969c0955f4f160e9026cd4867d9943b284f1af87
    </>
  );
};
