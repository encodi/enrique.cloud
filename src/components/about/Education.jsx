import React from "react";

const educationContent = [
  {
    year: "",
    degree: "Software Engineer",
    institute: "FMAT - Universidad Autonoma de Yucatan",
    details: ``,
  },
  {
    year: "",
    degree: "Physics Engineer",
    institute: "FI - Universidad Autonoma de Yucatan",
    details: ``,
  },
  {
    year: "Currently",
    degree: "Professional Certificate in Computer Science for Artificial Intelligence",
    institute: "EDX - Harvard University",
    details: ``,
  },
  {
    year: "",
    degree: "NodeJS Application Developer",
    institute: "OpenJS Foundation",
    details: ``,
  },
  {
    year: "",
    degree: "Certified in Dynamic Web Development (PHP, MySQL, HTML, CSS)",
    institute: "Universidad Autonoma de Yucatan",
    details: ""
  },
  {
    year: "",
    degree: "Course: Introduction to Hardware and Software Security",
    institute: "Universidad Autonoma de Yucatan",
    details: ""
  },
  {
    year: "",
    degree: "Course: Tools and concepts of interactive system design",
    institute: "Universidad Politecnica de San Luis Potosi",
    details: ""
  },
  {
    year: "",
    degree: "Course: Introduction to usability of interactive systems",
    institute: "Universidad Politecnica de San Luis Potosi",
    details: ""
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
