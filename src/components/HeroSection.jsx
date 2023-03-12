import React from "react";
import Bubble from "../assets/images/bubble.png";
import styles from "../styles/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className="w-full min-h-[100vh] bg-hero bg-cover bg-center relative overflow-hidden">
      <div className="w-[85%] h-[15%] m-auto flex items-center justify-between">
        <div className="cursor-pointer">
          <p>techFusion</p>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-[#fbfcfd] absolute top-1/2 left-[8%] -translate-y-1/2  z-10">
        <small>Hello</small>
        <h1 className="text-8xl font-bold">World</h1>
        <button className="text-[#fbfcfd] py-2 px-6 bg-transparent border border-white border-solid outline-none cursor-pointer">
          Get started
        </button>
      </div>
      <div className="w-12 h-[100vh] bg-gradient-to-b from-[#00545d] to-[#000729] absolute right-0 top-0 "></div>
      <div
        className={`w-full flex items-center justify-around absolute bottom-0 animate-bubble-float duration-[7000] ${styles.bubble_animate}`}
      >
        <img
          src={Bubble}
          alt=""
          className="w-12  "
          style={{ animationDelay: "0.5s" }}
        />
        <img src={Bubble} alt="" className="w-12 " />
        <img src={Bubble} alt="" className="w-12 " />
        <img src={Bubble} alt="" className="w-12 " />
        <img src={Bubble} alt="" className="w-12 " />
        <img src={Bubble} alt="" className="w-12 " />
        <img src={Bubble} alt="" className="w-12 " />
      </div>
    </div>
  );
};

export default HeroSection;
