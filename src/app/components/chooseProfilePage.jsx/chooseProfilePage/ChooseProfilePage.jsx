"use client";
import { createContext, useEffect, useState } from "react";
import ProfileCard from "../profileCard/ProfileCard";
import ChooseButtons from "../chooseButtons/ChooseButtons";
import axios from "axios";
import ResetButton from "../../resetButton/ResetButton";
import LoaderAnimation from "../../loadersButtons/LoaderAnimation";
import {
  Main,
  LoaderContainer,
  ResetContainer,
  CardsContainer,
  ButtonContainer,
  ContentContainer,
} from "./ChooseProfilePageStyled";
import ModalMatch from "../../modalMatch/ModalMatch";
import ResetModal from "../../resetModal/ResetModal";

const Context = createContext();

const ChooseProfilePage = (prop) => {
  const [profileToChoose, setProfileToChoose] = useState(undefined);
  const [isRequestComplete, setIsRequestComplete] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const openResetModal = () => {
    setResetModalOpen(true);
  };
  const closeResetModal = () => {
    setResetModalOpen(false);
  };

  const getProfileToChoose = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/person"
      );
      setProfileToChoose(response.data.profile);
      setIsRequestComplete(true);
    } catch (error) {
      console.error("Erro na requisição:", error);
      setIsRequestComplete(false);
    }
  };

  const chooseProfile = async (choice) => {
    try {
      const body = {
        id: profileToChoose.id,
        choice: choice,
      };

      setProfileToChoose(undefined);

      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/choose-person",
        body
      );

      console.log(response);
      getProfileToChoose();

      if (response.data.isMatch) {
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const onClickNo = () => {
    chooseProfile(false);
  };
  const onClickYes = () => {
    chooseProfile(true);
  };

  const handleReset = async () => {
    try {
      setProfileToChoose(undefined);
      setIsRequestComplete(false);

      await axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/clear"
      );

      console.log("Reset feito com sucesso!");
      await getProfileToChoose();
    } catch (error) {
      console.error("Erro ao resetar:", error);
    }
  };

  return (
    <Main>
      {profileToChoose ? (
        <ContentContainer>
          <CardsContainer>
            <ProfileCard key={profileToChoose} profile={profileToChoose} />
          </CardsContainer>
          <ButtonContainer>
            <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
          </ButtonContainer>
          {modalOpen && (
            <ModalMatch modalOpen={modalOpen} closeModal={closeModal} />
          )}
        </ContentContainer>
      ) : (
        <ContentContainer>
          <>
            <LoaderContainer>
              <LoaderAnimation />
            </LoaderContainer>
            <ResetContainer>
              {isRequestComplete && (
                <ResetButton
                  onReset={handleReset}
                  openResetModal={openResetModal}
                />
              )}
              {resetModalOpen && (
                <ResetModal closeResetModal={closeResetModal} />
              )}
            </ResetContainer>
          </>
        </ContentContainer>
      )}
    </Main>
  );
};
export default ChooseProfilePage;
