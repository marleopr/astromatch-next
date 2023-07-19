import styled from "styled-components";

export const ResetButtonContainer = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #fcaaaa;

  span,
  svg {
    transition: 200ms;
  }

  .text {
    transform: translateX(25px);
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
  }

  .icon {
    position: absolute;
    border-left: 1px solid #ffffff;
    transform: translateX(110px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 15px;
    fill: #ffffff;
    transform: translateX(-4px);

  }

  &:hover {
    background: #f98f8f;
  }

  &:hover .text {
    color: transparent;
  }

  &:hover .icon {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }

  &:focus {
    outline: none;
  }

  &:active .icon svg {
    transform: scale(0.8);
  }
`;
