import styled from "styled-components";
import LinkedImg from "../assets/icons/linked_in.svg";
const LinkedIcon = () => {
  const LinkedIconContainer = styled.div``;
  const LinkedBox = styled.img`
    width: 38px;
    height: 38px;

    background: #0ac05e;
    border-radius: 4px;
    padding: 8px;
  `;
  return (
    <LinkedIconContainer>
      <LinkedBox src={LinkedImg} alt="icon" />
    </LinkedIconContainer>
  );
};

export default LinkedIcon;
