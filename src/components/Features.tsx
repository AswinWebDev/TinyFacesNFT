import styled from "styled-components";
import chr1 from "../assets/chrChild.png";
import ArrowLineImg from "../assets/ArrowLine.svg";
import ArrowImg from "../assets/Arrow.svg";
import SuitcaseImg from "../assets/suitcase.png";
import computer from "../assets/computer.png";
const Features = () => {
  const FeaturesContainer = styled.div`
    width: 1056px;
    height: 709px;
    margin: 0px auto;
    margin-top: 146px;
  `;
  const Frame68 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 30px;
    text-align: center;

    width: 908px;
    height: 205px;
    left: calc(50% - 908px / 2 + 39px);
    top: 861px;
    margin: 0 auto;
  `;
  const ThousandsOf = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 6px;
    /* or 126% */

    text-align: center;
    flex: none;
    color: #2d3134;
    display: inline-block;
  `;
  const FeatureText = styled.span`
    color: #0ac05e;
  `;
  const AwaitingText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 6px;
    text-align: center;
    flex: none;
    color: #2d3134;
    display: block;
  `;
  const FeaturesPara = styled.div`
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

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: 30px;
  `;

  const FeatureChildContainer1 = styled.div`
    display: flex;
    margin-top: 30px;
  `;
  const FeatureChildCard1 = styled.div`
    position: relative;
    margin-top: 140px;
    margin-right: 45px;
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28px;
    gap: 23px;
    width: 322px;
    height: 364px;

    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
  `;
  const FeatureChildCard2 = styled.div`
    position: relative;
    box-sizing: border-box;
    margin-top: 60px;
    margin-right: 45px;
    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 28px;
    gap: 23px;
    width: 322px;
    height: 364px;

    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
  `;

  const Ellipse616 = styled.img`
    position: absolute;
    left: 34.5%;
    right: 0%;
    top: 7%;
    bottom: 0%;

    /* Foundation /Green/Light :hover */

    background: #daf6e7;
    border-radius: 50%;
    width: 100px;
  `;

  const UniqueTinyFaces = styled.div`
    margin-top: 80px;
    width: 135px;
    height: 58px;

    font-family: "inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    /* or 29px */

    text-align: center;
    letter-spacing: 0.5px;

    /* For TEXT */

    color: #272d4e;

    mix-blend-mode: normal;
  `;

  const UniqueFacePara = styled.div`
    width: 266px;
    height: 72px;

    /* Card sub text  */

    font-family: "Folito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    text-align: center;
    letter-spacing: 0.5px;

    color: #7d7987;

    mix-blend-mode: normal;
  `;
  const FindOutMoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 145px;
    height: 24px;
  `;
  const FindOutMore = styled.div`
    width: 105px;
    height: 24px;

    font-family: "Folito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    letter-spacing: 0.5px;

    /* Foundation /Green/Dark */

    color: #089047;
  `;
  const ArrowLine = styled.img`
    position: absolute;
    left: 65.46%;
    right: 12.17%;
    top: 84.89%;
    bottom: 46.88%;

    color: #089047;
  `;
  const Arrow = styled.img`
    position: absolute;
    left: 69.01%;
    right: 11.47%;
    top: 83.35%;
    bottom: 21.58%;
  `;

  return (
    <FeaturesContainer>
      <Frame68>
        <ThousandsOf>
          Thousand Of <FeatureText>Features</FeatureText>
        </ThousandsOf>
        <AwaitingText> Awaiting For You</AwaitingText>
        <FeaturesPara>
          Characterised by soft lighting, vintage colour schemes and quirky
          costumes, these generative 3D TinyFaces are the addition to your NFT
          collection you've been waiting for.
        </FeaturesPara>
        {/* child card 1 */}
        {/* /// */}
      </Frame68>
      <FeatureChildContainer1>
        <FeatureChildCard1>
          <Ellipse616 src={chr1} alt="character image" />
          <UniqueTinyFaces>Unique Tiny Faces</UniqueTinyFaces>
          <UniqueFacePara>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </UniqueFacePara>
          <FindOutMoreContainer>
            <FindOutMore>Find Out More</FindOutMore>
            <ArrowLine src={ArrowLineImg} alt="Aroow line" />
            <Arrow src={ArrowImg} alt="Arrow" />
          </FindOutMoreContainer>
        </FeatureChildCard1>
        {/* child 2 */}
        <FeatureChildCard2>
          <Ellipse616 src={SuitcaseImg} alt="character image" />
          <UniqueTinyFaces>Huge Special Accessories</UniqueTinyFaces>
          <UniqueFacePara>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </UniqueFacePara>
          <FindOutMoreContainer>
            <FindOutMore>Find Out More</FindOutMore>
            <ArrowLine src={ArrowLineImg} alt="Aroow line" />
            <Arrow src={ArrowImg} alt="Arrow" />
          </FindOutMoreContainer>
        </FeatureChildCard2>
        {/* child 3 */}
        <FeatureChildCard1>
          <Ellipse616 src={computer} alt="character image" />
          <UniqueTinyFaces>500+ Combinations </UniqueTinyFaces>
          <UniqueFacePara>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
          </UniqueFacePara>
          <FindOutMoreContainer>
            <FindOutMore>Find Out More</FindOutMore>
            <ArrowLine src={ArrowLineImg} alt="Aroow line" />
            <Arrow src={ArrowImg} alt="Arrow" />
          </FindOutMoreContainer>
        </FeatureChildCard1>
      </FeatureChildContainer1>
    </FeaturesContainer>
  );
};

export default Features;
