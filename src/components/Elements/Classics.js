import React from "react";
import styled from "styled-components";
import ClassicsBooks from "./ClassicsBooks"

export default function Classics() {
  return (
    <Wrapper id="classics">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo style={{ textAlign: "center" }}>
            <h1 className="font40 extraBold">Our Classics Collections</h1>
            <p className="font13">
              Indulge your nostalgia with these top classics selecion available for you
            </p>
          </HeaderInfo>
          <br></br>
          <ClassicsBooks />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

