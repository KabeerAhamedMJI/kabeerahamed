import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-[#222428]">
      <div
        className="
          max-w-[1450px] mx-auto 
          rounded-3xl 
          border border-white/10 
          bg-[#222428]
          shadow-[0_30px_80px_rgba(0,0,0,0.7)]
          px-8 md:px-14 py-14
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Let’s discuss your{" "}
              <span className="text-[#e60b4d]">Project</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              I’m available for freelance work, chatbot integrations,
              and partnership opportunities.
            </p>

            <div className="mt-10 space-y-6">

              <InfoItem
                icon="location_on"
                label="Location"
                value="Malappuram, Kerala"
              />

              <InfoItem
                icon="mail"
                label="Email"
                value="kabeerahamedkm@gmail.com"
                breakAll
              />

              <div className="flex items-start gap-4">
                <IconBox>
                  <BsWhatsapp className="text-xl text-[#e60b4d]" />
                </IconBox>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">
                    +91 9747 436 459
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-5">
              <SocialIcon
                href="https://www.instagram.com/kabeer_amd/"
                icon={<FiInstagram />}
              />
              <SocialIcon
                href="https://github.com/KabeerAhamedMJI"
                icon={<FiGithub />}
              />
              <SocialIcon
                href="https://www.linkedin.com/in/kabeer-ahamed-km/"
                icon={<FiLinkedin />}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Tell me a bit about your requirement and I’ll reach out soon.
            </p>

            <form className="space-y-6">

              <Input placeholder="Name*" />
              <Input type="email" placeholder="Email*" />
              <Input placeholder="Location*" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input placeholder="Budget*" />
                <Input placeholder="Subject*" />
              </div>

              <textarea
                placeholder="Message*"
                className="
                  w-full
                  bg-[#1b1d20]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  text-sm text-white
                  placeholder-gray-500
                  outline-none
                  focus:border-[#e60b4d]
                  h-28
                  resize-none
                "
              />

              <button
                type="submit"
                className="
                  inline-flex items-center gap-2
                  bg-[#e60b4d]
                  text-white
                  px-7 py-3
                  rounded-xl
                  text-sm font-semibold
                  shadow-[0_15px_40px_rgba(230,11,77,0.35)]
                  hover:opacity-90
                  transition
                "
              >
                Send Message
                <span className="material-symbols-outlined text-sm">
                  send
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

/* Reusable */

const IconBox = ({ children }) => (
  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#1b1d20] border border-white/10">
    {children}
  </div>
);

const InfoItem = ({ icon, label, value, breakAll }) => (
  <div className="flex items-start gap-4">
    <IconBox>
      <span className="material-symbols-outlined text-[#e60b4d]">
        {icon}
      </span>
    </IconBox>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className={`text-white font-semibold ${breakAll ? "break-all" : ""}`}>
        {value}
      </p>
    </div>
  </div>
);

const Input = ({ type = "text", placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="
      w-full
      bg-[#1b1d20]
      border border-white/10
      rounded-xl
      px-4 py-3
      text-sm text-white
      placeholder-gray-500
      outline-none
      focus:border-[#e60b4d]
    "
  />
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="
      h-11 w-11
      rounded-xl
      bg-[#1b1d20]
      border border-white/10
      flex items-center justify-center
      text-[#e60b4d]
      hover:bg-[#e60b4d]
      hover:text-white
      transition
    "
  >
    {icon}
  </a>
);

export default Contact;
