import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import Frame111 from "./components/Frame111";
import Features from "./components/Features";
import RecentlyAdded from "./components/RecentlyAdded";
import About from "./components/About";
import WhatOurUsersSay from "./components/WhatOurUsersSay";
import JoinTheCommunity from "./components/JoinTheCommunity";
import Footer from "./components/Footer";
import styled from "styled-components";

const App = () => {
  const AppContainer = styled.div`
    padding: 0px 100px;
    margin: auto;
    margin-top: 52px;
    @media (max-width: 1200px) {
      padding: 0px;
      width: 95vw;
    }
  `;
  return (
    <AppContainer>
      <Navbar />
      <Frame111 />
      <Features />
      <RecentlyAdded />
      <About />
      <WhatOurUsersSay />
      <JoinTheCommunity />
      <Footer />
    </AppContainer>
  );
};

export default App;
