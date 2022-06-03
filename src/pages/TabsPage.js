import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Center } from "../components";
import Breadcrumb from "../components/Breadcrumb";
import Tabs from "../components/Tabs";

const tabs = [
  { value: 1, label: "Item 1" },
  { value: 2, label: "Item 2" },
  { value: 3, label: "Item 3" },
];

const TabsPage = () => {
  const [tab, setTab] = useState(1);

  const handleTabChange = (value) => {
    setTab(value);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Tabs</Breadcrumb.Item>
      </Breadcrumb>
      <Center>
        <Tabs value={tab} onChange={handleTabChange}>
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.value} value={tab.value}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs>
      </Center>
    </>
  );
};

export default TabsPage;
