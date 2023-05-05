import styled from "styled-components";
import TwitterImg from "../assets/icons/twitter.svg";
const TwitterIcon = () => {
  const TwitterIconContainer = styled.div``;
  const TwitterBox = styled.img`
    width: 38px;
    height: 38px;

    background: #0ac05e;
    border-radius: 4px;
    padding: 8px;
  `;
  return (
    <TwitterIconContainer>
      <TwitterBox src={TwitterImg} alt="icon" />
    </TwitterIconContainer>
  );
};

export default TwitterIcon;
