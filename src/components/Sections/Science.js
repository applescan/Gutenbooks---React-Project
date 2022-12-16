import React from "react";
import styled from "styled-components";
import ScienceBooks from "../Elements/ScienceBooks"

export default function Adventure() {
    return (
        <Wrapper id="classics" className="book-pages">
            <div className="whiteBg" style={{ padding: "60px 0" }}>
                <div className="container">
                    <HeaderInfo style={{ textAlign: "left" }}>
                        <h1 className="font40 extraBold">Science Fiction</h1>
                        <p className="font13">
                            Science fiction is a genre of speculative fiction which typically deals with
                            imaginative and futuristic concepts such as advanced science and technology,
                            space exploration, time travel, parallel universes, extraterrestrial life,
                            sentient artificial intelligence, cybernetics, certain forms of immortality, and the singularity.
                        </p>
                    </HeaderInfo>
                    <br></br>
                    <ScienceBooks />
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
