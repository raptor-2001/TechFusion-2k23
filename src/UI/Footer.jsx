import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#24262b] py-20 px-0">
      <div className="max-w-[1170px] m-auto ">
        <div className="flex wrap">
          <div className="w-1/4 py-0 px-4 md:w-1/2 md:mb-7  sm:w-full ">
            <h4 className="text-lg text-white capitalize mb-9 font-medium relative before:content-none before:relative before:left-0 before:-bottom-2 before:bg-[#e91e63] before:h-[2px] before:box-border before:w-12 ">
              company
            </h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-base capitalize  font-light text-[#bbb] block transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  about us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-base capitalize  font-light text-[#bbb] block transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  our services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base capitalize  font-light text-[#bbb] block transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4 py-0 px-4 md:w-1/2 md:mb-7  sm:w-full">
            <h4 className="text-lg text-white capitalize mb-9 font-medium relative before:content-none before:relative before:left-0 before:-bottom-2 before:bg-[#e91e63] before:h-[2px] before:box-border before:w-12 ">
              get help
            </h4>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-base capitalize  font-light text-[#bbb] block transition-all duration-300 ease-in-out hover:text-white hover:pl-2"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/4 py-0 px-4 md:w-1/2 md:mb-7  sm:w-full">
            <h4 className="text-lg text-white capitalize mb-9 font-medium relative before:content-none before:relative before:left-0 before:-bottom-2 before:bg-[#e91e63] before:h-[2px] before:box-border before:w-12 ">
              follow us
            </h4>
            <div>
              <a
                href="#"
                className="inline-block h-10 w-10 bg-white opacity-20 mt-0 mr-2 mb-2 ml-0 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:text-[#24262b] hover:bg-white"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="inline-block h-10 w-10 bg-white opacity-20 mt-0 mr-2 mb-2 ml-0 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:text-[#24262b] hover:bg-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="inline-block h-10 w-10 bg-white opacity-20 mt-0 mr-2 mb-2 ml-0 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:text-[#24262b] hover:bg-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="inline-block h-10 w-10 bg-white opacity-20 mt-0 mr-2 mb-2 ml-0 text-center leading-10 rounded-full text-white transition-all duration-500 ease-in-out hover:text-[#24262b] hover:bg-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
