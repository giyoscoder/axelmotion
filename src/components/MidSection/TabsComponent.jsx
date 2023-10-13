import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../DataForPage/dummyData";

const TabsComponent = () => {
  return (
    <div id="features">
      <Tabs
        id="custom-animation"
        value="bedroom"
        className="grid grid-cols-2 mt-10 justify-items-center content-between w-full"
      >
        <div className="w-4/5 pl-24">
          <h1 className="no-underline text-6xl ot-10 pb-4 font-bold font-inter align-middle tracking-wide normal-case leading-none text-dark">
            Features
          </h1>
          <p className="no-underline text-2xl pt-10 pb-4 font-normal font-inter align-middle tracking-wide normal-case leading-none text-dark">
            Axel offers many great features. You can create your own room, request a service, buy modern looking furniture, sell a furniture, sell a furniture and so much more. Take a snek peek at  each one of.
          </p>
        
        <TabsHeader className="flex justify-center items-center  content-center bg-gray-100 ">
            {tabsData.map(({label, value})=> (
                <Tab className="" key={value} value={value}>
                    <p className='text-royalBlue font-inter leading-normal no-underline align-middle normal-case'>{label}</p>
                </Tab>
            ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {tabsData.map(({value, desc, linkText})=> (
          <TabPanel key={value } value={value}>
            <p className="no-underline relative right-3 text-2xl pt-10 pb-4 font-normal font-inter align-middle tracking-wide normal-case leading-none text-dark">
                {desc}
            </p>
            <span className="text-royalBlue font-inter leading-normal no-underline align-middle normal-case relative cursor-pointer hover:animate-pulse right-3">{linkText}</span>
          </TabPanel>
            ))}
        </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
