import React from 'react';

const About = () => {
    const myCv = 'images/Kabeer Ahamed - Full-Stack Web Developer.pdf';
    const cvName = 'Kabeer Ahamed - Full-Stack Web Developer.pdf';

    return (
        <section id="about" className="py-10 lg:py-16">
            <div className="containers flex flex-col lg:flex-row justify-between items-stretch gap-10">
                {/* LEFT CONTENT */}
                <div className="transition flex-1 max-w-2xl">
                    <div className="abouts2">
                        <div
                            className="inline-block rounded-full p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3"
                            style={{ backgroundColor: 'rgba(255, 1, 95, 0.2)' }}
                        >
                            <span className="material-symbols-outlined text-white bg-[#e60045] rounded-full p-1 sm:p-0.5 md:p-1 lg:p-1.5 xl:p-2">
                                person
                            </span>
                        </div>

                        <h2 className="pt-4 text-[#EDEADE] text-4xl sm:text-5xl font-semibold">
                            Hi,
                            <br className="block sm:hidden" />
                            <span className="sm:whitespace-nowrap lg:ml-3">
                                I'm <span style={{ color: '#e60b4d', fontWeight: '700' }}>Kabeer Ahamed</span>
                            </span>
                        </h2>

                        <p className="pt-4 text-[#BEBEBE]">
                            Passionate Full-stack developer and designer creating captivating digital experiences.
                        </p>

                        <div className="flex flex-col gap-1 pt-6">
                            <div className="flex flex-row items-center gap-2 pt-2">
                                <span id="aboutIcon" className="material-symbols-outlined">
                                    description
                                </span>
                                <span className="text-[#BEBEBE]">Full-Stack Developer</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 pt-2">
                                <span id="aboutIcon" className="material-symbols-outlined">
                                    mail
                                </span>
                                <span className="text-[#BEBEBE]">kabeerahamedkm@gmail.com</span>
                            </div>

                            <div className="flex flex-row gap-4 mt-5">
                                <div className="socialIcon">
                                    <a href="https://gitlab.com/kabeerahamedkm">
                                        <i className="fa-brands fa-gitlab"></i>
                                    </a>
                                </div>
                                <div className="socialIcon">
                                    <a href="https://github.com/KabeerAhamedMJI">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                                <div className="socialIcon">
                                    <a href="https://www.linkedin.com/in/kabeer-ahamed-km/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="abouts3 flex flex-col mt-6">
                        <h2 className="text-[#BEBEBE] mb-1">Download my Curriculum Vitae:</h2>
                        <div className="flex flex-row items-center gap-4 sm:gap-8 pt-4">
                            <a href={myCv} download={cvName}>
                                <button className="CallButton text-xs md:text-base">DOWNLOAD CV</button>
                            </a>
                            <a
                                href="https://wa.me/919747436459"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="CallButton text-xs md:text-base">
                                    CONTACT ME
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE (3:2 RATIO CARD) */}
                <div className="flex-1 hidden lg:flex items-center">
                    <div
                        className="w-full rounded-3xl bg-[#17181F] shadow-[0_25px_80px_rgba(0,0,0,0.8)] p-4 flex items-center justify-center"
                        style={{ aspectRatio: '3 / 2' }}   // 3:2 RATIO
                    >
                        <img
                            className="h-full w-full object-cover rounded-2xl image-1"
                            src="https://res.cloudinary.com/dpofcj23a/image/upload/v1763467015/main_o2glfn.png"
                            alt="Kabeer Ahamed"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
