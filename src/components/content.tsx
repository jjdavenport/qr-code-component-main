import { useState } from "react";
import image from "../assets/image-qr-code.png";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-xs">
        Challenge by{" "}
        <a
          className="underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="underline" href="https://github.com/jjdavenport">
          jjdavenport
        </a>
        .
      </footer>
    </>
  );
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="font-outfit bg-light-gray text-default flex h-screen flex-col">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

export const Main = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <main className="flex h-[31.1875rem] w-80 flex-col justify-between gap-6 rounded-[1.25rem] bg-white px-4 pt-4 pb-20 text-center shadow-[0_25px_25px_0_rgba(0,0,0,0.0477)]">
        <img
          onLoad={() => setLoaded(true)}
          src={image}
          className={`h-[18rem] w-[18rem] rounded-[0.625rem] object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          alt="qr code"
        />
        <div className="flex h-[8.1875rem] w-72 flex-col items-center gap-4">
          <h1 className="text-dark-blue lead text-[1.375rem] leading-[120%] font-bold tracking-normal">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-grayish-blue h-[0.125rem] w-[16rem] leading-[140%] tracking-[0.2px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
};
