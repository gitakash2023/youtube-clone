"useClient";
import React from "react";
import { MainContent } from "./MainContent/MainContent";
import Header from "./Header/Header";
import { MyContextProvider } from "../MyContext/MyContext";

export const VideoScreen = () => {
  return (
    <>
      <MyContextProvider>
        <>
          <Header />
          <MainContent />
        </>
      </MyContextProvider>
    </>
  );
};
