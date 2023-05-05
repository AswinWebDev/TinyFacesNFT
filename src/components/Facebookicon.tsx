import styled from "styled-components";
import FacebookImg from "../assets/icons/f.svg";
const FacebookIcon = () => {
  const FacebookIconContainer = styled.div``;
  const FacebookBox = styled.img`
    width: 38px;
    height: 38px;

    background: #0ac05e;
    border-radius: 4px;
    padding: 8px;
  `;
  return (
    <FacebookIconContainer>
      <FacebookBox src={FacebookImg} alt="icon" />
    </FacebookIconContainer>
  );
};

export default FacebookIcon;
