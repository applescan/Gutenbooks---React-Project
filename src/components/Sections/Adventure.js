import React from "react";
import styled from "styled-components";
import AdventureBooks from "../Elements/AdventureBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Adventure</h1>
                        <p className="font13">
                            Adventure fiction is a literary sub-genre
                            featuring exciting tales of daring do and risk-filled journeys.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <AdventureBooks /> 
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const HeaderInfo = styled.div`
  padding: 20px;
  text-align: left;
  @media (max-width: 860px) {
    text-align: left;
  }
`;
