import React from "react";
import { cardData } from "../DataForPage/dummyData";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";
import star from "../../assets/images/star.svg";
import starWhile from "../../assets/images/starWhite.svg";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MidCard = () => {
  return (
    <div id="demo">
      <div className="text-center">
        <h2 className="text-dark text-6xl font-bold no-underline pt-20 font-inter align-middle tracking-wide normal-case leading-none cursor-pointer">
          Demo Request
        </h2>
        <p className="text-dark text-2xl font-normal no-underline pt-10 font-inter align-middle tracking-wide normal-case leading-none cursor-pointer">
          Explain all the nice stuff that Axel is providing and much more...
        </p>
        <div className="w-full flex flex-row items-center justify-evenly pt-10">
          <div>
            <img className="h-12 cursor-pointer" src={googlePlay} alt="" />
          </div>
          <div>
            <img className="h-12 cursor-pointer" src={appleStore} alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center gap-8 content-between w-full pt-32">
        {cardData.map((item) => {
          return (
            <motion.div initial='hidden' whileInView='visible' viewport={{once: true}} variants={{hidden: {opacity:0 , scale:0}, visible: {opacity:1 , scale: 1}}} transition={{duration: 1.5}}>
                <Card
                  className={
                    item.id === "1"
                      ? "w-80 bg-dark border border-white"
                      : "bg-white w-80"
                  }
                >
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      {item.title}
                    </Typography>
                    <Typography>{item.text}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Typography>See more</Typography>
                  </CardFooter>
                </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MidCard;
