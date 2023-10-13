import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import WrapperContainer from "../wrapperContainer/WrapperContainer";
import MidFilterSection from "../MidSection/MidFilterSection";
import MidComponentParent from "../MidSection/MidComponentParent";
import TabsComponent from "../MidSection/TabsComponent";
import FurnitureFlow from "../MidSection/FurnitureFlow";
import NewsLatter from "../MidSection/NewsLatter";
import MidCard from '../MidSection/Card'

const Home = () => {
  return (
    <div>
      <WrapperContainer navHead>
        <Navbar/>
        <Header />
      </WrapperContainer>
      <div className="bg-gray-100 w-full">
        <WrapperContainer>
          <MidFilterSection />
          <MidComponentParent/>
          <TabsComponent/>
          <FurnitureFlow/>
          <MidCard/>
          <NewsLatter/>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default Home;
