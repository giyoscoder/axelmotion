import React from "react";
import { room } from "../DataForPage/dummyData";
import { motion } from "framer-motion";

const MidComponentItem = ({ title, img, text, reverse }) => {
  return (
    <div id="company">
      {reverse ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-2 justify-items-center items-center "
        >
          <div className="w-4/5 pl-24">
            <h2 className="no-underline text-6xl ot-10 pb-4 font-bold font-inter align-middle tracking-wide normal-case leading-none text-dark">
              {title}
            </h2>
            <p className="no-underline text-2xl ot-10 pb-4 font-normal w-full font-inter align-middle tracking-wide normal-case leading-none text-dark">
              {text}
            </p>
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </div>
          <div>
            <img
              className="h-[775px] pt-10 hover:rotate-6 duration-100 cursor-pointer"
              src={img}
              alt="mid_phone"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="flex flex-row-reverse justify-around items-center w-full "
            id="room"
          >
            <div className="">
              <h2 className="no-underline text-6xl ot-10 pb-4 font-bold font-inter align-middle tracking-wide normal-case leading-none text-dark">
                {title}
              </h2>
              <div className="flex flex-col  ">
                {room.map((item) => {
                  return (
                    <div className="flex  items-center py-2" key={item.id}>
                      <div className="mr-4">
                        <img src={item.img} className="w-16 h-16" alt="" />
                      </div>
                      <p className="no-underline text-2xl ot-10 pb-4 font-normal w-full font-inter align-middle tracking-wide normal-case leading-none text-dark">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <img
                className="h-[775px] ot-4 hover:rotate-[-6deg] duration-1000 cursor-pointer"
                src={img}
                alt="phone"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MidComponentItem;
