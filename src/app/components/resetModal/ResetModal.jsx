import {
  ContainerModal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./ResetModalStyled";
const ResetModal = ({ closeResetModal }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeResetModal}>x</ModalCloseButton>
        <ContainerModal>
          <ModalTitle>
            <span className="title">Jogo reiniciado!</span>
          </ModalTitle>
        </ContainerModal>
      </ModalContent>
    </ModalOverlay>
  );
};
export default ResetModal;
