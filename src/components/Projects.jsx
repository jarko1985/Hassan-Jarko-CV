import React from "react";
import { FaCircle } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h3
        style={{
          fontSize: "1.4rem",
          borderBottom: "3px solid #3a86ff",
          borderBottomStyle: "ridge",
          paddingBottom: 5,
        }}
      >
        Projects and Achievments
      </h3>
      <h4>
        <FaCircle
          style={{
            verticalAlign: "middle",
            fontSize: "10px",
            color: "#3a86ff",
            marginRight: "10px",
          }}
        />
        Airline Reservation System:
      </h4>
      <p
        style={{
          lineHeight: "20px",
          textAlign: "justify",
        }}
      >
        An B2B/B2C online Solution, Provides 24/7 online access to Airline
        Admins/Travel Agents, Enableing them to search & book online all types
        of travel services (with instant confirmation & on-request capability)
        services includes: Flight search || Reservation management || Ancillary
        booking || Payment processing and many more.
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>
        <a href="https://gfabe.tpconnects.online/">
          https://gfabe.tpconnects.online/
        </a>{" "}
        <br />
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>
        <a href="https://svuatabe.tpconnects.online/">
          https://svuatabe.tpconnects.online/
        </a>{" "}
        <br />
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>
        <a href="https://gfabe.tpconnects.online/">
          https://gfabe.tpconnects.online/
        </a>
      </p>

      <h4>
        <FaCircle
          style={{
            verticalAlign: "middle",
            fontSize: "10px",
            color: "#3a86ff",
            marginRight: "10px",
          }}
        />
        Ajman Buisness Map:
      </h4>
      <p
        style={{
          lineHeight: "20px",
          textAlign: "justify",
        }}
      >
        An e-platform which displays businesses conducted at the emirate’s level
        and distributes them depending on the economic activities and geographic
        location. It also serves as informative portal for decision-makers in
        government entities, business community, investors and other
        stakeholders
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>
        <a href="https://www.ajmanded.ae/imap">https://www.ajmanded.ae/imap/</a>
      </p>

      <h4 style={{ lineHeight: "10px", marginTop: 5, paddingTop: 30 }}>
        <FaCircle
          style={{
            verticalAlign: "middle",
            fontSize: "10px",
            color: "#3a86ff",
            marginRight: "10px",
          }}
        />
        Vehicle Speed and Location Monitoring System:
      </h4>
      <p
        style={{
          lineHeight: "20px",
          textAlign: "justify",
        }}
      >
        The project idea is to control the speed of the cars by limiting the
        pedal position,implemented speed limit enforcement via a new device that
        will be inside cars to monitor their location and subsequently whether
        they are within the speed limit
      </p>
      <h4 style={{ lineHeight: "10px" }}>
        <FaCircle
          style={{
            verticalAlign: "middle",
            fontSize: "10px",
            color: "#3a86ff",
            marginRight: "10px",
          }}
        />
        Microsoft Azure Certification
      </h4>
      <div
        data-share-badge-id="127b7a81-5fac-43ce-b050-a4a5689fde2e"
        data-share-badge-host="https://www.youracclaim.com"
        style={{
          height: 12,
          borderWidth: "1px",
          borderColor: "#000",
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
        data-iframe-width="180"
        data-iframe-height="230"
      ></div>
    </div>
  );
};
export default Projects;
