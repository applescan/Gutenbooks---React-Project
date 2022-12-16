import React from "react";
import styled from "styled-components";
import HorrorBooks from "../Elements/HorrorBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Horror</h1>
                        <p className="font13">
                            A genre of literature, film, and television that is meant to scare, startle, shock, and even repulse audiences.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <HorrorBooks />
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
