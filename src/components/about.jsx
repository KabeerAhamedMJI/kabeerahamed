import React from 'react';

const about = () => {
    const myCv = 'images/Kabeer Ahamed - Full-Stack Web Developer.pdf';
    const cvName = 'Kabeer Ahamed - Full-Stack Web Developer.pdf';

    return (
        <section>
            <div className='containers flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 px-4 md:px-6'>
                <div className='transition  lg:w-2/5'>
                    <div className='abouts2'>
                        <div className="inline-block rounded-full p-1.5 md:p-2.5" style={{ backgroundColor: 'rgba(255, 1, 95, 0.2)' }}>
                            <span className="material-symbols-outlined text-white bg-[#e60045] rounded-full p-1 md:p-1.5">
                                person
                            </span>
                        </div>
                        <h2 className='pt-3 text-[#EDEADE] text-3xl md:text-4xl font-semibold'>
                            Hi, I'm <span style={{ color: '#e60b4d', fontWeight: '700' }}>Kabeer</span>
                        </h2>
                        <p className='pt-3 text-[#BEBEBE] text-sm md:text-base'>Passionate Full-stack developer and designer creating captivating digital experiences.</p>
                        <div className='flex flex-col gap-1 pt-4'>
                            <div className='flex items-center gap-2'>
                                <span id='aboutIcon' className="material-symbols-outlined text-lg">
                                    description
                                </span>
                                <span className='text-[#BEBEBE] text-sm'>Full-Stack Developer</span>
                            </div>
                            <div className='flex items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined text-lg">
                                    mail
                                </span>
                                <span className='text-[#BEBEBE] text-sm'>kabeerahamedkm@gmail.com</span>
                            </div>
                            <div className='flex gap-3 mt-4'>
                                <a href="https://gitlab.com/kabeerahamedkm"><i className="fa-brands fa-gitlab text-xl"></i></a>
                                <a href="https://github.com/KabeerAhamedMJI"><i className="fa-brands fa-github text-xl"></i></a>
                                <a href="https://www.linkedin.com/in/kabeer-ahamed-km/"><i className="fa-brands fa-linkedin text-xl"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='abouts3 flex flex-col mt-5'>
                        <h2 className='text-[#BEBEBE] text-sm mb-2'>Download my Curriculum Vitae:</h2>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <a href={myCv} download={cvName}>
                                <button className="CallButton">DOWNLOAD CV</button>
                            </a>
                            <button className="CallButton">CONTACT ME</button>
                        </div>
                    </div>
                </div>
                <div className='abouts hidden md:flex justify-center mt-6 lg:mt-0'>
                    <img className='w-full max-w-xs md:max-w-sm lg:max-w-md' src="https://images.deepai.org/art-image/71a9f2b4bcba490d8a58d1864ad182eb/a-web-developer-sitting-infront-of-laptop-at-_wPXFJo4.jpg" alt="Kabeer Ahamed" />
                </div>
            </div>
        </section>
    );
};

export default about;
