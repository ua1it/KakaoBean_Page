import logo from "../../images/bean.png";
import React from "react";
import {
  FirstFrame,
  Landing,
  LandingFont,
  MainImg,
  SecondFrame,
  ThirdFrame,
  Wrapper,
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Landing>
        <LandingFont>
          <h5
            style={{
              textAlign: "left",
              marginLeft: "3.5rem",
              fontWeight: "500",
            }}
          >
            we are
          </h5>
          <h1>Kakao Beans!</h1>
          <MainImg src={logo} />
        </LandingFont>
      </Landing>

      <h3>Kakao Enterprise X Gachon University</h3>
      <h3>SW Academy</h3>

      <FirstFrame>차세대 쳇봇 LAB</FirstFrame>

      <SecondFrame>데이터 관리 기술 LAB</SecondFrame>

      <ThirdFrame>시스템 아키텍처 LAB</ThirdFrame>
    </Wrapper>
  );
};
export default Home;
