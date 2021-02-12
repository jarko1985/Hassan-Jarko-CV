import React from "react";
import { FaStar } from "react-icons/fa";

const Languages = () => {
  return (
    <div className="languageContainer">
      <h3
        style={{
          marginTop: 20,
          borderBottom: "3px solid #3a86ff",
          borderBottomStyle: "ridge",
          paddingBottom: 5,
        }}
      >
        Languages:
      </h3>
      <ul style={{ lineHeight: "25px" }}>
        <li>Arabic: Native Language</li>
        <li>
          <span style={{ marginRight: "5px" }}>English:</span> Speaking:
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>||</span>
          <span>Reading:</span>
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{ color: "grey", verticalAlign: "middle", fontSize: "18px" }}
          />
          <span style={{ marginLeft: "5px", marginRight: "5px" }}>||</span>
          <span>Writing:</span>
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{
              color: "#3a86ff",
              verticalAlign: "middle",
              fontSize: "18px",
            }}
          />
          <FaStar
            style={{ color: "grey", verticalAlign: "middle", fontSize: "18px" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Languages;
