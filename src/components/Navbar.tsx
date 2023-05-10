import styled from "styled-components";
const Navbar = () => {
  const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1200px) {
      justify-content:center;
  `;

  const NavbarLogo = styled.div`
    width: 165px;
    height: 38px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    letter-spacing: -0.06em;
    color: #09ad55;
    @media (max-width: 1200px) {
      width: 170px;
      height: auto;
      line-height: 0;
    }
  `;
  const CenterNav = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 1200px) {
      display: none;
    }
  `;
  const LoginAndSignUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 35.3px;
    @media (max-width: 1200px) {
      display: none;
    }
  `;
  const Home = styled.div`
    height: 27px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #313131;
  `;
  const About = styled.div`
    height: 27px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #817c8c;
  `;
  const Features = styled.div`
    height: 27px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #817c8c;
  `;
  const Contact = styled.div`
    height: 27px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #817c8c;
  `;
  const Login = styled.div`
    height: 27px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #313131;
  `;
  const SignUp = styled.div`
    text-align: center;
    box-shadow: 0px 20px 13px rgba(10, 192, 94, 0.03),
      0px 8.14815px 6.51852px rgba(56, 56, 56, 0.0392593),
      0px 1.85185px 3.14815px rgba(56, 56, 56, 0.0240741);
    border-radius: 8px;
    box-sizing: border-box;
    width: 153.29px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    color: #313131;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #fafafa;
    background: #0ac05e;
    padding: 10px 12px;
    white-space: nowrap;
  `;
  return (
    <NavbarContainer>
      <div>
        <NavbarLogo>
          TinyFaces<span style={{ color: "#313131" }}>NFT</span>
        </NavbarLogo>
      </div>
      <div>
        <CenterNav>
          <Home>Home</Home>
          <About>About</About>
          <Features>Features</Features>
          <Contact>Contact</Contact>
        </CenterNav>
      </div>
      <div>
        <LoginAndSignUp>
          <Login>Login</Login>
          <SignUp>Sign up</SignUp>
        </LoginAndSignUp>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
