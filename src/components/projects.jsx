import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Hospital Patient Care",
      role: "Full Stack",
      client: "Own Project",
      link: "https://medicareclient-dun.vercel.app/",
      image:
        "https://res.cloudinary.com/dpofcj23a/image/upload/v1763404256/Screenshot_2025-11-17_at_11.41.50_PM_wa1ikz.png",
    },
    {
      id: 2,
      title: "Construction Website",
      role: "Frontend",
      client: "Asateer Al Jubail, KSA",
      link: "https://asateer-ksa.com/",
      image:
        "https://res.cloudinary.com/dpofcj23a/image/upload/v1763411115/Screenshot_2025-11-18_at_1.55.03_AM_pekcgj.png",
    },
    {
      id: 3,
      title: "Online Learning",
      role: "Frontend",
      client: "Guide Academy, Malappuram",
      link: "https://guideacademy.in/",
      image:
        "https://res.cloudinary.com/dpofcj23a/image/upload/v1763411158/Screenshot_2025-11-18_at_1.55.50_AM_tlo6ch.png",
    },
    {
      id: 4,
      title: "E-commerce Store",
      role: "Shopify",
      client: "RC Moto Kidz, KSA",
      link: "https://asateer-ksa.com/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767384829/Screenshot_2025-12-30_at_6.32.42_PM_knlu4r.png",
    },
    {
      id: 5,
      title: "Manpower Supply",
      role: "Frontend",
      client: "Hat Cat Gen. Cont. Est. Al Jubail, KSA",
      link: "https://hat.com.sa/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1763475960/Screenshot_2025-11-18_at_7.54.11_PM_jnlgox.png",
    },
    {
      id: 6,
      title: "Duct Manufacturer",
      role: "WordPress",
      client: "Alfia Duct Int. Al Jubail, KSA",
      link: "https://alfiaduct.com/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767384902/Screenshot_2026-01-03_at_1.44.54_AM_xj7kks.png",
    },
    {
      id: 7,
      title: "News Application",
      role: "Full Stack",
      client: "Own Project",
      link: "https://news-app-frontend-six.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767385347/1715662553192_vq90aj.jpg",
    },
    {
      id: 8,
      title: "Water Theme Park",
      role: "Frontend",
      client: "Own Project",
      link: "https://water-theme-park-7ytj.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767384998/Screenshot_2026-01-03_at_1.46.26_AM_wjbtu4.png",
    },
    {
      id: 9,
      title: "Movie App",
      role: "Full Stack",
      client: "Own Project",
      link: "https://movie-app-liard-gamma.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767385305/1720366855536_ymjy16.jpg",
    },
    {
      id: 10,
      title: "Tiger Reserve",
      role: "Frontend",
      client: "Own Project",
      link: "https://tiger-prowl.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767385211/Screenshot_2026-01-03_at_1.49.56_AM_aoec5o.png",
    },
    {
      id: 11,
      title: "Weather App",
      role: "Frontend",
      client: "Own Project",
      link: "https://weather-app-nine-mu-25.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767385090/Screenshot_2026-01-03_at_1.48.06_AM_vsdzws.png",
    },
    {
      id: 12,
      title: "Portfolio Website",
      role: "Frontend",
      client: "Own Project",
      link: "https://kabeerahamed-seven.vercel.app/",
      image: "https://res.cloudinary.com/dpofcj23a/image/upload/v1767385150/Screenshot_2026-01-03_at_1.49.01_AM_bzil3y.png",
    }

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-[#222428]">
      <div className="w-11/12 md:w-4/5 mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center pb-12">
          <span className="mb-4 text-[#e60b4d]">
            Explore My Projects and Provide Your Insights
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-300">
            Projects Portfolio
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

/* ---------------- Project Card ---------------- */

function ProjectCard({ project }) {
  return (
    <article
      className="
        group rounded-2xl
        bg-[#171b22] hover:bg-[#171b22]
        border border-white/5
        overflow-hidden
        transition-shadow duration-300
        hover:border-[#e60b4d]/60
        hover:shadow-[0_22px_45px_rgba(0,0,0,0.45)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-52 md:h-56 object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />

        {/* VERY subtle gradient – not black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Role badge */}
        <span
          className="
            absolute left-4 bottom-4
            rounded-full bg-black/60
            border border-white/10
            px-3 py-1 text-[10px]
            uppercase tracking-wide text-[#EDEADE]
          "
        >
          {project.role}
        </span>
      </div>

      {/* Text */}
      <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-4">
        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-medium text-[#EDEADE] truncate">
            {project.title}
          </h3>
          <p className="mt-1 text-[11px] text-[#BEBEBE] truncate">
            {project.client}
          </p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex h-9 w-9 items-center justify-center rounded-full
            bg-[#e60b4d] text-white text-xs
            transition-transform duration-300
            hover:scale-110
            shadow-[0_8px_20px_rgba(230,11,77,0.35)]
          "
          aria-label="View Project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M7 17L17 7" />
            <path d="M9 7H17V15" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default Projects;






// var interaction = "skillCheckOutput : Pre-Process Code";

// function printServiceData(jsondata) {
//     var groups = jsondata.groupBy.groups;
//     botContext.printDebugMessage("groups" + JSON.stringify(groups));
//     for (var i = 0; i < groups.length; i++) {
//         if (groups[i].key == getEnvVar("service_skillId")) {     // OLF logic = if (groups[i].keyDescription == "Service") and modified according to skill ID instead skill name. 
//             setBotVar("onlineAgents", groups[i].metrics.onlineAgents);
//             //setBotVar("onlineAgents", 0);
//             botContext.printDebugMessage("Key Description: " + groups[i].keyDescription);
//             botContext.printDebugMessage("Online Agents: " + groups[i].metrics.onlineAgents);         
//         }
//     }
// }

// try {
//   var skillCheckResponse = getBotVar("skillCheckResponse");
//   botContext.printDebugMessage("skillCheckResponse++++++" + JSON.stringify(skillCheckResponse));
 
//   printServiceData(skillCheckResponse);
  
//   if (getBotVar("onlineAgents") == 0 || getBotVar("onlineAgents") == undefined) {
//    goNext("FailedSkillCheck");
//   }

// } catch(e){
//   var error_message = e && e.message;
//   botContext.logCustomEvent(error_message || e, "Error_Logs", interaction);
// }