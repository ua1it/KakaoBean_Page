import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  background-color:"";
`;  

const Landing = styled.div`
  width: 100vm;
  height: 100vh;
  border: 1px solid black;
  margin: 5px;
  padding: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LandingFont = styled.div`
  width: 50rem;
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 0.5;
  color: rgb(0, 0, 0);
`;

const MainImg = styled.img`
  justify-content: center;
  align-items: center;
`;

const FirstFrame = styled.div`
  color:"";
  text-align:right;
`;

const SecondFrame = styled.div`
  color:"";
  text-align:left;
`;

const ThirdFrame = styled.div`
  color:"";
  text-align:left;
`;

const Home = () => {
  return (
    <Wrapper>

      <Landing>
        <LandingFont>
          <h5 style={{textAlign:"left", marginLeft:"3.5rem", fontWeight: "500"}}>we are</h5>
          <h1>Kakao Beans!</h1>
          <MainImg src={"./img/bean.png"} alt="" />
        </LandingFont>
      </Landing>

      <h3>Kakao Enterprise X Gachon University</h3>
      <h3>SW Academy</h3>

      <FirstFrame>
        차세대 쳇봇 LAB
      </FirstFrame>

      <SecondFrame>
        데이터 관리 기술 LAB
      </SecondFrame>
      
      <ThirdFrame>
        시스템 아키텍처 LAB  
      </ThirdFrame>

    </Wrapper>
  )
}
export default Home
