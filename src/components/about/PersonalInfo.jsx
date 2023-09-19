import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Enrique" },
  { meta: "last name", metaInfo: "Coronado" },
  // { meta: "Age", metaInfo: "41 Years" },
  { meta: "Available", metaInfo: "Yes" },
  { meta: "Country", metaInfo: "Mexico" },
  { meta: "phone", metaInfo: "+529996491746" },
  { meta: "Email", metaInfo: "encodari@gmail.com" },
  // { meta: "Skype", metaInfo: " enrique" },
  { meta: "langages", metaInfo: "Spanish, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
