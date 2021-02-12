import React from "react";
import { FaBuilding, FaPhone, FaEnvelope, FaPortrait } from "react-icons/fa";
import pic from "../images/pp.jpg";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerText">
          <h1 style={{ fontFamily: "Grandstander" }}>Hassan Jarko</h1>
          <h2>Full Stack Engineer</h2>
          <h4>
            React JS || Node JS || React Native || CSS || MYSQL || MongoDB{" "}
          </h4>

          <span>
            <FaBuilding
              style={{
                fontSize: "20px",
                verticalAlign: "middle",
                color: "brown",
                marginRight: "3px",
              }}
            />
            Dubai Investment Park
          </span>
          <span
            style={{
              fontSize: "25px",
              marginLeft: "5px",
              marginRight: "5px",
              verticalAlign: "middle",
            }}
          >
            ||
          </span>
          <span>
            <FaPhone
              style={{
                fontSize: "20px",
                verticalAlign: "middle",
                color: "green",
                marginRight: "3px",
              }}
            />
            +971 50 951 8842
          </span>
          <span
            style={{
              fontSize: "25px",
              marginLeft: "5px",
              marginRight: "5px",
              verticalAlign: "middle",
            }}
          >
            ||
          </span>
          <span>
            <FaEnvelope
              style={{
                color: "#3a86ff",
                fontSize: "20px",
                verticalAlign: "middle",
                marginRight: "5px",
              }}
            />
            <span>
              <a href="#hassan.jarko@yahoo.com">hassan.jarko@yahoo.com</a>
            </span>
          </span>
        </div>
        <div className="headerImage">
          <img src={pic} alt="" />
        </div>
      </div>
      <span>
        <FaPortrait
          style={{
            color: "#3a86ff",
            fontSize: "20px",
            verticalAlign: "middle",
            marginRight: "10px",
          }}
        />
        <a href="https://hassan-jarko-portfolio.netlify.app/">
          Portfolio website
        </a>
      </span>
    </>
  );
};

export default Header;
