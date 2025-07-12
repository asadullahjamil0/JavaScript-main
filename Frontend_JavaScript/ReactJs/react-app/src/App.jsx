import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DefaultExport, NamedExport2 } from "./namedExport";
import ClassComponent, { FunctionComponent } from "./ClassComponent";
import ConsructorInClass from "./ConsructorInClass";
import Counter from "./Counter.jsx";
import SchoolInfo from "./SchoolInfo.jsx";

function App() {
  const [count, setCount] = useState(0);

  const schoolObj = {
    student1: {
      name: "Moiz",
      age: 15,
      school: "National School",
      class: "10th-C",
      classId: 91100,
      section: 4,
      city: "Hyderabad",
      teacherName: "Iftikhar A",
    },
    student2: {
      name: "Abdul-Rafay",
      age: 14,
      school: "Muslim School",
      class: "9th-B",
      classId: 67190,
      section: 4,
      city: "Hyderabad",
      teacherName: "Iftikhar A",
    },
    student3: {
      name: "Ayesha",
      age: 13,
      school: "City Model School",
      class: "8th-A",
      classId: 56234,
      section: 2,
      city: "Karachi",
      teacherName: "Mrs. Fatima",
    },
    student4: {
      name: "Usman",
      age: 16,
      school: "Bright Future Academy",
      class: "11th-Science",
      classId: 78320,
      section: 1,
      city: "Lahore",
      teacherName: "Mr. Kamran",
    },
    student5: {
      name: "Sana",
      age: 15,
      school: "Iqra Public School",
      class: "10th-A",
      classId: 87455,
      section: 3,
      city: "Rawalpindi",
      teacherName: "Miss Hina",
    },
    student6: {
      name: "Bilal Ahmed",
      age: 17,
      school: "The Learning Hub",
      class: "12th-Pre Eng",
      classId: 92345,
      section: 2,
      city: "Islamabad",
      teacherName: "Sir Naveed",
    },
    student7: {
      name: "Hafsa Noor",
      age: 13,
      school: "Al-Huda Grammar School",
      class: "8th-C",
      classId: 54321,
      section: 1,
      city: "Multan",
      teacherName: "Miss Zainab",
    },
    student8: {
      name: "Taha Siddiqui",
      age: 16,
      school: "Crescent Model School",
      class: "11th-Commerce",
      classId: 88990,
      section: 5,
      city: "Faisalabad",
      teacherName: "Sir Imran",
    },
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <SchoolInfo School={schoolObj} />
      <Counter age={23} />
      <DefaultExport />
      <NamedExport2 />
      <ClassComponent name="Asad Ullah Jamil" />
      <ClassComponent name="Hafeez">
        <h2>This is Children props</h2>
        <button>Submit</button>
        <ul>
          <li>Zain</li>
          <li>Mubashir</li>
          <li>Haider</li>
        </ul>
      </ClassComponent>
      <FunctionComponent />
      <ConsructorInClass name="Asad Ullah" />
    </>
  );
}

export default App;
