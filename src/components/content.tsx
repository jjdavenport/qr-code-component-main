export const Footer = () => {
  return (
    <>
      <div>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
      </div>
    </>
  );
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const Main = () => {
  return (
    <>
      <main>
        <div>
          <img alt="qr code" />
        </div>
        <div>
          <h1>Improve your front-end skills by building projects</h1>
        </div>
        <div>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </>
  );
};
