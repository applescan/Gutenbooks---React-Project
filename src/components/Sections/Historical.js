import React from "react";
import styled from "styled-components";
import HistoricalBooks from "../Elements/HistoricalBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Historical</h1>
                        <p className="font13">
                        A genre that is defined by its cultural and historical usage, 
                        whose features and definition are formulated from the observation of preexisting literary knowledge "Feuer, 1987". 
                        The opposite of a theoretical genre.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <HistoricalBooks />
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 20px;
  @media (max-width: 860px) {
    text-align: left;
  }
`;
