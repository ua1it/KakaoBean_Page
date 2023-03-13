import mascot from "../../images/beanSolo.png"
import arrow from "../../images/angleDown.svg"
import React from "react";
import "./pulse.css";
import {
  Frame,
  Landing,
  LandingFont,
  MainImg,
  AngleDown,
  Wrapper,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Landing>
        <LandingFont>
          <h5 style={{textAlign:"left", fontSize: "30px", marginLeft:"1rem"}}>자라나는 우리들</h5>
          <h2>우리는 카카오빈 입니다.</h2>
        </LandingFont>
        <MainImg src={mascot} />
        <AngleDown src={arrow} className="pulse"/>
      </Landing>
      
      <Landing>
        <h2>Kakao Enterprise X Gachon University</h2>
        <h2>SW Academy</h2>
        <Frame>차세대 쳇봇 LAB</Frame>
        <Frame>데이터 관리 기술 LAB</Frame>
        <Frame>시스템 아키텍처 LAB</Frame>
      </Landing>
    </Wrapper>
  );
};
export default Home;
