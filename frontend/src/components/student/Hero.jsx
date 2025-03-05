import React from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-[36px] md:leading-[44px] text-[28px] relative font-bold text-gray-800 max-w-3xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing
        <span className="text-blue-600"> and typesetting industry.</span>
        <img className="md:block hidden absolute -bottom-7 right-" src={assets.sketch} alt="Image not found" />
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
      </p>

      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
      </p>
    </div>
  );
};

export default Hero