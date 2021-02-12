import React from "react";
import { FaPhone } from "react-icons/fa";

const References = () => {
  return (
    <div className="ReferencesContainer">
      <h3
        style={{
          borderBottom: "3px solid #3a86ff",
          borderBottomStyle: "ridge",
          paddingBottom: 4,
          marginTop: 0,
          paddingTop: 0,
          marginBottom: 10,
        }}
      >
        References:
      </h3>
      <ul style={{ lineHeight: "25px" }}>
        <li>
          Dr. Mirna Nachouki:Assistant Professor Ajman university
          <FaPhone style={{ color: "green", verticalAlign: "middle" }} />
          +971 50 455 4056
        </li>
        <li>
          Dr. Khaled Ammar:Assistant Professor Ajman university{" "}
          <FaPhone style={{ color: "green", verticalAlign: "middle" }} />
          +971 50 711 9397
        </li>
      </ul>
    </div>
  );
};
export default References;
