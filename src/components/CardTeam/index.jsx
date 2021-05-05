import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import team from "../../../teams-description.json";
import * as S from "./styles";

export default function CardTeam() {
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
          <S.TeamCard>
            <div>
              <div className="avatar">
                <AccountCircleIcon />
              </div>

              <div>
                <h5>Edgar Marcos Ancioto Junior</h5>
                <span>
                  Criação da Hybroo, de 5 dos algoritmos, coorientação dos
                  alunos de iniciação científica para desenvolvimento dos planos
                  de trabalho.
                </span>
              </div>
            </div>
            <div className="LinkIcons">
              <Link to="https://www.linkedin.com/in/edgar-ancioto-837983191/">
                <GitHubIcon />
              </Link>
              <Link to="https://github.com/edgarancioto">
                <LinkedInIcon />
              </Link>
            </div>
          </S.TeamCard>
        </Grid>
      </S.Container>
    </S.ContainerImage>
  );
}
