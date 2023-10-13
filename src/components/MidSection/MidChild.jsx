import React from "react";
import { motion } from "framer-motion";

const MidChild = ({ data, click }) => {
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                y: click ? 50 : 0,
                x: click ? 50 : 0,
                opacity:1
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative flex flex-col z-10"
              key={item.id}
            >
              <div className="w-[500px]">
                <h3 className="text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark pb-4">
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div>
                  <p className="text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
                    {item.text}
                  </p>
                </div>
                <div className="absolute right-0 -z-10">
                  <motion.img initial={{
                    height:0, 
                    opacity:0
                  }} animate={{
                    opacity: 1,
                    height: click ? '525px': '525px'
                  }} 
                  transition={{type:'tween', duration:3}}
                  className="w-full" src={item.img} alt="" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MidChild;
