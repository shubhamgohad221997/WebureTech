import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SideBar from "./Task2";

const tabs = [
  {
    id: 1,
    title: "Share the Job Description",
    description:
      "Share complete roles and responsibilities, must-have skills, necessary market experience and budget.",
  },
  {
    id: 2,
    title: "Review & Shortlist the Matches",
    description: `We'll match the best-fitted profile(s) in the next 48 hours for your review. You shortlist and share the time slots for us to schedule interviews.`,
  },
  {
    id: 3,
    title: "Interview & Hire",
    description: "Assess them until you are confident and provide feedback.",
  },
  {
    id: 4,
    title: "Onboard & Manage",
    description: `We'll sort all the legalities and contracts with the talent, ensure a smooth onboarding and help you manage the talent.`,
  },
];

const Task1 = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  const [openTab, setopenTab] = useState(
    tabs.reduce((acc, tab) => ({ ...acc, [tab.title]: false }), {})
  );

  const handleTabClick = (tabTitle) => {
    setActiveTab(tabTitle);

    setopenTab({ ...openTab, [tabTitle]: !openTab[tabTitle] });
  };

  return (
    <div>
      <Link to="/">
        <button> Home </button>
      </Link>
      <div className="mainBox">
        {tabs.map((ele) => (
          <div key={ele.title}>
            <div
              className={`tab ${activeTab === ele.title ? "tab1" : ""}`}
              onClick={() => handleTabClick(ele.title)}
            >
              <div
                className={`numID ${activeTab === ele.title ? "numID1" : ""}`}
              >
                {ele.id}
              </div>
              {ele.title}
            </div>
            {openTab[ele.title] && (
              <div className="tab-des">
                {" "}
                <hr className="line" /> {ele.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task1;
