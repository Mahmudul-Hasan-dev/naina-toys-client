import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Soft from './Soft';
import Plastic from './Plastic';
import Musical from './Musical';

const ShopByCategory = () => {
    
    return (
        <Tabs>
    <TabList>
      <Tab>Soft Animals</Tab>
      <Tab>Plastic Animals</Tab>
      <Tab>Musical Animals </Tab>
    </TabList>

    <TabPanel>
     <Soft></Soft>
    </TabPanel>
    <TabPanel>
      <Plastic></Plastic>
    </TabPanel>
    <TabPanel>
      <Musical></Musical>
    </TabPanel>
  </Tabs>
    );
};

export default ShopByCategory;