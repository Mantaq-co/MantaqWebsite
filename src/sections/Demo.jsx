import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Skills from "../components/ui/Skills";

const Demo = () => {
  return (
    <div className="w-[70%] mx-auto flex items-center justify-center text-center  my-10">
      <Tabs isLazy defaultIndex={0} variant="custom" colorScheme="teal">
        <TabList>
          <Tab>Website Development</Tab>
          <Tab>Application Development</Tab>
          <Tab>Full Stack Development</Tab>
          <Tab>UI/UX Design</Tab>
          <Tab>ML/NLP Services</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Demo;
