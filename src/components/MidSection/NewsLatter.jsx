import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const NewsLatter = () => {
  const [email, setEmail] = useState("");
  const handlerEmail = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex items-center justify-center content-center justify-items-center relative">
      <div className="bottom-14 h-full flex justify-evenly bg-darkBlue w-4/5 rounded-xl translate-y-32 duration-700">
        <div>
          <h2 className="w-full text-4xl pt-4 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pl-8">
            Sign up for our newsletter
          </h2>
          <p className="block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white text-xl pl-8">
            Join our newletter and get news in your inbox every week!
          </p>
        </div>
        <div className="flex items-center justify-items-center content-center">
          <div className="py-4 w-64 text-white">
            <Input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="text-white"
              label="Email"
            />
          </div>
          <div>
            <Button
              onClick={handlerEmail}
              className="ml-2"
              n
              color="blue"
              ripple={true}
            >
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
