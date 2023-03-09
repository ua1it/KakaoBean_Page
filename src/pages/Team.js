import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: wheat;
`;

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(15rem, auto));
  grid-gap: 1rem;
`;

const Member = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 2.2fr 4fr;
`;

const Left = styled.div`
  position: relative;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;
const LeftName = styled.div``;

const LeftImg = styled.img`
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Role = styled.span`
  position: absolute;
  left: 60%;
  top: 10%;
  background-color: beige;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;
const Right = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
`;

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
    img: "",
    name: "안수빈",
    mail: "asb0711@gmail.com",
    link: "https://github.com/happysubin",
    mind: "1일 1커밋",
    role: false,
  },
  {
    id: 3,
    img: "",
    name: "김윤호",
    mail: "hkj9909@gmail.com",
    link: "https://github.com/ua1it",
    mind: "피할 수 없으면 즐겨라",
    role: false,
  },
  {
    id: 4,
    img: "",
    name: "추성준",
    mail: "j949854@gmail.com",
    link: "https://github.com/ChuSeongJun",
    mind: "내 기분이 내 태도가 되지말자",
    role: false,
  },
  {
    id: 5,
    img: "",
    name: "임인범",
    mail: "@gmail.com",
    link: "https://github.com/lib26",
    mind: "넘어질거면 앞으로 넘어져라",
    role: false,
  },
  {
    id: 6,
    img: "",
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
      <h1>팀원 소개</h1>
      <TeamSection>
        {MemberList.map((it) => (
          <Member>
            <Left>
              <LeftName>{it.id}</LeftName>
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
