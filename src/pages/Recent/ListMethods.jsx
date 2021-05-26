import React, { useContext, useState } from "react";
import * as S from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { ResultMethodContext } from "../../context/useResultMethod";

export default function ListMethods() {
  const { listMethod } = useContext(ResultMethodContext);
  const [isShow, setIsShow] = useState(false);

  function jsonToArray(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
  }

  return (
    <>
      {listMethod.map((item) => {
        let best1 = item.method["result-first"]["decimal-best"][1];
        let best2 = item.method["result-first"]["decimal-best"][2];
        let valueBest1 = item.method["result-first"]["value-best"];
        let time1 = item.method["result-first"].time;

        let best1S = "";
        let best2S = "";
        let valueBest2 = "";
        let time2 = "";

        if (item.method["result-second"] !== undefined) {
          best1S = item.method["result-second"]["decimal-best"][1];
          best2S = item.method["result-second"]["decimal-best"][2];
          valueBest2 = item.method["result-second"]["value-best"];
          time2 = item.method["result-second"].time;
        }

        let imgsArray = jsonToArray(item.method);

        return (
          <S.RecentContainer>
            <S.RecentTittle onClick={() => setIsShow(!isShow)}>
              <S.ListMethod>
                <S.TitleMethod>
                  <input type="checkbox" id="task1" />
                  <span>{item.name}</span>
                </S.TitleMethod>
                <S.DataMethod>
                  <span>{item.hours}</span>
                  <span>{item.date}</span>
                  <DeleteIcon />
                </S.DataMethod>
              </S.ListMethod>
            </S.RecentTittle>

            {isShow ? (
              <S.RecentContent>
                <S.RecentImgs>
                  {imgsArray.map((item) => {
                    if (item[0] === "result-first") return null;
                    if (item[0] === "result-second") return null;

                    return (
                      <div>
                        <img src={item[1]} alt={item[0]} />
                        <strong>{item[0]}</strong>
                      </div>
                    );
                  })}
                </S.RecentImgs>
                <h3>Result First Method</h3>
                <S.RecentInfo>
                  <strong>Decimal Best: </strong>[<span>{best1}</span>] , [
                  <span>{best2}</span>]
                </S.RecentInfo>
                <S.RecentInfo>
                  <strong>Time: </strong>
                  <span>{time1}</span>
                </S.RecentInfo>
                <S.RecentInfo>
                  <strong>Value Best: </strong>
                  <span>{valueBest1}</span>
                </S.RecentInfo>
                {item.method["result-second"] !== undefined ? (
                  <>
                    <h3>Result Second Method</h3>
                    <S.RecentInfo>
                      <strong>Decimal Best: </strong>[<span>{best1S}</span>] , [
                      <span>{best2S}</span>]
                    </S.RecentInfo>
                    <S.RecentInfo>
                      <strong>Time: </strong>
                      <span>{time2}</span>
                    </S.RecentInfo>
                    <S.RecentInfo>
                      <strong>Value Best: </strong>
                      <span>{valueBest2}</span>
                    </S.RecentInfo>
                  </>
                ) : null}
              </S.RecentContent>
            ) : null}
          </S.RecentContainer>
        );
      })}
    </>
  );
}
