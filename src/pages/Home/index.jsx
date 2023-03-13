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
  ExImg
} from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Landing>
        <LandingFont>
          <h5 style={{textAlign:"left", fontSize: "25px", marginLeft:"1rem"}}>자라나는 우리들</h5>
          <h3>우리는 카카오빈 입니다.</h3>
        </LandingFont>
        <MainImg src={mascot} />
        <AngleDown src={arrow} className="pulse"/>
      </Landing>
      {/* TODO: AOS implementation */}
      <h2 style={{textAlign:"center", marginTop:"10rem"}}>Kakao Enterprise X Gachon University</h2>
      <h2 style={{textAlign:"center"}}>SW Academy</h2>
      <Frame>
        <h2>차세대 쳇봇 LAB</h2>
        <ExImg className="left" src={web}/>
        <div>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
        </div>
      </Frame>
      <Frame>
        <h2>데이터 관리 기술 LAB</h2>
        <ExImg className="right" src={database}/>
        <p>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
        </p>
      </Frame>
      <Frame>
        <h2>시스템 아키텍처 LAB</h2>
        <ExImg src={sys}/>
        <div>
            just writing anything to fill the contents and check if this paragraph 
            shows on the right side of the page. The professor is absolute bs.. literally
            I could learn nothing from that loud, shouting, non-sense gibberish.
        </div>
      </Frame>
    </Wrapper>
  );
};
export default Home;
