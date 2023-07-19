import styled from "styled-components";
import Image from "next/image";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  /* margin-bottom: 10px; */
`;

export const ButtonBar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
