import mascot from "../../images/beanSolo.png"
import arrow from "../../images/angleDown.svg"
import React from "react";
import "./pulse.css";
import {
  FirstFrame,
  Landing,
  LandingFont,
  MainImg,
  AngleDown,
  SecondFrame,
  ThirdFrame,
  Wrapper,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Landing>
        <LandingFont>
          <h5 style={{textAlign:"left", fontSize: "30px", marginLeft:"3.3rem"}}>we are</h5>
          <h1>Kakao Beans!</h1>
        </LandingFont>
        <MainImg src={mascot} />
        <AngleDown src={arrow} className="pulse"/>
      </Landing>
      
      <Landing>
        <h2>Kakao Enterprise X Gachon University</h2>
        <h2>SW Academy</h2>
        <FirstFrame>차세대 쳇봇 LAB</FirstFrame>
        <SecondFrame>데이터 관리 기술 LAB</SecondFrame>
        <ThirdFrame>시스템 아키텍처 LAB</ThirdFrame>
      </Landing>
    </Wrapper>
  );
};
export default Home;
