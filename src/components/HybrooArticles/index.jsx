import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

export default function HybrooArticles(props) {
  const { homeInfo } = props;
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    if (homeInfo === []) return;
    let data = homeInfo.productions;
    setProductions(data);
  }, [homeInfo]);

  return (
    <S.Container className="container">
      <Grid>
        {productions ? (
          <div>
            <h3>Artigo em periódico</h3>
            <p>
              {productions.map((item) => {
                if (item.name === "Artigo em periódico") {
                  return item.title;
                }
                return null;
              })}
            </p>

            <h3>Artigos completos</h3>
            <p>
              {productions.map((item) => {
                if (item.name === "Artigos completos") {
                  return item.title;
                }
                return null;
              })}
            </p>

            <h3>Resumos</h3>
            <p>
              {productions.map((item) => {
                if (item.name === "Resumos") {
                  return item.title;
                }
                return null;
              })}
            </p>
          </div>
        ) : null}
      </Grid>
    </S.Container>
  );
}
