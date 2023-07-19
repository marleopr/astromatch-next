import styled from "styled-components";
import Image from "next/image";
export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  /* padding: 16px; */
  width: 22rem;
`;
export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const ProfilePicture = styled.img`
  width: 100%;
  height: 300px;
  display: block;
`;
export const ProfileInfo = styled.div`
  padding: 0 16px;
  height: 100px;
  .name-age {
    font-size: 18px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }
`;
