import React from "react";
import styled from "styled-components";
// Components
// Assets
import LatestBooks from "../Elements/LatestBooks";
import Classics from "../Elements/Classics";

export default function Header() {
  return (
    <>
    <div className="App-header">
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h4 style={{color:"#E54F6D"}}>Trending Now</h4> 
          <h1>Welcome to Gutenbooks</h1>
          <p>
          Choose among free epub and Kindle eBooks, download them or read them online. 
          You will find the world’s great literature here, with focus on older works for which U.S. copyright has expired. 
          Thousands of volunteers digitized and diligently proofread the eBooks, for you to enjoy.
          </p>
        </div>
      </LeftSide>
      <RightSide>

        <LatestBooks />

      </RightSide>
    </Wrapper>
    </div >

    <div className="classics">
      <Classics/>
    </div>

    </>
  );
}


const Wrapper = styled.section`
  padding: 50px 0;
  width: 100%;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 150px;
  margin-right:50px;
  @media (max-width: 960px) {
    width: 100%;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 860px) {
    width: 100%;
    margin: 50px 0;
    padding: 0 30px;
    text-align: center;
  }
`;
const RightSide = styled.div`
  width: 60%;
  height: 100%;

  @media (max-width: 960px) {
    width: 90%;
    margin-left:10px
  }
`;


