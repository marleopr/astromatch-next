import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ContainerModal = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 170%;
`
export const ModalContent = styled.div`
  position: relative;
  width: 20rem;
  height: 10rem;
  border-radius: 10px;
  border-bottom: 10px solid #ffe2e2;
  background-color: white;
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 24px;
  top: 1px;
  right: 10px;
  border: none;
  color: #ffe2e2;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #fcaaaa;
  }
`;
export const ModalTitle = styled.h2`
  font-weight: 600;
  padding: 35px 60px 20px 60px;
  .title {
    color: #fcaaaa;
    margin-right: 5px;
  }
  @media screen and (max-device-width: 480px) {
    font-size: 20px;
    padding: 25px 40px 15px 40px;
  }
`;
