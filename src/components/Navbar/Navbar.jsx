import React, { useState, useEffect } from "react";
import { navbarData } from "../DataForPage/dummyData";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handlerScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, [scroll]);

  return (
    <div>
      <div
        className={
          scroll
            ? "h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : "bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20  "
        }
      >
        <div className="grid grid-cols-2 justify-items-center items-center content-center w-full">
          <div className="pl-20 w-4/5">
            <img className="h-10" src={logo} alt="logo_img" />
          </div>
          <div className="flex flex-row items-center w-full">
            {navbarData.map((data) => (
              <div key={data.id}>
                <Link
                  className="cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                  to={data.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  {data.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
