import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/Navbar";
import Frame111 from "./components/Frame111";
import Features from "./components/Features";
import RecentlyAdded from "./components/RecentlyAdded";
import About from "./components/About";
import WhatOurUsersSay from "./components/WhatOurUsersSay";
import JoinTheCommunity from "./components/JoinTheCommunity";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <Frame111 />
      <Features />
      <RecentlyAdded />
      <About />
      <WhatOurUsersSay />
      <JoinTheCommunity />
      <Footer />
    </div>
  );
};

export default App;
