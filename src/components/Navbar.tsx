import styled from "styled-components";
const Navbar = () => {
  const NavbarContainer = styled.div`
    width: 165px;
    height: 38px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
    letter-spacing: -0.06em;
    color: #09ad55;
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
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-3">
          <div className="row">
            <NavbarContainer className="col-3">
              TinyFaces<span style={{ color: "#313131" }}>NFT</span>
            </NavbarContainer>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <Home className="col-3">Home</Home>
            <About className="col-3">About</About>
            <Features className="col-3">Features</Features>
            <Contact className="col-3">Contact</Contact>
          </div>
        </div>
        <div className="col-3">
          <div className="row justify-content-end align-items-center">
            <Login className="col-3">Login</Login>
            <SignUp className="col-3">Sign up</SignUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
