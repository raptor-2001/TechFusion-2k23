import React from "react";

const BodySection = () => {
  return (
    <div className="w-full m-auto text-center pt-24 flex bg-[#0c1b31] relative">
      <div className="w-1/2 h-[700px] flex items-center justify-center ">
        <div className="flex items-center justify-center ">
          <div className="w-32 h-[300px]  rounded-[50px] m-2 bg-img1 bg-cover bg-center absolute top-0 left-4 rounded-tr-none rounded-tl-none hover:w-48 transition-all duration-500">
            <h3>Img1</h3>
          </div>
          <div className="w-32 h-[300px]  rounded-[50px] m-2 bg-img1 bg-cover bg-center absolute bottom-0 left-4 rounded-br-none rounded-bl-none hover:w-48 transition-all duration-500">
            <h3>Img1</h3>
          </div>

          <div className="w-32 h-[300px]  rounded-[50px]  m-2 bg-img1 bg-cover bg-center left-1/2 hover:w-48 transition-all duration-500">
            <h3>Img1</h3>
          </div>

          <div className="w-32 h-[300px]  rounded-[50px] m-2 bg-img1 bg-cover bg-center absolute top-0 left-1/3 rounded-tr-none rounded-tl-none hover:w-48 transition-all duration-500">
            <h3>Img1</h3>
          </div>
          <div className="w-32 h-[300px]  rounded-[50px] m-2 bg-img1 bg-cover bg-center absolute bottom-0 left-1/3 rounded-br-none rounded-bl-none  hover:w-48 transition-all duration-500">
            <h3>Img1</h3>
          </div>
        </div>
      </div>
      <div className="flex-1 text-white text-right pr-11 align-middle h-full my-auto font">
        <h1 className="text-5xl mb-3">Organized by SAIT</h1>
        <p className="text-base font-light leading-5 p-2 mb-3 opacity-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          sequi quod exercitationem, non ut optio, ea temporibus qui dignissimos
          delectus tempora facilis aut voluptatem et, consequatur sit velit?
          Repellendus, modi. Non, saepe eius corporis explicabo beatae autem
          corrupti nemo cumque blanditiis harum ratione quia vel eaque, id ea
          laborum aliquid?
        </p>
        <button className="border-white border p-2"> Know More</button>
      </div>
    </div>
  );
};

export default BodySection;
