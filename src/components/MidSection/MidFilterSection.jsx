import React, { useState, useEffect } from "react";
import MidButton from "./MidButton";
import { sliderData } from "../DataForPage/dummyData";
import MidChild from "./MidChild";
import { motion } from "framer-motion";

const MidFilterSection = () => {
  const buttons = [
    {
      id: "1",
      name: "Room1",
    },
    {
      id: "2",
      name: "Room2",
    },
    {
      id: "3",
      name: "Room3",
    },
  ];

  const [selected, setSelected] = useState("1");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);

  function filterData(button) {
    const filter = sliderData.filter((item) => item.id == button);
    setData(filter);
    setSelected(button);
    setClick(true);
  }
  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((fil) => fil.id === "1"));
    };
    putData(sliderData);
  }, []);
  return (
    <div className="mx-auto pt-72 pb-56" id="news">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{ visible: { opacity: 1 , scale:1}, hidden:{ opacity:0, scale:0} }}
          className="w-4/5 mx-auto pl-24"
        >
          <h2 className="w-96 text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
            Check out some of the news
          </h2>
          <MidButton
            buttons={buttons}
            filter={filterData}
            selected={selected}
          ></MidButton>
        </motion.div>
        <div className="ml-20 pb-4 relative mx-auto w-8/12 rounded-xl drop-shadow-2xl">
          <MidChild data={data} click={click}></MidChild>
        </div>
      </div>
    </div>
  );
};

export default MidFilterSection;
