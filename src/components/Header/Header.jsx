import React from "react";
import { Switch } from "@material-tailwind/react";
import header1 from "../../assets/images/headerImage.png";

const Header = () => {
  return (
    <div className="mx-auto pt-16">
      <div className="grid grid-cols-2 justify-items-center items-center">
        <div className="w-4/5 pl-24">
          <Switch color="blue" defaultChecked />
          <h1 className="text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case  leading-normal text-dark">
            Axel Brand new
            <span className="font-bold italic text-6xl"> Furniture </span>{" "}
            Mobile app
          </h1>
          <div className="mt-4">
            <p className="w-4/5 font-inter font-medium no-underline align-middle trancking-wide normal-case text-dark text-2xl">
              Giving your home a propper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look what we offer
              with simple button click.
            </p>
          </div>
          <div className="pb-20">
            <button className="pushable mt-4 ">
              <span className="front">Start now</span>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case  leading-normal text-dark">
            Moder Design
          </h2>
          <img
            className="h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
