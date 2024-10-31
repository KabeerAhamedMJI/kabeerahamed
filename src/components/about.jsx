import React from 'react';

const About = () => {
    const myCv = 'images/Kabeer Ahamed - Full-Stack Web Developer.pdf';
    const cvName = 'Kabeer Ahamed - Full-Stack Web Developer.pdf';

    return (
        <section className="p-6">
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='transition w-full md:w-3/5 lg:w-2/5 p-4'>
                    <div className='abouts2'>
                        <div className="inline-block rounded-full p-1 sm:p-1.5 md:p-2 lg:p-2.5 xl:p-3" style={{ backgroundColor: 'rgba(255, 1, 95, 0.2)' }}>
                            <span className="material-symbols-outlined text-white bg-[#e60045] rounded-full p-1 sm:p-0.5 md:p-1 lg:p-1.5 xl:p-2">
                                person
                            </span>
                        </div>
                        <h2 className='pt-4 text-[#EDEADE] text-3xl sm:text-4xl lg:text-5xl font-semibold'>
                            Hi, I'm <span style={{ color: '#e60b4d', fontWeight: '700' }}>Kabeer</span>
                        </h2>
                        <p className='pt-4 text-[#BEBEBE] text-base md:text-lg'>Passionate Full-stack developer and designer creating captivating digital experiences.</p>
                        <div className='flex flex-col gap-1 pt-6'>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    description
                                </span>
                                <span className='text-[#BEBEBE]'>Full-Stack Developer</span>
                            </div>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    mail
                                </span>
                                <span className='text-[#BEBEBE]'>kabeerahamedkm@gmail.com</span>
                            </div>
                            <div className='flex flex-row gap-4 mt-5'>
                                <div className='socialIcon'>
                                    <a href="https://gitlab.com/kabeerahamedkm"><i className="fa-brands fa-gitlab"></i></a>
                                </div>
                                <div className='socialIcon'>
                                    <a href="https://github.com/KabeerAhamedMJI"><i className="fa-brands fa-github"></i></a>
                                </div>
                                <div className='socialIcon'>
                                    <a href="https://www.linkedin.com/in/kabeer-ahamed-km/"><i className="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='abouts3 flex flex-col mt-6'>
                        <h2 className='text-[#BEBEBE] mb-1'>Download my Curriculum Vitae:</h2>
                        <div className='flex flex-col sm:flex-row items-center gap-4 pt-4'>
                            <a href={myCv} download={cvName}>
                                <button className="CallButton w-full sm:w-auto">DOWNLOAD CV</button>
                            </a>
                            <button className="CallButton w-full sm:w-auto">CONTACT ME</button>
                        </div>
                    </div>
                </div>
                <div className='abouts hidden md:flex w-full md:w-2/5 justify-center'>
                    <img className='image-1 w-full h-auto max-w-md object-cover rounded-lg shadow-lg' src="https://images.deepai.org/art-image/71a9f2b4bcba490d8a58d1864ad182eb/a-web-developer-sitting-infront-of-laptop-at-_wPXFJo4.jpg" alt="Kabeer Ahamed" />
                </div>
            </div>
        </section>
    );
};

export default About;
