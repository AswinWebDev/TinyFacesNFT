import styled from "styled-components";

const About = () => {
  const AboutContainer = styled.div`
    margin-top: 146px;
    text-align: center;
  `;
  const AboutTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 30px;
  `;
  const About = styled.div`
    width: 203px;
    height: 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #0ac05e;
  `;
  const Us = styled.span`
    color: #313131;
  `;
  const AboutPara = styled.div`
    width: 908px;
    height: 64px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    /* or 145% */

    text-align: center;

    color: #676a6c;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const Frame99 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 104px;

    width: 1240px;
    height: 352px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 50px;
      width: auto;
      height: auto;
    }
  `;
  const Frame98 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;

    width: 712px;
    height: 250px;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const Frame98Para = styled.div`
    width: 712px;
    height: 168px;

    /* Card sub text  */

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    letter-spacing: 0.5px;

    color: #7d7987;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const LearnMoreWatchVideo = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 40px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 30px;
    }
  `;
  const LearnMoreButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 10px;

    width: 180px;
    height: 52px;

    background: #0ac05e;
    box-shadow: 0px 25px 50px rgba(10, 192, 94, 0.1);
    border-radius: 9px;
    color: #ffffff;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const WatchVideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 10px;

    width: 221px;
    height: 52px;

    border: 1px solid #0ac05e;
    border-radius: 9px;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const WatchVideo = styled.div`
    width: 217px;
    height: 32px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    color: #0ac05e;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const WatchVideoPolygon = styled.div`
    width: 14px;
    height: 16px;

    background: #0ac05e;
    border-radius: 5px;
    clip-path: polygon(0 0, 0 100%, 100% 49%);
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const Frame97 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 60px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 30px;
    }
  `;
  const Frame97Box1 = styled.div`
    box-sizing: border-box;

    width: 192px;
    height: 161px;
    left: 816px;
    top: 0px;
    text-align: center;

    background: #ffffff;
    box-shadow: 0px 38.5185px 25.4815px rgba(56, 56, 56, 0.0607407),
      0px 20px 13px rgba(56, 56, 56, 0.05),
      0px 8.14815px 6.51852px rgba(56, 56, 56, 0.0392593),
      0px 1.85185px 3.14815px rgba(56, 56, 56, 0.0240741);
  `;
  const Frame97Box2 = styled.div`
    box-sizing: border-box;

    width: 192px;
    height: 161px;
    left: 1048px;
    top: 0px;

    background: #fafafa;
    border: 1px solid #e0e0e0;
  `;
  const Frame97BoxTitle = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height, or 120% */

    color: #313131;
    margin-top: 30px;
  `;
  const Frame97BoxSub = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.01em;

    color: #61646b;
  `;
  return (
    <AboutContainer>
      <AboutTextBox>
        <About>
          About<Us>Us</Us>
        </About>
        <AboutPara>
          Launched in 2021, TinyFaces is an online design and publishing tool
          with a mission to empower everyone in the world to design anything and
          publish anywhere.
        </AboutPara>
        <Frame99>
          <Frame98>
            <Frame98Para>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet.Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet.Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet.Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet.Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet.Amet minim mollit non
              deserunt ullamco est sit aliqua dolor do ameAmet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet.t.
            </Frame98Para>
            <LearnMoreWatchVideo>
              <LearnMoreButton>Learn More</LearnMoreButton>
              <WatchVideoContainer>
                <WatchVideo>Watch Video</WatchVideo>
                <WatchVideoPolygon></WatchVideoPolygon>
              </WatchVideoContainer>
            </LearnMoreWatchVideo>
          </Frame98>
          <Frame97>
            <Frame97Box1>
              <Frame97BoxTitle>1000k</Frame97BoxTitle>
              <Frame97BoxSub>Design Created</Frame97BoxSub>
            </Frame97Box1>
            <Frame97Box2>
              <Frame97BoxTitle>250+</Frame97BoxTitle>
              <Frame97BoxSub>International Country</Frame97BoxSub>
            </Frame97Box2>
            <Frame97Box2>
              <Frame97BoxTitle>500k</Frame97BoxTitle>
              <Frame97BoxSub>Happy Users</Frame97BoxSub>
            </Frame97Box2>
            <Frame97Box2>
              <Frame97BoxTitle>2817</Frame97BoxTitle>
              <Frame97BoxSub>All Over Language</Frame97BoxSub>
            </Frame97Box2>
          </Frame97>
        </Frame99>
      </AboutTextBox>
    </AboutContainer>
  );
};

export default About;
