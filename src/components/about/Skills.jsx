import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "100", skillName: "JAVASCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "HTML" },
  { skillClass: "p100", skillPercent: "100", skillName: "CSS" },
  { skillClass: "p100", skillPercent: "100", skillName: "REACT" },
  { skillClass: "p100", skillPercent: "100", skillName: "NODEJS" },
  { skillClass: "p100", skillPercent: "100", skillName: "TYPESCRIPT" },
  { skillClass: "p100", skillPercent: "100", skillName: "WORDPRESS" },
  { skillClass: "p100", skillPercent: "100", skillName: "PHP" },
  { skillClass: "p100", skillPercent: "100", skillName: "SHELL SCRIPTS" },
  { skillClass: "p80", skillPercent: "80", skillName: "DOCKER & KUBERNETES" },
  { skillClass: "p80", skillPercent: "80", skillName: "AWS SERVICES" },
  { skillClass: "p80", skillPercent: "80", skillName: "MSSQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "MONGODB" },
  { skillClass: "p80", skillPercent: "80", skillName: "DYNAMODB" },
  { skillClass: "p80", skillPercent: "80", skillName: "MYSQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "REDIS" },
  { skillClass: "p70", skillPercent: "80", skillName: "GIT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CORONA SDK" },
  { skillClass: "p70", skillPercent: "70", skillName: "ROKU BRIGHTSCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "LINUX" },
  { skillClass: "p50", skillPercent: "50", skillName: "PYTHON" },
  { skillClass: "p50", skillPercent: "50", skillName: "C++" },
  { skillClass: "p30", skillPercent: "30", skillName: "UNITY SDK" },
  { skillClass: "p30", skillPercent: "30", skillName: "UNREAL ENGINE" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
