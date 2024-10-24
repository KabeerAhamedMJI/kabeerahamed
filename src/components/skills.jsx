import React, { useState } from 'react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabChange = (tab) => {
        return () => setActiveTab(tab);
    };

    return (
        <section>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col items-center pb-12'>
                    <span className='text-center mb-4 text-[#e60b4d]'>
                        Technical Skills & Experience for Modern Web
                    </span>
                    <h2 id='skills' className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300'>
                        Professional Overview
                    </h2>
                </div>
                <div className='containers'>
                    <div className='flex mb-4'>
                        <button id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab1' ? ' text-[#e60b4d] rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab1')}
                        >
                            Frontend Technologies
                        </button>
                        <button id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab2' ? ' text-[#e60b4d] rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab2')}
                        >
                            Backend Technologies
                        </button>
                        <button id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab3' ? ' text-[#e60b4d] rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab3')}
                        >
                           Innovative Skills
                        </button>
                        <button id='skillButton'
                            className={`px-8 py-4 text-lg font-semibold ${activeTab === 'tab4' ? ' text-[#e60b4d] rounded-box p-6' : 'text-gray-300'} focus:outline-none`}
                            onClick={handleTabChange('tab4')}
                        >
                            Proffessional Experience
                        </button>
                    </div>
                    <div className='card-container'>
                        {activeTab === 'tab1' && (
                            <div id='dataBox' className='rounded-lg p-6'>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-2 items-center p-8">
                                    <img className='icons' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" alt="HTML5" />
                                    <img className='icons' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" alt="css" />
                                    <img className='icons' src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="Javascript" />
                                    <img className='icons' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" />
                                    <img className='icons' src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" alt="Tailwind" />
                                    <img className='icons' src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" />
                                    <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="HTML5" />
                                    <img className='icons' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png" alt="HTML5" />
                                </div>
                                <div className='paraBox'>
                                    <p>As a full-stack developer, I excel at crafting visually stunning and interactive web experiences using HTML, CSS, JavaScript, and powerful frameworks like React, Tailwind CSS, Bootstrap, Vite, and Redux. My designs are user-friendly, responsive, and perform seamlessly across all devices, ensuring an engaging and smooth user experience.</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab2' && (
                            <div id='dataBox' className='mx-auto rounded-lg p-6 flex flex-col items-center justify-center'>
                                <div id='imageBox' className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16 p-8">
                                    <img className='icons' src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png" alt="HTML5" />
                                    <img className='icons' src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="css" />
                                    <img className='icons' src="https://miro.medium.com/v2/resize:fit:256/1*XR69xeq43LgKB0T_LjZqwQ.png" alt="Javascript" />
                                    <img className='icons' src="https://cdn0.iconfinder.com/data/icons/buno-api/32/api_calls_programming-10-512.png" alt="React" />
                                    <img className='icons' src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/wordpress-512.png" alt="HTML5" />
                                </div>
                                <div className='paraBox'>
                                    <p>I specialize in building robust and scalable backend systems using Node.js, Express.js, and MongoDB. I excel at API integration to ensure seamless communication between services and also have expertise in WordPress to create dynamic and content websites. My backend solutions are designed for efficiency, security, and optimal performance, supporting the needs of any application.</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab3' && (
                            <div id='dataBox' className='rounded-lg p-6 flex flex-col items-center justify-center'>
                                     <div id='imageBox' className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16 p-8">
                                    <img className='icons' src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" alt="HTML5" />
                                    <img className='icons' src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-512.png" alt="css" />
                                    <img className='icons' src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_illustrator-512.png" alt="Javascript" />
                                    <img className='icons' src="https://cdn-icons-png.freepik.com/256/1973/1973681.png?ga=GA1.1.2117793215.1717391871&semt=ais_hybrid" alt="React" />
                                    <img className='icons' src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-seo-web-icon-vector-png-image_12256672.png" alt="HTML5" />
                                   
                                </div>
                                <div className='paraBox'>
                                    <p>I leverage Git for version control, Photoshop and Adobe Illustrator for design, and Network Administration for system maintenance. My skills also include Google SEO, Amazon and Flipkart affiliate marketing, and Social Media Management, providing a well-rounded approach to digital and strategic solutions.</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab4' && (
                            <div id='dataBox' className='rounded-lg p-2'>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-8">
                                    <div className='experience'>
                                        <h3 className='font-bold pb-3'>— E-commerce Executive —</h3>
                                        <span>January 2020 - January 2022</span>
                                        <p>Wrote and edited e-commerce content, set standards for product listings, and managed distribution. Supported Media Marketing, PPC, Email Marketing, SEO, Keyword Research, Google Analytics, and Paid Social Media.</p>
                                    </div>
                                    <div className='experience'>
                                        <h3 className='font-bold pb-3'>— IT Administrator —</h3>
                                        <span>March 2022 - April 2024</span>
                                        <p>Installed and configured hardware, software, networks, and CCTV. Provided timely technical support, monitored systems, and maintained networks, offering in-person and remote end-user assistance.</p>
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
