import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabChange = (tab) => () => setActiveTab(tab);

  return (
    <section id="skills">
      <div>
        {/* Heading */}
        <div className="flex flex-col items-center pb-12 px-3">
          <span className="text-center mb-4 text-[#e60b4d]">
            Technical Skills and Experience in Modern Technologies
          </span>
          <h2 className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300">
            Professional Overview
          </h2>
        </div>

        <div className="containers">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-4 items-center justify-center px-3">
            {[
              ["tab1", "Frontend Technologies"],
              ["tab2", "Backend Technologies"],
              ["tab3", "Innovative Skills"],
              ["tab5", "Education & Certifications"],
              ["tab4", "Professional Experience"],
            ].map(([key, label]) => (
              <button
                key={key}
                id="skillButton"
                className={`w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold ${
                  activeTab === key
                    ? "text-[#e60b4d] rounded-box md:p-6"
                    : "text-gray-300"
                } focus:outline-none`}
                onClick={handleTabChange(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="card-container">

            {/* Frontend */}
            {activeTab === "tab1" && (
              <div id="dataBox" className="rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
                  {[
                    ["HTML5", "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"],
                    ["CSS3", "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"],
                    ["JavaScript", "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"],
                    ["React", "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"],
                    ["Tailwind", "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"],
                    ["Bootstrap", "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"],
                    ["Vite", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"],
                    ["Redux", "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"],
                  ].map(([alt, src]) => (
                    <img key={alt} className="icons" src={src} alt={alt} />
                  ))}
                </div>

                <div className="paraBox mt-4">
                  <p>
                    As a full-stack developer, I craft responsive and interactive
                    user interfaces using modern frontend technologies with a
                    strong focus on performance, accessibility, and clean UI
                    architecture.
                  </p>
                </div>
              </div>
            )}

            {/* Backend */}
            {activeTab === "tab2" && (
              <div
                id="dataBox"
                className="rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center"
              >
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-10">
                  {[
                    ["Node", "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png"],
                    ["Express", "https://play-lh.googleusercontent.com/HfkvqGGkSikk8QMmPz1I4WRFpJd3iV2V-BD1bdohdS-_j9tifA3w-dPhRn4dsDl0jiA=w480-h960-rw"],
                    ["MongoDB", "https://miro.medium.com/v2/resize:fit:256/1*XR69xeq43LgKB0T_LjZqwQ.png"],
                    ["API", "https://cdn0.iconfinder.com/data/icons/buno-api/32/api_calls_programming-10-512.png"],
                    ["WordPress", "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/wordpress-512.png"],
                  ].map(([alt, src]) => (
                    <img key={alt} className="icons" src={src} alt={alt} />
                  ))}
                </div>

                <div className="paraBox mt-4">
                  <p>
                    I build scalable backend systems using Node.js, Express, and
                    MongoDB, with expertise in REST APIs, integrations, and
                    WordPress-based solutions focused on security and
                    performance.
                  </p>
                </div>
              </div>
            )}

            {/* Innovative Skills */}
            {activeTab === "tab3" && (
              <div
                id="dataBox"
                className="rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center"
              >
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-10">
                  {[
                    ["Git", "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png"],
                    ["Photoshop", "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-512.png"],
                    ["Illustrator", "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_illustrator-512.png"],
                    ["Network", "https://cdn-icons-png.freepik.com/256/1973/1973681.png"],
                    ["SEO", "https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-seo-web-icon-vector-png-image_12256672.png"],
                  ].map(([alt, src]) => (
                    <img key={alt} className="icons" src={src} alt={alt} />
                  ))}
                </div>

                <div className="paraBox mt-4">
                  <p>
                    Along with development, I bring experience in version
                    control, UI design, networking, SEO, and digital optimization
                    to deliver complete end-to-end solutions.
                  </p>
                </div>
              </div>
            )}

            {/* Professional Experience */}
            {activeTab === "tab4" && (
              <div id="dataBox" className="rounded-lg p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div className="bg-[#1b1e23] rounded-xl p-5 border border-gray-800">
                    <h3 className="font-bold text-gray-200 pb-2">
                      — Solutions Engineer (LivePerson) —
                    </h3>
                    <span className="block text-sm text-[#e60b4d] pb-2">
                      Acesoft · April 2024 – Present
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Designing and implementing conversational AI solutions
                      using LivePerson Conversational Cloud, including bot
                      workflows, web messaging, integrations, FaaS automation,
                      testing, and enterprise support.
                    </p>
                  </div>

                  <div className="bg-[#1b1e23] rounded-xl p-5 border border-gray-800">
                    <h3 className="font-bold text-gray-200 pb-2">
                      — IT Administrator —
                    </h3>
                    <span className="block text-sm text-gray-400 pb-2">
                      March 2022 – April 2024
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Managed hardware, software, networking, and CCTV systems,
                      providing on-site and remote technical support while
                      ensuring system stability and security.
                    </p>
                  </div>

                  <div className="bg-[#1b1e23] rounded-xl p-5 border border-gray-800">
                    <h3 className="font-bold text-gray-200 pb-2">
                      — E-commerce Executive —
                    </h3>
                    <span className="block text-sm text-gray-400 pb-2">
                      January 2020 – January 2022
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Managed product listings, SEO optimization, analytics
                      tracking, PPC support, and assisted marketing campaigns.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Education & Certifications */}
            {activeTab === "tab5" && (
              <div id="dataBox" className="rounded-lg p-4 sm:p-6 lg:p-8">

                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 pb-3 border-b border-gray-700">
                  Education
                </h3>

                <div className="mt-4 mb-8">
                  <div className="bg-[#1b1e23] rounded-xl p-4 border border-gray-800">
                    <h4 className="font-semibold text-gray-200">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <span className="block text-sm text-[#e60b4d] mt-1">
                      Indira Gandhi National Open University (IGNOU)
                    </span>
                    <p className="mt-2 text-sm text-gray-400">
                     Bachelor of Computer Applications with strong
                      foundations in programming, computer science, databases,
                      and modern application development.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 pb-3 border-b border-gray-700">
                  Certifications
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="bg-[#1b1e23] rounded-xl p-4 border border-gray-800">
                    <h4 className="font-semibold text-gray-200">
                      Conversational Cloud Solution Engineer Certification
                    </h4>
                    <span className="block text-sm text-[#e60b4d] mt-1">
                      LivePerson
                    </span>
                    <p className="mt-2 text-sm text-gray-400">
                      Expertise in implementing and optimizing Conversational
                      Cloud solutions including bot workflows, integrations, and
                      automation.
                    </p>
                  </div>

                  <div className="bg-[#1b1e23] rounded-xl p-4 border border-gray-800">
                    <h4 className="font-semibold text-gray-200">
                      Full Stack Web Development (MERN Stack)
                    </h4>
                    <span className="block text-sm text-[#e60b4d] mt-1">
                      Entri Elevate · NSDC & Entri Software Pvt Ltd
                    </span>
                    <p className="mt-2 text-sm text-gray-400">
                      Completed intensive MERN stack training covering frontend,
                      backend, REST APIs, database design, and deployment.
                    </p>
                  </div>

                  <div className="bg-[#1b1e23] rounded-xl p-4 border border-gray-800">
                    <h4 className="font-semibold text-gray-200">
                      Certification in Full Stack Web Development (MERN Stack)
                    </h4>
                    <span className="block text-sm text-[#e60b4d] mt-1">
                      Illinois Tech University · USA
                    </span>
                    <p className="mt-2 text-sm text-gray-400">
                      Validated full-stack development skills with focus on
                      clean architecture, scalability, and real-world
                      application development.
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
