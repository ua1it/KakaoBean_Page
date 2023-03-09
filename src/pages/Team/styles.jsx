import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: wheat;
`;

export const TeamSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(15rem, auto));
  grid-gap: 1rem;
`;

export const Member = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 2.2fr 4fr;
`;

export const Left = styled.div`
  position: relative;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftName = styled.div``;

export const LeftImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const Role = styled.span`
  position: absolute;
  left: 75%;
  top: 5%;
  background-color: beige;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;
export const Right = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
`;
