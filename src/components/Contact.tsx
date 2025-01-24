import { BsPhoneVibrateFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

import { socialLinks } from "../constants";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="pb-[110px] lg:pb-20">
      <div className="container">
        <h2 className="title" data-content="Contact">
          Get in <span className="text-accentColor">touch</span>
        </h2>

        <div className="flex flex-col gap-9 md:flex-row md:gap-7">
          <div>
            <h3 className="custom-transition mb-4 font-fontSecondary text-[26px] font-bold uppercase leading-[0.99] text-textColor md:text-[32px]">
              Don&#8217;t hesitate!
            </h3>
            <p className="description mb-6 w-[290px] text-[14px] !leading-[1.44] md:w-[350px]">
              Feel free to get in touch. I&#8217;m open to collaboration and new
              opportunities. Let&#8217;s create something amazing together.
            </p>

            <address>
              <ul className="mb-8 flex flex-col gap-3">
                <li className="contact-item">
                  <FaMapLocationDot className="contact-icon" />
                  <div>
                    <p className="address-label">Location</p>
                    <p className="address-text">Zhytomyr, Ukraine</p>
                  </div>
                </li>
                <li className="contact-item">
                  <BsPhoneVibrateFill className="contact-icon" />

                  <div>
                    <p className="address-label">Phone</p>
                    <a className="address-text link" href="tel:+380939337257">
                      +38 093 93 37 257
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <IoIosMailOpen className="contact-icon" />
                  <div>
                    <p className="address-label">Email</p>
                    <a
                      className="address-text link"
                      href="mailto:tanusha.17121994@gmail.com"
                    >
                      tanusha.17121994@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </address>

            <ul className="mt-auto flex gap-[16px]">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover custom-transition size-[36px] rounded-full border-none bg-grayColor shadow-sm md:size-[46px]"
                >
                  <a
                    className="flex size-full items-center justify-center"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
