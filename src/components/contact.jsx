import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
    return (
        <section>
            <div className='containers'>
                <div className='flex flex-col items-center pb-12'>
                    <span className='text-center mb-4 text-[#e60b4d]'>
                        Stay Connected Always
                    </span>
                    <h2 id='skills' className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300'>
                        Contact With Me
                    </h2>
                </div>

                <div className="abouts4 flex flex-col gap-4 md:flex-row md:gap-6">
                    <div className='abouts hidden flex flex-col gap-4 lg:flex w-2/5'>
                        <img className='image-2' src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png" alt="Kabeer Ahamed" />
                        <div className='flex flex-col gap-1 pt-6'>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <BsWhatsapp id='aboutIcon2' />
                                <span className='text-[#BEBEBE] font-bold'>+91 9747 436 459</span>
                            </div>
                            <div className='flex flex-row items-center gap-2 pt-2'>
                                <span id='aboutIcon' className="material-symbols-outlined">
                                    mail
                                </span>
                                <span className='text-[#BEBEBE] font-bold'>kabeerahamedkm@gmail.com</span>
                            </div>
                            <div className='flex flex-row gap-4 mt-5'>
                                <div className='socialIcon'>
                                    <a href="https://www.instagram.com/kabeer_amd/"><FiInstagram id='aboutIcon3' /></a>
                                </div>
                                <div className='socialIcon'>
                                    <a href="https://github.com/KabeerAhamedMJI"><i class="fa-brands fa-github"></i></a>
                                </div>
                                <div className='socialIcon'>
                                    <a href="https://www.linkedin.com/in/kabeer-ahamed-km/"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" abouts4 rounded-lg bg-gray-50  md:p-8 lg:w-3/5">
                        <form>
                            <div class="-mx-2 md:items-center md:flex">
                                <div class="flex-1 px-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" placeholder="" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="flex-1 px-2 mt-4 md:mt-0">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                    <input type="text" placeholder="" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="w-full mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder=""></textarea>
                            </div>

                            <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#e60b4d] rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;









