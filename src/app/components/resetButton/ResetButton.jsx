"use client";
import { createContext, useState } from "react";
import axios from "axios";
import { ResetButtonContainer } from "./ResetButtonStyled";
import ResetModal from "../resetModal/ResetModal";
const Context = createContext();

const ResetButton = ({ onReset }) => {
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const openResetModal = () => {
    setResetModalOpen(true);
    console.log("openResetModal", openResetModal);
  };
  const closeResetModal = () => {
    setResetModalOpen(false);
  };

  const handleClick = () => {
    onReset(); // Chama a função de resetar
    openResetModal();
  };

  return (
    <div>
      <ResetButtonContainer onClick={handleClick} className="noselect">
        <span className="text">Recomeçar!</span>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </ResetButtonContainer>
      {resetModalOpen && (
        <ResetModal
          openResetModal={openResetModal}
          closeResetModal={closeResetModal}
        />
      )}
    </div>
  );
};
export default ResetButton;
