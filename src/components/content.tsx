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
      <div className="font-outfit h-screen flex flex-col bg-light-gray text-default">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center">
        {children}
      </div>
    </>
  );
};

export const Main = () => {
  return (
    <>
      <main className="bg-white flex gap-4 text-center p-4 rounded-2xl w-80 flex-col">
        <img src={image} className="object-contain rounded-2xl" alt="qr code" />
        <h1 className="text-xl text-dark-blue font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </main>
    </>
  );
};
