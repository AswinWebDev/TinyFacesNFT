import styled from "styled-components";
import char8 from "../assets/characters/char8.svg";
const JoinTheCommunity = () => {
  const JoinTheCommunityContainer = styled.div`
    display: flex;
    margin-top: 140px;
  `;
  const Character7Container = styled.div`
    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 504.82px;
    height: 472px;
    background: #daf6e7;
    border-radius: 209px 0px 0px 0px;
  `;
  const Character7Img = styled.img`
    position: absolute;
    width: 460.05px;
    height: 402px;
    left: 55px;
    bottom: 0px;
  `;
  const JoinTheCommunityBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 737.19px;
    height: 472px;
    left: 600.81px;
    top: 5327px;

    background: #f7f7f7;
    border-radius: 0px 0px 236px 0px;
    text-align: left;
    padding-left: 54px;
    padding-right: 150px;
  `;

  const JoinThe = styled.div`
    width: 480px;
    height: 40px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 40px;
    /* identical to box height, or 91% */

    color: #272d4e;
  `;
  const Community = styled.span`
    color: #0ac05e;
  `;
  const JoinTheCommunityPara = styled.div`
    width: 620px;
    height: 128px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    /* or 145% */

    color: #676a6c;

    margin-top: 30px;
  `;
  const DiscordAndTwitterBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    width: 465px;
    height: 52px;
    margin-top: 30px;
  `;
  const DiscordBox = styled.div`
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
  `;
  const DiscordTitle = styled.div`
    width: 112px;
    height: 32px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    color: #ffffff;
  `;
  const TwitterBox = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 10px;

    width: 333px;
    height: 52px;

    border: 1px solid #0ac05e;
    filter: drop-shadow(0px 25px 50px rgba(10, 192, 94, 0.1));
    border-radius: 9px;
  `;
  const TwitterTitle = styled.div`
    width: 153px;
    height: 32px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    /* identical to box height, or 178% */

    color: #0ac05e;
  `;
  return (
    <JoinTheCommunityContainer>
      <Character7Container>
        <Character7Img src={char8} alt="charcter picture" />
      </Character7Container>
      <JoinTheCommunityBox>
        <JoinThe>
          Join The <Community>Community</Community>
        </JoinThe>
        <JoinTheCommunityPara>
          We're still hiding in the metaverse. While you wait for the collection
          to drop, join our Discord channel or follow us on Twitter keep up to
          date with our latest work and announcements.
        </JoinTheCommunityPara>
        <DiscordAndTwitterBox>
          <DiscordBox>
            <DiscordTitle>Join Discord</DiscordTitle>
          </DiscordBox>
          <TwitterBox>
            <TwitterTitle>Follow On Twitter</TwitterTitle>
          </TwitterBox>
        </DiscordAndTwitterBox>
      </JoinTheCommunityBox>
    </JoinTheCommunityContainer>
  );
};

export default JoinTheCommunity;
