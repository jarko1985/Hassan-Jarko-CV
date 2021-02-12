import React from "react";
import { FaCheck } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h3
        style={{
          fontSize: "1.4rem",
          borderBottom: "3px solid #3a86ff",
          borderBottomStyle: "ridge",
          fontFamily: "Grandstander",
          paddingBottom: 5,
        }}
      >
        Skills
      </h3>
      <ul style={{ textAlign: "justify" }}>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Well versed in React js...including Redux, Context API, Props, Hoc,
          Routing....etc
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Experience with java Script ES6 for more than 5 years
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Deep knowledge in responsive web Design using CSS and SASS and
          bootstrap
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Server Side Rendering using Node js (POST, GET, PATCH and DELETE
          requests)
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Experience dealing with MongoDB, SQL, and Firebase....
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Client Side Rendering with React or PUG or EJS or HBS
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          knowledge dealing with cloud technologies like Azure, google cloud,
          and Amazon AWS
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
              marginTop: "0px",
            }}
          />
          Experience dealing with versions and version control Git-GitHub- Bit
          bucket
        </li>

        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Software engineering:write scripts, software test procedures,
          compatibility
        </li>
        <li
          style={{
            display: "flex",
          }}
        >
          <FaCheck
            style={{
              verticalAlign: "bottom",
              fontSize: "19px",
              color: "green",
              marginRight: "10px",
            }}
          />
          <span>
            Hardware experience:in depth knowledge of how a computer is built,as
            well as the various components that go into the computers.
          </span>
        </li>
        <li>
          <FaCheck
            style={{
              verticalAlign: "middle",
              fontSize: "15px",
              color: "green",
              marginRight: "10px",
            }}
          />
          Programming languages:
        </li>
      </ul>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px",
        }}
      >
        <div style={{ marginBottom: "9px" }}>
          <a class="myButton">Java</a>
          <a class="myButton">JavaScript</a>
          <a class="myButton">Dart</a>
          <a class="myButton">React js</a>
          <a class="myButton">Node js</a>
          <a class="myButton">HTML5</a>
          <a class="myButton">CSS</a>
        </div>
        <div>
          <a class="myButton">SQL</a>
          <a class="myButton">JSON</a>
          <a class="myButton">MongoDB</a>
          <a class="myButton">FireBase</a>
          <a class="myButton">Ajax</a>
          <a class="myButton">Oracle</a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
