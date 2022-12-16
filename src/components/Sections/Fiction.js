import React from "react";
import styled from "styled-components";
import FictionBooks from "../Elements/FictionBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Fiction</h1>
                        <p className="font13">
                        Fiction is a type of novel that has a more mainstream, populist appeal than literary fiction. 
                        Genre fiction traditionally comprises genres such as romance, mystery, thriller, horror, fantasy, and children's books.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <FictionBooks />
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
