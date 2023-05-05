import styled from "styled-components";
import InstagramIcon from "./InstagramIcon";
import LinkedIcon from "./Linkednicon";
import FacebookIcon from "./Facebookicon";
import TwitterIcon from "./Twittericon";
const Footer = () => {
  const Container = styled.div`
    margin-top: 140px;
  `;
  const FooterContainer = styled.div`
    display: flex;

    gap: 120px;
  `;
  const Footer1Box = styled.div``;
  const TinyFacesNft = styled.div`
    width: 136px;
    height: 23px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #233348;

    mix-blend-mode: normal;
  `;
  const TinyFacesNftPara = styled.div`
    margin-top: 36px;
    width: 334.91px;
    height: 60px;
    left: 100px;
    top: 6004px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */

    color: #425466;
  `;
  const FooterItems = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    width: 112.34px;
    height: 180px;
    left: 571px;
    top: 5998px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    /* or 200% */

    color: #425466;
  `;
  const IconContainer = styled.div`
    display: flex;
    margin-top: 41px;
    gap: 20px;
  `;

  const FooterLine = styled.div`
    width: 1240px;
    height: 0px;
    left: 100px;
    top: 6218px;

    border: 2px solid #e0e0e0;
    margin-top: 40px;
  `;
  const CopyrightContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1240px;
    height: 24px;
    left: 100px;
    top: 6240px;
  `;
  const CopyRightTitle = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #425466;
  `;
  const ContactUSAndTermsContainer = styled.div`
    display: flex;
    gap: 38px;
  `;
  const ContactUsAndTerms = styled.div`
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    color: #425466;
  `;
  return (
    <Container>
      <FooterContainer>
        <Footer1Box>
          <TinyFacesNft>TinyFaces.NFT</TinyFacesNft>
          <TinyFacesNftPara>
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself.
          </TinyFacesNftPara>
        </Footer1Box>
        {/*  */}
        <Footer1Box>
          <TinyFacesNft>About</TinyFacesNft>
          <FooterItems>
            <div>Home</div>
            <div>Features</div>
            <div>FAQs</div>
            <div>Reviews</div>
            <div>Stories</div>
          </FooterItems>
        </Footer1Box>
        {/*  */}
        <Footer1Box>
          <TinyFacesNft>Privacy</TinyFacesNft>
          <FooterItems>
            <div>Privacy</div>
            <div>Policy</div>
            <div>Payment</div>
            <div>Terms</div>
          </FooterItems>
        </Footer1Box>
        {/*  */}
        <Footer1Box>
          <TinyFacesNft>Contact Us</TinyFacesNft>
          <FooterItems>
            <div>+91 88188 75275 </div>
            <div>sehjadpatel8599@gmail.com</div>
            <IconContainer>
              <InstagramIcon />
              <LinkedIcon />
              <FacebookIcon />
              <TwitterIcon />
            </IconContainer>
          </FooterItems>
        </Footer1Box>
      </FooterContainer>
      <FooterLine></FooterLine>
      <CopyrightContainer>
        <CopyRightTitle>
          © Copyright 2022 TinyFaces.NFT All rights reserved.
        </CopyRightTitle>
        <ContactUSAndTermsContainer>
          <ContactUsAndTerms>Contact Us</ContactUsAndTerms>
          <ContactUsAndTerms>Terms</ContactUsAndTerms>
        </ContactUSAndTermsContainer>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;
