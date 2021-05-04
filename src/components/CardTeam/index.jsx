import { Grid } from "@material-ui/core";
import React from "react";
import * as S from "./styles";

export default function CardTeam() {
  return (
    <S.Container className="team">
      <h5>Team</h5>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <S.TeamCard>
          <h5>testendo card</h5>
        </S.TeamCard>

        <S.TeamCard>
          <h5>testendo card</h5>
        </S.TeamCard>

        <S.TeamCard>
          <h5>testendo card</h5>
        </S.TeamCard>

        <S.TeamCard>
          <h5>testendo card</h5>
        </S.TeamCard>
      </Grid>
    </S.Container>
  );
}
