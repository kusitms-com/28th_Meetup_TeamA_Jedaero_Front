import Head from "next/head";

import styled from "@emotion/styled";
import Background from "@/assets/svg/background.gif";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          제대로,학생과 학생회, 가게 모두의 소소한 행복이 되는 제휴사업이 되도록
        </title>
      </Head>
      <Container>
        <LandingTitle>학생과 학생회, 가게 모두의</LandingTitle>
        <LandingTitle>소소한 행복이 되는 제휴사업이 되도록</LandingTitle>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;

  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 5%;
  padding-left: 10%;

  width: 100%;
  min-height: 90vh;
  background-image: url(${Background.src});
  background-size: cover;
`;

const LandingTitle = styled.p`
  color: black;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 3px;
`;
