"use client";
import { createContext } from "react";
import { Avatar, ListItemContainer } from "./MatchListItemStyled";

const Context = createContext();

const MatchListItem = (props) => {
const profile = props.profile
  return (
    <ListItemContainer>
      <Avatar src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>
  );
};
export default MatchListItem;
