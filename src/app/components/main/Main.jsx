"use client";
import { createContext, useState } from "react";
import AppBar from "../appBar/AppBar";
import ChooseProfilePage from "../chooseProfilePage.jsx/chooseProfilePage/ChooseProfilePage";
import MatchListPage from "../matchListPage/MatchListPage";
import { Cards, Container, MainContainer } from "./MainStyled";

const Context = createContext();

const Main = () => {
  const [selectedPage, setSelectedPage] = useState("choose-profile");
  const renderSelectedPage = () => {
    return selectedPage === "choose-profile" ? (
      <ChooseProfilePage />
    ) : selectedPage === "match-list" ? (
      <MatchListPage />
    ) : (
      <ChooseProfilePage />
    );
  };
  const gotToChooseProfilePage = () => {
    setSelectedPage("choose-profile");
  };
  const goToMatchListPage = () => {
    setSelectedPage("match-list");
  };
  return (
    <MainContainer>
      <Container>
        <AppBar
          gotToChooseProfilePage={gotToChooseProfilePage}
          goToMatchListPage={goToMatchListPage}
          selectedPage={selectedPage}
        />
        <Cards>{renderSelectedPage()}</Cards>
      </Container>
    </MainContainer>
  );
};
export default Main;
