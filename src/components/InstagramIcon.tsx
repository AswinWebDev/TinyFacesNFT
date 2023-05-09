import styled from "styled-components";
import InstagramImg from "../assets/icons/instagram.svg";

const InstagramIcon = () => {
  const InstagramIconContainer = styled.div``;

  const InstagramBox = styled.img`
    width: 38px;
    height: 38px;

    background: #0ac05e;
    border-radius: 4px;
    padding: 8px;
  `;
  return (
    <InstagramIconContainer>
      <InstagramBox src={InstagramImg} alt="icon" />
    </InstagramIconContainer>
  );
};

export default InstagramIcon;
