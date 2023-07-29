import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { brotliDecompress } from "zlib";
import { getSuggestionList } from "@/services/youtubeService.ts/search";

export const Search = ({ searchString, setSearchString, handleSearch }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <input
            value={searchString}
            type="text"
            onChange={(e) =>{
              getSuggestionList(e.target.value)
              setSearchString(e.target.value)

            }}
            placeholder=" Search"
            style={{
              border: "0.5px solid gray",
              borderRadius: "40px 0 0 40px",
              paddingLeft: "10px",
              width: "300px",
              height: "25.5px",
              fontSize: "10px",
              color: "gray",
            }}
          />
        </div>
        <div
          style={{
            border: "0.5px solid gray",

            borderRadius: "0 40px 40px 0",
            width: "50px",
            paddingLeft: "10px",
            height: "25.5px",
            marginLeft: "0",
            outline: "none",
          }}
        >
          <SearchSharpIcon onClick={handleSearch} />
        </div>
      </div>
    </>
  );
};
