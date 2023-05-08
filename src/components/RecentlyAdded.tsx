import styled from "styled-components";
import char3ImgUrl from "../assets/characters/char3.svg";
import char4ImgUrl from "../assets/characters/char4.svg";
import char5ImgUrl from "../assets/characters/char5.svg";
import LeftArrowImg from "../assets/ArrowIconLeft.svg";
import RightArrowImg from "../assets/ArrowIconRight.svg";
import char6Img from "../assets/characters/char6.svg";
import char7Img from "../assets/characters/char7.svg";

const RecentlyAdded = () => {
  const RecentlyAddedContainer = styled.div`
    margin-top: 146px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 50px;
  `;
  const Recently = styled.div`
    width: 357px;
    height: 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #0ac05e;
  `;
  const Added = styled.span`
    margin-left: 10px;
    color: #2d3134;
  `;
  const RecentlyAddedPara = styled.div`
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
  const CharContainer = styled.div`
    display: flex;
    gap: 70px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 50px;
    }
  `;

  const Char3Rect = styled.div`
    position: relative;
    width: 387px;
    height: 439px;

    background: #d9b7b4;
    border-radius: 10px;
  `;
  const Char3Img = styled.img`
    position: absolute;
    width: 373.15px;
    height: 404px;
    bottom: 0px;
  `;
  const Char4Rect = styled.div`
    position: relative;
    width: 387px;
    height: 439px;

    background: #b7b5d9;
    border-radius: 10px;
  `;
  const Char4Img = styled.img`
    position: absolute;
    width: 372px;
    height: 411px;
    bottom: 0px;
  `;
  const Char5Rect = styled.div`
    position: relative;
    width: 387px;
    height: 439px;

    background: #d2e4e5;
    border-radius: 10px;
  `;
  const Char5Img = styled.img`
    position: absolute;
    width: 372px;
    height: 411px;
    bottom: -27px;
  `;

  const PageBox = styled.div`
    margin-top: 50px;
    display: flex;
    width: 120px;
    height: 66px;
    left: 560.5px;
    top: 683px;

    background: #ffffff;
  `;
  const LeftSideBox = styled.div`
    position: relative;
    width: 50px;
    height: 50px;

    background: #ffffff;
    box-shadow: 0px 8px 15px rgba(72, 72, 138, 0.08);
  `;
  const RightSideBox = styled.div`
    position: relative;
    width: 50px;
    height: 50px;

    background: #0ac05e;
    box-shadow: 0px 8px 15px rgba(72, 72, 138, 0.08);
  `;
  const LeftArrow = styled.img`
    position: absolute;
    width: 8px;
    height: 20px;
    left: 20px;
    top: 13px;

    background: #ffffff;

    transform: matrix(0, -3, -2, 0, 0, 0);
    rotate: 90deg;
    padding: 0px;
  `;
  const RightArrow = styled.img`
    position: absolute;
    width: 8px;
    height: 20px;
    left: 20px;
    top: 13px;

    background: #0ac05e;
    transform: matrix(0, -3, -2, 0, 0, 0);
    rotate: 90deg;
    padding: 0px;
  `;

  const UniqueTinyFacesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 90px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 50px;
    }
  `;
  const UniqueTinyFacesSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;

    width: 731px;
    height: 198px;
    @media (max-width: 1200px) {
      width: 90vw;
      height: auto;
    }
  `;
  const Unique = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */
    color: #0ac05e;
  `;
  const TinyFaces = styled.span`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #2d3134;
  `;
  const Character6Container = styled.div`
    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 424px;
    height: 406px;
    background: rgba(182, 182, 182, 0.5);
    border-radius: 209px 0px 0px 0px;
    @media (max-width: 1200px) {
    }
  `;
  const Character6Img = styled.img`
    position: absolute;
    width: 364px;
    height: 336px;
    left: 55px;
    bottom: 0px;
  `;
  const UniqueTinyFacesSmallPara = styled.div`
    width: 731px;
    height: 128px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    /* or 145% */

    color: #676a6c;
    @media (max-width: 1200px) {
      width: 90vw;
      height: auto;
    }
  `;
  //  Secure the most rare //
  const SecureMostRareContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 90px;
    margin-top: 140px;
    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 50px;
    }
  `;
  const SecureMostRareSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;

    width: 731px;
    height: 198px;
    @media (max-width: 1200px) {
      width: 90vw;
      height: auto;
    }
  `;
  const Secure = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #0ac05e;
  `;
  const TheMostRare = styled.span`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #2d3134;
  `;
  const Character7Container = styled.div`
    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 424px;
    height: 406px;
    background: rgba(181, 137, 172, 0.2);
    border-radius: 209px 0px 0px 0px;
    @media (max-width: 1200px) {
    }
  `;
  const Character7Img = styled.img`
    position: absolute;
    width: 364px;
    height: 336px;
    left: 55px;
    bottom: 0px;
  `;
  const SecureTheMostRarePara = styled.div`
    width: 731px;
    height: 128px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    /* or 145% */

    color: #676a6c;
    @media (max-width: 1200px) {
      width: 90vw;
      height: auto;
    }
  `;
  // Secure the most rare //
  return (
    <RecentlyAddedContainer>
      <Recently>
        Recently<Added>Added</Added>
      </Recently>
      <RecentlyAddedPara>
        lighting, vintage colour schemes and quirky costumes, these generative
        3D TinyFaces are the addition to your NFT collection you've been waiting
        for.
      </RecentlyAddedPara>
      <CharContainer>
        <Char3Rect>
          <Char3Img src={char3ImgUrl} alt="character" />
        </Char3Rect>
        <Char4Rect>
          <Char4Img src={char4ImgUrl} alt="character" />
        </Char4Rect>
        <Char5Rect>
          <Char5Img src={char5ImgUrl} alt="character" />
        </Char5Rect>
      </CharContainer>
      <PageBox>
        <LeftSideBox>
          <LeftArrow src={LeftArrowImg} alt="leftarrow" />
        </LeftSideBox>
        <RightSideBox>
          <RightArrow src={RightArrowImg} alt="rightarrow"></RightArrow>
        </RightSideBox>
      </PageBox>
      {/* unique tiny faces container */}
      <UniqueTinyFacesContainer>
        <UniqueTinyFacesSmall>
          <Unique>
            5000+
            <TinyFaces>Unique TinyFaces</TinyFaces>
          </Unique>
          <UniqueTinyFacesSmallPara>
            Each character is entirely unique and is generated by combining
            hundreds of attributes such as colour palettes, skin tones, facial
            traits, outfits and accessories. With nearly endless combinations,
            all characters are guaranteed to be one of a kind.
          </UniqueTinyFacesSmallPara>
        </UniqueTinyFacesSmall>
        <Character6Container>
          <Character6Img src={char6Img} alt="character" />
        </Character6Container>
      </UniqueTinyFacesContainer>
      {/* secure the most rare container */}
      <SecureMostRareContainer>
        <Character7Container>
          <Character7Img src={char7Img} alt="character" />
        </Character7Container>
        <SecureMostRareSmall>
          <Secure>
            Secure
            <TheMostRare>The Most Rare</TheMostRare>
          </Secure>
          <SecureTheMostRarePara>
            Even though no two Tinyfaces will ever be the same, some variations
            are rarer than others. Watch out for special accessories and metal
            skin tones - the rarer the attributes, the rarer your character will
            be.
          </SecureTheMostRarePara>
        </SecureMostRareSmall>
      </SecureMostRareContainer>
    </RecentlyAddedContainer>
  );
};

export default RecentlyAdded;
