import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffe2e2;
  &:hover {
    background-color: #ffe2e2;
    cursor: pointer;
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
