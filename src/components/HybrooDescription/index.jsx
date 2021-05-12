import { Grid } from "@material-ui/core";
import React from "react";
import * as S from "./styles";
import parse from 'html-react-parser';

export default function HybrooDescription(props) {
  const { homeInfo } = props

  return (
    <S.Container className="container">
      <h2>About Hybroo</h2>

      <Grid>
        {parse("<p>" + homeInfo.descrição +"</p>")}
      </Grid>
    </S.Container>
  );
}
