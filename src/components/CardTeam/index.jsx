import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import team from "../../../teams-description.json";
import * as S from "./styles";

export default function CardTeam(props) {
  const { homeInfo } = props;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (homeInfo === []) return;
    let data = homeInfo.team;
    setTeams(data);
  }, [homeInfo]);

  return (
    <S.ContainerImage>
      <S.Container className="team container">
        <h2>Team of Collaborators</h2>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {teams
            ? teams.map((item) => {
                return (
                  <S.TeamCard>
                    <div>
                      <div className="avatar">
                        <AccountCircleIcon />
                      </div>

                      <div>
                        <h5>{item.name}</h5>
                        <span>{item.description}</span>
                      </div>
                    </div>
                    <div className="LinkIcons">
                      <Link to={item.github}>
                        <GitHubIcon />
                      </Link>
                      <Link to={item.linkedin}>
                        <LinkedInIcon />
                      </Link>
                    </div>
                  </S.TeamCard>
                );
              })
            : null}
        </Grid>
      </S.Container>
    </S.ContainerImage>
  );
}
