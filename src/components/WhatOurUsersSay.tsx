import styled from "styled-components";
import child1 from "../assets/characters/child1.svg";
import child2 from "../assets/characters/child2.svg";
import child3 from "../assets/characters/child3.svg";
import child4 from "../assets/characters/child4.svg";
import child5 from "../assets/characters/child5.svg";
import child6 from "../assets/characters/child6.svg";
import GreenRoundImg from "../assets/GreenRound.svg";
import LeftArrowImg from "../assets/ArrowIconLeft.svg";
import RightArrowImg from "../assets/ArrowIconRight.svg";
import commaImg from "../assets/comma.svg";
const WhatOurUsersSay = () => {
  const WhatOurUsersSay = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 0px;
    margin-top: 240px;
  `;
  const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 80px;

    width: 180px;
    height: 633px;
    margin-right: auto;
  `;
  const LeftElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 473px;

    width: 80px;
    height: 633px;
  `;
  const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 180px;
    height: 633px;
    margin-left: auto;
  `;
  const RightElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    gap: 473px;

    width: 80px;
    height: 633px;
  `;
  const ChildImg1 = styled.img`
    width: 180px;
    height: 180px;
    align-self: center;
    background: url(.jpg);
    /* Shadow  */

    filter: drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.05));
  `;
  const ChildImg = styled.img`
    width: 180px;

    /* Shadow  */

    filter: drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.05));
  `;
  const CenterElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 52px;

    width: 688px;
    height: 750px;
  `;
  const WhatOurUsersSayBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 688px;
    height: 128px;
  `;
  const WhatOur = styled.div`
    width: 446px;
    height: 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #272d4e;
  `;
  const UsersSay = styled.span`
    color: #0ac05e;
    margin-left: 5px;
  `;
  const WhatOurUsersSayPara = styled.div`
    width: 688px;
    height: 64px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    /* or 145% */

    color: #676a6c;
  `;
  const WhatOurUsersSaySmallBox = styled.div`
    box-sizing: border-box;
    position: relative;

    width: 525.11px;
    height: 489.69px;
    left: 0px;
    top: 40.5px;

    background: #ffffff;
    box-shadow: 0px 53.2273px 35.2119px rgba(56, 56, 56, 0.0607407),
      0px 27.6373px 17.9642px rgba(56, 56, 56, 0.05),
      0px 11.2596px 9.0077px rgba(56, 56, 56, 0.0392593),
      0px 2.55901px 4.35031px rgba(56, 56, 56, 0.0240741);
    border-radius: 26.3301px;
    padding: 100px 40px;
    z-index: 10;
  `;
  const WhatOurUsersSaySmallBoxShadow = styled.div`
    position: absolute;
    width: 480.96px;
    height: 357.21px;
    left: 103.39px;
    top: 274.79px;

    background: #ffffff;
    box-shadow: 0px 15.7981px 46.3881px rgba(215, 228, 249, 0.28);
    border-radius: 17.5534px;
    z-index: 1;
  `;
  const WhatOurUsersSaySmallPara = styled.div`
    width: 442.2px;
    height: 165.82px;
    font-family: "Folito";
    font-style: normal;
    font-weight: 400;
    font-size: 22.1098px;
    line-height: 41px;
  `;
  const GreenRound = styled.img`
    position: absolute;
    width: 66.48px;
    height: 66.48px;
    left: 230.4px;
    top: -20.09px;

    background: #0ac05e;
    border-radius: 50%;
  `;
  const Comma = styled.img`
    position: absolute;
    width: 41.67px;
    height: 29.92px;
    left: 240.4px;
    top: 0.09px;

    /* White color  */

    background: #0ac05e;
  `;
  //   page numbers //
  const PageBox = styled.div`
    margin-top: 100px;
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
  //   page numbers //

  return (
    <WhatOurUsersSay>
      <LeftContainer>
        <ChildImg1 src={child2} />
        <LeftElement>
          <ChildImg src={child1} />
          <ChildImg src={child3} />
        </LeftElement>
      </LeftContainer>
      {/* centercontainer */}
      <CenterElement>
        <WhatOurUsersSayBox>
          <WhatOur>
            What Our
            <UsersSay>Users Say</UsersSay>
          </WhatOur>
          <WhatOurUsersSayPara>
            Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations,
          </WhatOurUsersSayPara>

          <WhatOurUsersSaySmallBox>
            <WhatOurUsersSaySmallPara>
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </WhatOurUsersSaySmallPara>
            <GreenRound src={GreenRoundImg} alt="icon" />
            <Comma src={commaImg} alt="icon" />
          </WhatOurUsersSaySmallBox>
          {/* <PageBox></PageBox> */}
          <PageBox>
            <LeftSideBox>
              <LeftArrow src={LeftArrowImg} alt="leftarrow" />
            </LeftSideBox>
            <RightSideBox>
              <RightArrow src={RightArrowImg} alt="rightarrow"></RightArrow>
            </RightSideBox>
          </PageBox>
          {/*  */}
        </WhatOurUsersSayBox>
      </CenterElement>
      {/* centercontainer */}
      <RightContainer>
        <RightElement>
          <ChildImg src={child5} />
          <ChildImg src={child6} />
        </RightElement>
        <ChildImg1 src={child4} />
      </RightContainer>
    </WhatOurUsersSay>
  );
};

export default WhatOurUsersSay;
