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
                <h5>Edicar canhoto</h5>
                <span>
                  sou dicar e escrevo com a mao esquerda gosto de dar trabalho
                  com meus alunos e passo trabalho de 65 dias pra 2 dias estar
                  prontos
                </span>
              </div>
            </div>
            <div className="LinkIcons">
              <Link>
                <GitHubIcon />
              </Link>
              <Link>
                <LinkedInIcon />
              </Link>
            </div>
          </S.TeamCard>

          <S.TeamCard>
            <div>
              <div className="avatar">
                <AccountCircleIcon />
              </div>

              <div>
                <h5>Edicar canhoto</h5>
                <span>
                  sou dicar e escrevo com a mao esquerda gosto de dar trabalho
                  com meus alunos e passo trabalho de 65 dias pra 2 dias estar
                  prontos
                </span>
              </div>
            </div>
            <div className="LinkIcons">
              <Link>
                <GitHubIcon />
              </Link>
              <Link>
                <LinkedInIcon />
              </Link>
            </div>
          </S.TeamCard>

          <S.TeamCard>
            <div>
              <div className="avatar">
                <AccountCircleIcon />
              </div>

              <div>
                <h5>Edicar canhoto</h5>
                <span>
                  sou dicar e escrevo com a mao esquerda gosto de dar trabalho
                  com meus alunos e passo trabalho de 65 dias pra 2 dias estar
                  prontos
                </span>
              </div>
            </div>
            <div className="LinkIcons">
              <Link>
                <GitHubIcon />
              </Link>
              <Link>
                <LinkedInIcon />
              </Link>
            </div>
          </S.TeamCard>
        </Grid>
      </S.Container>
    </S.ContainerImage>
  );
}
