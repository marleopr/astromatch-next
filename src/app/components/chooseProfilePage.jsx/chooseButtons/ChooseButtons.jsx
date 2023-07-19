"use client";
import { createContext, useState } from "react";
import { ButtonsContainer } from "./ChooseButtonsStyled";
import LikeButton, { DislikeButton } from "../../loadersButtons/LikeButton";
import axios from "axios";

const Context = createContext();

const ChooseButtons = (props) => {
  // const [choice, setChoice] = useState({});

  return (
    <ButtonsContainer>
      {/* <button onClick={() => props.onClickNo()}>Não</button> */}
      {/* <button onClick={() => props.onClickYes()}>Sim</button> */}
      <DislikeButton onClick={() => props.onClickNo()} />
      <LikeButton onClick={() => props.onClickYes()} />
    </ButtonsContainer>
  );
};
export default ChooseButtons;
