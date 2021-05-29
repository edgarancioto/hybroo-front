import React, { useContext, useState } from "react";
import * as S from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { ResultMethodContext } from "../../context/useResultMethod";

export default function ListMethods() {
  const { listMethod } = useContext(ResultMethodContext);
  const [isShow, setIsShow] = useState(99);

  function handleChange(index) {
    if (index !== isShow) {
      setIsShow(index);
    } else if (index === isShow) {
      setIsShow(99);
    }
  }

  return (
    <>
      {listMethod.map((item, index) => {

        return (
          <S.RecentContainer>
            <S.RecentTittle onClick={() => handleChange(index)}>
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

            {isShow === index ? (
              <S.RecentContent>
                <S.RecentImgs>
                  {item.imgArray.map((item) => {
                    if (item === "") return null;

                    return (
                      <div>
                        <img
                          src={
                            "data:image/jpeg;base64," +
                            item
                              .replace("b", "")
                              .replace("'", "")
                              .replace("'", "")
                          }
                          alt="Img Result Method"
                        />
                        {/* <strong>{item[0]}</strong> */}
                      </div>
                    );
                  })}
                </S.RecentImgs>
                <h3>Description Problem</h3>
                <S.RecentInfo>
                  <span>{item.description}</span>
                </S.RecentInfo>
                <h3>Result First Method</h3>
                <S.RecentInfo>
                  <strong>Decimal Best: </strong>[<span>{item.decimalBestFirst1}</span>] , [
                  <span>{item.decimalBestFirst2}</span>]
                </S.RecentInfo>
                <S.RecentInfo>
                  <strong>Time: </strong>
                  <span>{item.timeFirst}</span>
                </S.RecentInfo>
                <S.RecentInfo>
                  <strong>Value Best: </strong>
                  <span>{item.valueBestFirst}</span>
                </S.RecentInfo>
                
                {item.isHybrid ? (
                  <>
                    <h3>Result Second Method</h3>
                    <S.RecentInfo>
                      <strong>Decimal Best: </strong>[<span>{item.decimalBestSecond1}</span>] , [
                      <span>{item.decimalBestSecond1}</span>]
                    </S.RecentInfo>
                    <S.RecentInfo>
                      <strong>Time: </strong>
                      <span>{item.timeSecond}</span>
                    </S.RecentInfo>
                    <S.RecentInfo>
                      <strong>Value Best: </strong>
                      <span>{item.valueBestSecond}</span>
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
