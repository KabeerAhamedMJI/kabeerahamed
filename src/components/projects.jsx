import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Projects() {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,

    };
    return (
        <section>
            <div className='w-4/5 m-auto'>
                <div className='flex flex-col items-center pb-10'>
                    <span className='text-center mb-4 text-[#e60b4d]'>
                        Explore My Projects and Provide Your Insights
                    </span>
                    <h2 id='skills' className='text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-300'>
                        Projects Portfolio
                    </h2>
                </div>
                <div className='mt-4'>
                    <div>
                        <Slider  {...settings}>
                        <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/hospital.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> MERN Stack, JWT, Tailwind CSS.</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Project</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Hospital Patient Care</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://medicareclient-dun.vercel.app/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Asateer.png" alt="" />
                                    <div className="slide-in-overlay">
                                        <div className="slide-in-content flex flex-col items-start gap-2">
                                            <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> HTML, CSS, JavaScript</p>
                                            <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Asateer Al Jubail, KSA</p>
                                            <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Construction Website</p>
                                            <div class="center-container">
                                                <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                    <span class="text">View</span>
                                                    <span class="icon-Container">
                                                        <svg
                                                            width="16"
                                                            height="19"
                                                            viewBox="0 0 16 19"
                                                            fill="nones"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                            <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        </svg>
                                                    </span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Guide.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> HTML, CSS, JavaScript</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Guide Academy, Malappuram</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Online Learning</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3 ' src="/images/Projects/Sake.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> HTML, CSS, JavaScript</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Sake Arabia Al Jubail, KSA</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Manpower Supply</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Alfia.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> WordPress, Divi Builder, CSS</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Alfia Duct Int. Al Jubail, KSA</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Duct Manufacturer</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/News.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> MERN Stack, JWT, Tailwind CSS.</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Poject</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> News Application</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Aqua.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> HTML, BootStrap JavaScript</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Project</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Water Theme Park</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Movie.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> MERN Stack, JWT, Tailwind CSS.</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Poject</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Movie App</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Tiger.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> React, Tailwind CSS</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Poject</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Tiger Reserve</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Weather.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> HTML, CSS, JavaScript, API</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Poject</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Weather App</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card h[450px] rounded-xl'>
                                <div className='image-container'>
                                    <img className='h-44  p-3' src="/images/Projects/Portfolio.png" alt="" />
                                </div>
                                <div className="slide-in-overlay">
                                    <div className="slide-in-content flex flex-col items-start gap-2">
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Technology :</span> React, Tailwind CSS</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Client : </span> Own Project</p>
                                        <p className="text-sm"><span className="font-bold text-[rgba(255,255,255,0.8)] text-xs">Category :</span> Portfolio</p>
                                        <div class="center-container">
                                            <a class="Btn-Container" href="https://asateer-ksa.com/" target="_blank">
                                                <span class="text">View</span>
                                                <span class="icon-Container">
                                                    <svg
                                                        width="16"
                                                        height="19"
                                                        viewBox="0 0 16 19"
                                                        fill="nones"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="13.9811" cy="9.5" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="#e60b4d"></circle>
                                                    </svg>
                                                </span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
