"use client"
import React from "react";
import Image from "next/image";
import { CricketPlayer } from '@/assets';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen overflow-hidden h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src={'/videos/sky-background.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col w-full h-full pt-16">
        <div className="flex flex-col text-right items-center w-full max-w-full px-5 md:hidden relative h-full">
          <div className="flex flex-col gap-4 w-full text-black z-2">
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight mb-2">
              <span>FINALLY, <strong>CRICKET</strong></span><br />
              <span>ON THE <strong>CHAIN</strong>.</span>
            </h1>
            <p className="text-lg sm:text-base font-semibold mb-2">
              AI and Blockchain collide in the most advanced cricket simulation <strong>ever created</strong>.
            </p>
          </div>
          <div className="w-full aspect-square max-w-[90%] mb-0 absolute bottom-[100px]">
            <Image
              src={CricketPlayer}
              alt="Cricket Player"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px] absolute bottom-4 md:relative">
            <a href="https://www.birdeye.so/token/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump?chain=solana"
              className="bg-[url('/images/hero/background.png')] text-black border-4 border-black py-3 px-6 text-2xl font-bold shadow-md w-full text-center">
              TRADE ON SOLANA
            </a>
            <a href="https://slog.game"
              className="bg-[#117C41] text-black border-4 border-black py-3 px-2 text-2xl font-bold shadow-md w-full text-center">
              PLAY ON TELEGRAM
            </a>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-1/3 md:h-[128px] z-[-1]"
            style={{
              background: 'linear-gradient(323.47deg, #6BC341 23.09%, #2C9330 82.92%)'
            }}
          />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-8 w-full mx-auto text-right items-end relative h-full">
          <div className="relative aspect-square w-full z-10">
            <Image
              src={CricketPlayer}
              alt="Cricket Player"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              priority
            />
          </div>
          <div className="flex flex-col justify-center items-end text-black z-10 p-10 mb-12">
            <h1 className="text-6xl sm:text-5xl xl:text-8xl font-medium leading-tight">
              <span>FINALLY, <strong>CRICKET</strong></span><br />
              <span>ON THE <strong>CHAIN</strong>.</span>
            </h1>
            <p className="text-3xl sm:text-2xl xl:text-5xl font-semibold mb-40">
              AI and Blockchain collide in the most advanced cricket simulation <strong>ever created</strong>.
            </p>
            <div className="flex flex-col gap-4 items-end w-full">
              <a href="https://www.birdeye.so/token/9Xfko1cNUJ6cpgBxkdH7k7VyYouUmCtUij5tDWUFpump?chain=solana"
                className="bg-[url('/images/hero/background.png')] text-black border-4 border-black py-3 px-6 text-[32px] font-bold shadow-md text-center w-full">
                TRADE ON SOLANA
              </a>
              <a href="https://slog.game"
                className="bg-[#117C41] text-black border-4 border-black py-3 px-6 text-[32px] font-bold shadow-md w-full text-center">
                PLAY ON TELEGRAM
              </a>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-1/2 md:h-[290px] z-[-1]"
            style={{
              background: 'linear-gradient(323.47deg, #6BC341 23.09%, #2C9330 82.92%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
