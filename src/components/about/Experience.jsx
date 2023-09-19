import React from "react";

const experienceContent = [
  {
    year: "2022 - Current",
    position: "Backend Developer",
    compnayName: "Ksquare - Miami Baptist Health Hospital",
    details: `Experience working together with the back-end team of Baptist Health designing and implementing a serverless backend architecture using NodeJS with Lambda Functions and Gateway in AWS to connect  a third-party service with the health care data of the users to the new mobile and web applications of the hospital.`,
  },
  {
    year: "2018 - 2022",
    position: "Backend Developer",
    compnayName: "Ksquare - BSA",
    details: `Experience working together with the back-end core-api team for BSA creating a microservices backend architecture, using NodeJS, hapijs, and mssql to be used by all of their applications and services.`,
  },
  {
    year: "2015 - 2018",
    position: "Full-Stack Developer",
    compnayName: "Accedo.tv",
    details: `Experience working for different clients in the streaming content category, worked at the front-end and in some of the back-end for applications like EPIX, Scripps, BeachBody, Fox NOW, SeesoTV for NBC, Cinepolis Klick, Telstra, Apogee, Newson, ShowTime TV, Yaveo For DirectTV`,
  },
  {
    year: "2013 - 2015",
    position: "Co-Founder and Team Technical Lead Developer",
    compnayName: "Bau-Box Ahhveo",
    details: `Administrating a team using a SCRUMM process, gathering requirements, creating tickets, managing resources and services being used, and I did coding as well for the streaming application to be created for Roku, Samsung Smart TV and Amazon Fire TV set-top boxes.`,
  },
  {
    year: "2010 - 2013",
    position: "Developer",
    compnayName: "FirstMotion International",
    details: `Experience working for different web and mobile applications as a developer, worked with iOS native development of a small video-game for kids using objective-c and coronasdk for the android version, worked in creating an android + ios application for Intocables music group using PhoneGap, worked as a developer in a local project called yoCuponeo and other small local business web pages using PHP, MySQL, Wordpress, and Prestashop.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
