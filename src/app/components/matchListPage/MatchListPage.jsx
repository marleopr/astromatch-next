"use client";
import { createContext, useEffect, useState } from "react";
import MatchListItem from "./MatchListItem";
import { ListContainer } from "./MatchListPageStyled";
import axios from "axios";

const Context = createContext();
const MatchListPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marleo-piber-alves/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      });
  }, []);
  return (
    <ListContainer>
      {matches.map((profile) => {
        return <MatchListItem key={profile} profile={profile} />;
      })}
    </ListContainer>
  );
};
export default MatchListPage;
