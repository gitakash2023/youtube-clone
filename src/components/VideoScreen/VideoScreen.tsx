"useClient";
import React from "react";
import { MainContent } from "./MainContent/MainContent";
import Header from "./Header/Header";
import { MyContextProvider } from "../MyContext/MyContext";
import LeftSideBar from "./../LeftSideBar/LeftSideBar";

export const VideoScreen = () => {
  return (
    <>
      <MyContextProvider>
        <>
          <div className="flex ">
            <div className="mt-4 ">
              <LeftSideBar />
            </div>
            <div className="w-4/5 ml-4 ">
              <Header />
              <MainContent />
            </div>
          </div>
        </>
      </MyContextProvider>
    </>
  );
};
