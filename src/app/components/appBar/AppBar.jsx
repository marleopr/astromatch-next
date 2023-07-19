"use client";
import { createContext } from "react";
import { AppBarContainer, ButtonBar } from "./AppBarStyled";
import buttonImg from "../../../../public/troca.png";
import Image from "next/image";
import AstroMatchButton from "../loadersButtons/AstroMatchButton";
const Context = createContext();

const AppBar = (props) => {
  return (
    <AppBarContainer>
      {/* {props.selectedPage === "choose-profile" ? (
        <ButtonBar src={buttonImg} onClick={props.goToMatchListPage} />
      ) : (
        <ButtonBar src={buttonImg} onClick={props.gotToChooseProfilePage} />
      )} */}
      {props.selectedPage === "choose-profile" ? (
        <AstroMatchButton onClick={props.goToMatchListPage} />
      ) : (
        <AstroMatchButton onClick={props.gotToChooseProfilePage} />
      )}
    </AppBarContainer>
  );
};
export default AppBar;
