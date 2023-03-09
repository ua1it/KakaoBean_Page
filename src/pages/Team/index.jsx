import React from "react";
import {
  Info,
  Left,
  LeftImg,
  Member,
  Right,
  Role,
  TeamSection,
  Wrapper,
} from "./styles";

const MemberList = [
  {
    id: "팀장",
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "김희찬",
    mail: "wsx0239@gmail.com",
    link: "https://github.com/BetterTomorrowThanToday",
    mind: "뭔가는 남기고 죽어야지",
    role: true,
  },
  {
    id: 2,
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "안수빈",
    mail: "asb0711@gmail.com",
    link: "https://github.com/happysubin",
    mind: "1일 1커밋",
    role: false,
  },
  {
    id: 3,
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "김윤호",
    mail: "hkj9909@gmail.com",
    link: "https://github.com/ua1it",
    mind: "피할 수 없으면 즐겨라",
    role: false,
  },
  {
    id: 4,
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "추성준",
    mail: "j949854@gmail.com",
    link: "https://github.com/ChuSeongJun",
    mind: "내 기분이 내 태도가 되지말자",
    role: false,
  },
  {
    id: 5,
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "임인범",
    mail: "@gmail.com",
    link: "https://github.com/lib26",
    mind: "넘어질거면 앞으로 넘어져라",
    role: false,
  },
  {
    id: 6,
    img: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
    name: "조연겸",
    mail: "whdusrua@gmail.com",
    link: "https://github.com/jomo34",
    mind: "구겨진 종이가 더 멀리 날아간다",
    role: false,
  },
];

const Team = () => {
  return (
    <Wrapper>
      <Info>팀원 소개</Info>
      <TeamSection>
        {MemberList.map((it) => (
          <Member>
            <Left>
              {/*<LeftName>{it.id}</LeftName>*/}
              <LeftImg src={it.img} alt="" />
              {it.role ? <Role>팀장</Role> : <Role>팀원</Role>}
            </Left>
            <Right>
              <div>이름: {it.name}</div>
              <div>이메일: {it.mail}</div>
              <div>GitHub: {it.link}</div>
              <div>좌우명: {it.mind}</div>
            </Right>
          </Member>
        ))}
      </TeamSection>
    </Wrapper>
  );
};

export default Team;
