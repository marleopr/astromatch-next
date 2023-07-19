"use client";
import { createContext } from "react";
import {
  ProfileCardContainer,
  ProfilePicture,
  ProfileInfo,
} from "./ProfileCardStyled";

const Context = createContext();

const ProfileCard = (props) => {
  const profile = props.profile;
  return (
    <ProfileCardContainer>
      <ProfilePicture src={profile.photo} />
      <ProfileInfo>
        <p className="name-age">
          {profile.name}, {profile.age}
        </p>
        <p>{profile.bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};
export default ProfileCard;
