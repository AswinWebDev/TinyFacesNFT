import styled from "styled-components";
import character1 from "../assets/characters/chr1.svg";
import character2 from "../assets/characters/chr2.svg";
const Frame111 = () => {
  const Frame111Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
      margin-top: 0px;
    }
  `;
  const Frame92 = styled.div`
    width: 750px;
    height: 402.68px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const FindYourFavCharacter = styled.div`
    margin-top: 80px;
    @media (max-width: 1200px) {
      line-height: 30px;
      width: auto;
  `;
  const FindAndCharacter = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    color: #0ac05e;
    line-height: 50px;
    @media (max-width: 1200px) {
      font-size: 20px;
      line-height: 30px;
    }
  `;
  const YourFav = styled.span`
    color: #313131;
    @media (max-width: 1200px) {
      display: block;
      font-size: 20px;
      line-height: 30px;
      margin-top: 50px;
    }
  `;
  const Character = styled.div`
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 70px;
    color: #0ac05e;
    line-height: 30px;
    margin-top: 20px;
    @media (max-width: 1200px) {
      font-size: 20px;
      line-height: 30px;
    }
  `;
  const CharacterBoxContainer = styled.div`
    margin-left: auto;
    width: 533px;
    height: 541px;
    position: relative;
    background: rgba(10, 192, 94, 0.12);
    border-radius: 0px 216px 15px 14px;
    @media (max-width: 1200px) {
      margin: 0 auto;
      width: 95vw;
      height: auto;
    }
  `;
  const CharacterImage = styled.img`
    position: absolute;
    bottom: 0;
    @media (max-width: 1200px) {
      position: static;
      width: 95vw;
      height: auto;
    }
  `;
  const Ellipse2 = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    left: 20px;
    top: 31px;

    background: #0ac05e;
    border: 5px solid #ffffff;
    box-shadow: 0px 100px 80px rgba(56, 56, 56, 0.1),
      0px 64.8148px 46.8519px rgba(56, 56, 56, 0.0759259),
      0px 38.5185px 25.4815px rgba(56, 56, 56, 0.0607407),
      0px 20px 13px rgba(56, 56, 56, 0.05),
      0px 8.14815px 6.51852px rgba(56, 56, 56, 0.0392593),
      0px 1.85185px 3.14815px rgba(56, 56, 56, 0.0240741);
    border-radius: 50%;
    @media (max-width: 1200px) {
      width: 5px;
      height: 5px;
    }
  `;
  const Rectangle2 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 209px;
    height: 68px;
    left: 40px;
    top: 39px;

    background: rgba(255, 255, 255, 0.4);
    border: 1px solid #ffffff;
    /* Shadow */

    box-shadow: 0px 3px 38px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
    @media (max-width: 1200px) {
      width: 100px;
      height: 50px;
    }
  `;
  const EllipseText202k = styled.div`
    position: absolute;
    width: 94px;
    height: 60px;
    left: 60px;
    top: 43px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */

    color: #ff4d4a;
    @media (max-width: 1200px) {
      top: 25px;
      left: 50px;
      font-size: 15px;
      width: 22px;
      height: 15px;
    }
  `;
  const EllipseTextUnique = styled.div`
    position: absolute;
    width: 61px;
    height: 28px;
    left: 175px;
    top: 59px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    /* or 117% */

    color: #313131;
    @media (max-width: 1200px) {
      top: 60px;
      left: 85px;
      font-size: 10px;
      width: 22px;
      height: 15px;
    }
  `;
  const Rectangle3351 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 166.85px;
    height: 193.48px;
    right: 30px;
    top: 338.52px;

    background: rgba(255, 255, 255, 0.4);
    border: 0.8875px solid #ffffff;
    box-shadow: 0px 2.6625px 33.725px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(4.4375px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 7.1px;
    @media (max-width: 1200px) {
      width: 106px;
      height: 100px;
      top: 150px;
    }
  `;
  const Rectangle3351SecureText = styled.div`
    position: absolute;
    width: 112.71px;
    height: 45px;
    right: 60px;
    top: 366.04px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17.75px;
    line-height: 22px;
    /* or 125% */

    text-align: center;

    color: #313131;

    opacity: 0.96;
    @media (max-width: 1200px) {
      width: 70px;
      height: 50px;
      top: 150px;
      font-size: 10px;
  `;
  const Rectangle3352 = styled.div`
    position: absolute;
    width: 137.56px;
    height: 84.31px;
    right: 45px;
    top: 434.38px;

    background: #fbfbfb;
    border-radius: 7.1px;
    @media (max-width: 1200px) {
      width: 80px;
      height: 50px;
      top: 195px;
    }
  `;
  const Rectangle3000Text = styled.div`
    position: absolute;
    width: 98px;
    height: 32px;
    right: 60px;
    top: 450.35px;

    font-style: normal;
    font-weight: 700;
    font-size: 26.625px;
    line-height: 32px;
    text-align: center;

    color: #ff4d4a;
    @media (max-width: 1200px) {
      width: 50px;
      height: 20px;
      top: 190px;
      font-size: 10px;
    }
  `;
  const Rectangle3000NewTinyText = styled.div`
    position: absolute;
    width: 120px;
    height: 13px;
    right: 50px;
    top: 488.51px;

    font-style: normal;
    font-weight: 600;
    font-size: 10.65px;
    line-height: 13px;
    /* identical to box height */

    text-align: center;

    color: #404040;
    @media (max-width: 1200px) {
      width: 70px;
      height: 20px;
      top: 215px;
      font-size: 8px;
    }
  `;
  const Rectangle3000EllipseImg = styled.img`
    position: absolute;
    width: 37.28px;
    height: 37.28px;
    right: 11px;
    top: 321.66px;
    @media (max-width: 1200px) {
      width: 20px;
      height: 20px;
      top: 145px;
      right: 22px;
    }
  `;

  const Paragraph = styled.div`
    width: 490px;
    height: 90px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */

    color: #425466;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;

  const Frame91 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 46px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 20px;
    }
  `;
  const JoinDiscordContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 10px;

    width: 192px;
    height: 52px;

    background: #0ac05e;
    box-shadow: 0px 25px 50px rgba(10, 192, 94, 0.1);
    border-radius: 9px;
    @media (max-width: 1200px) {
      margin-right: auto;
      width: auto;
      height: auto;
    }
  `;
  const JoinDiscord = styled.div`
    width: 112px;
    height: 32px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    color: #ffffff;
    @media (max-width: 1200px) {
      width: auto;
      height: auto;
    }
  `;
  const Ellipse4 = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 104.68px;
    height: 104.68px;
    left: 108px;
    top: 0px;

    border: 1.28117px dashed #0ac05e;
    border-radius: 50%;
    @media (max-width: 1200px) {
      left: 0px;
      top: 0px;
    }
  `;
  const Polygon1 = styled.div`
    position: absolute;
    width: 20.63px;
    height: 20.63px;
    left: 45.65px;
    top: 40px;

    background: #0ac05e;
    border-radius: 5.56233px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotate(90deg);
  `;
  const DemoVideo = styled.div`
    position: absolute;
    white-space: nowrap;
    width: 109px;
    height: 27px;
    left: -90px;
    top: 37.5px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    padding: 0px 10px;

    color: #0ac05e;
  `;
  return (
    <Frame111Container>
      <Frame92>
        <FindYourFavCharacter>
          <FindAndCharacter>
            Find
            <YourFav> Your Favourite</YourFav>
          </FindAndCharacter>
          <Character>Character</Character>
        </FindYourFavCharacter>
        <Paragraph>
          Characterised by soft lighting, vintage colour schemes and quirky
          costumes, these generative 3D TinyFaces are the addition to your NFT
          collection you’ve been waiting for.
        </Paragraph>
        <Frame91>
          <JoinDiscordContainer>
            <JoinDiscord>Join Discord</JoinDiscord>
          </JoinDiscordContainer>
          <Ellipse4>
            <Polygon1></Polygon1>
            <DemoVideo>Demo Video</DemoVideo>
          </Ellipse4>
        </Frame91>
      </Frame92>
      <CharacterBoxContainer>
        <CharacterImage src={character1} alt="character one" />
        <Ellipse2></Ellipse2>
        <Rectangle2></Rectangle2>
        <EllipseText202k>202k</EllipseText202k>
        <EllipseTextUnique>Unique TinyFaces</EllipseTextUnique>
        <Rectangle3351></Rectangle3351>
        <Rectangle3351SecureText>Secure The Most Rare</Rectangle3351SecureText>
        <Rectangle3352></Rectangle3352>
        <Rectangle3000Text>3,000+</Rectangle3000Text>
        <Rectangle3000NewTinyText>
          New Tiny Faces Arrives
        </Rectangle3000NewTinyText>
        <Rectangle3000EllipseImg src={character2} alt="character2" />
      </CharacterBoxContainer>
    </Frame111Container>
  );
};

export default Frame111;
