import React from "react";
import styled from "styled-components";
import DystopianBooks from "../Elements/DystopianBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Dystopian</h1>
                        <p className="font13">
                            Dystopian literature is a form of speculative fiction that offers a vision of the future. Dystopias are societies in cataclysmic decline,
                            with characters who battle environmental ruin, technological control, and government oppression.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <DystopianBooks />
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