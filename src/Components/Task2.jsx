import React, { useState } from "react";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 0,
    title: "Startup Solution",
    description:
      "We help startups build product MVPs, set up teams, and access new technologies",
  },
  {
    id: 1,
    title: "Product Companies",
    description:
      "Our technical capabilities help accelerate product development & delivery.",
  },
  {
    id: 2,
    title: "Digital Agencies",
    description:
      "We help digital agencies manage talent shortages and expand expertise.",
  },
  {
    id: 3,
    title: "Enterprises",
    description:
      "Our 360° enterprise solutions range from product development to modernization.",
  },
];

const SideBar = () => {
  const arr = [
    "https://media.istockphoto.com/id/1332378618/photo/close-up-of-a-smart-young-woman-coding.webp?s=1024x1024&w=is&k=20&c=Nubt1w4sBHz1vdrxoKEt03LqI1Q9EdvakO8jDtmrSKw=",
    "https://media.istockphoto.com/id/1015220990/photo/beautiful-pretty-cyber-security-company-employee.jpg?s=612x612&w=0&k=20&c=wGmhhSrgODR3c1yMUpd-cENqM7IyPVCROx57NqhPmUg=",
    "https://media.istockphoto.com/id/1388227989/photo/a-portrait-of-a-happy-casually-dressed-man-with-moustaches-looking-at-camera-while-sitting-in.jpg?b=1&s=170667a&w=0&k=20&c=QZe0ipa2l8Hvq3tmpeOPXqNJL5UcM_5yvZJ9-Yo1y3Q=",
    "https://media.istockphoto.com/id/1395344871/photo/young-woman-writing-code-on-desktop-computer-in-stylish-loft-apartment-in-the-evening.jpg?b=1&s=170667a&w=0&k=20&c=tT9HfULVu0fSRVHsg2HS6jyc_8b0KbHOXKBakI1bBQw=",
  ];

  const [count, setCount] = useState(0);
  if (count == arr.length) {
    setCount(0);
  }
  setInterval(() => {
    setCount(count + 1);
  }, 4000);
  return (
    <div style={{ marginBottom: "100px" }}>
      <Link to="/">
        {" "}
        <button> Home </button>
      </Link>

      <div className="serviceBox">
        <div className="servBox1">
          <div className="servInfo">
            <h4>Trusted Full Service Design Agency since 2015</h4>
            <p>
              Webure Technologies teams up with Startups, SMEs & Enterprises to
              build and deliver user-centric products and solutions. We do it by
              infusing our technical expertise with design thinking, enabling
              businesses to transform the way they work.
            </p>
          </div>
          <img className="Image1" src={arr[count]} alt="IMAGE" />
        </div>
        <div className="servBox2">
          {Data.map((e) => (
            <div className={`servBox3 ${e.id === count ? "servBox4" : ""}`}>
              <h4 className="serh4">{e.title}</h4>
              <h5 className="serh5">{e.description}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
