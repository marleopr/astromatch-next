import {
  ContainerModal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
} from "./ModalMatchStyled";
import LoaderIsMatch from "../loadersButtons/LoaderIsMatch";
const ModalMatch = ({ closeModal }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
        <ContainerModal>
          <LoaderIsMatch />
          <ModalTitle>
            <span className="title">Deu Match!</span>
          </ModalTitle>
        </ContainerModal>
      </ModalContent>
    </ModalOverlay>
  );
};
export default ModalMatch;
