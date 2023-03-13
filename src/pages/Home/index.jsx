import mascot from "../../images/beanSolo.png"
import arrow from "../../images/angleDown.svg"
import web from "../../images/web.jpg"
import sys from "../../images/sysArch.jpg"
import database from "../../images/database.png"

import React from "react";
import "./pulse.css";
import {
  Landing,
  LandingFont,
  MainImg,
  AngleDown,
  Frame,
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
      {/* TODO: AOS implementation */}
      <Landing>
        <h2>Kakao Enterprise X Gachon University</h2>
        <h2>SW Academy</h2>
        <Frame>차세대 쳇봇 LAB
          <img src={web} style={{width:"50rem", height:"30rem", alignSelf:"left"}}/>
          <div>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
          </div>
        </Frame>
        <Frame>데이터 관리 기술 LAB
          <img src={database} style={{width:"50rem", height:"30rem", alignSelf:"right"}}/>
          <p>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
          </p>
        </Frame>
        <Frame>시스템 아키텍처 LAB
          <img src={sys} style={{width:"50rem", height:"30rem", alignSelf:"left"}}/>
          <div>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
          </div>
        </Frame>
      </Landing>
    </Wrapper>
  );
};
export default Home;
