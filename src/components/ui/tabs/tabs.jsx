import React from "react";

import styles from "./tabs.module.scss";

const RaidoTabs = ({
  tabs,
  setCurrentTab,
  currentTab,

  variant = 1,
}) => {
  return (
    <div className={`${styles.tabs} ${styles[`v${variant}`]}`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tab} ${
            currentTab.id === tab.id ? styles.active : ""
          }`}
          onClick={() => {
            setCurrentTab(tab);
          }}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default RaidoTabs;
