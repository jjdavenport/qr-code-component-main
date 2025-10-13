import image from "../assets/image-qr-code.png";

export const Desktop = () => {
  return (
    <main className="bg-variables-color-slate-300 relative flex h-screen flex-col items-center justify-center">
      <article className="bg-variables-color-white shadow-card-shadow relative inline-flex flex-[0_0_auto] flex-col items-start gap-[var(--variables-spacing-300)] rounded-[20px] pt-[var(--variables-spacing-200)] pr-[var(--variables-spacing-200)] pb-[var(--variables-spacing-500)] pl-[var(--variables-spacing-200)]">
        <img
          className="relative h-72 w-72 rounded-[10px]"
          alt="QR code to visit Frontend Mentor"
          src={image}
        />

        <div className="relative flex h-[131px] w-72 flex-col items-center gap-[var(--variables-spacing-200)] py-0 pr-[var(--variables-spacing-200)] pl-[var(--variables-spacing-200)]">
          <h1 className="font-text-preset-1 text-variables-color-slate-900 relative mt-[-1.00px] self-stretch text-center text-[length:var(--text-preset-1-font-size)] leading-[var(--text-preset-1-line-height)] font-[number:var(--text-preset-1-font-weight)] tracking-[var(--text-preset-1-letter-spacing)] [font-style:var(--text-preset-1-font-style)]">
            Improve your front-end skills by building projects
          </h1>

          <p className="font-text-preset-2 text-variables-color-slate-500 relative self-stretch text-center text-[length:var(--text-preset-2-font-size)] leading-[var(--text-preset-2-line-height)] font-[number:var(--text-preset-2-font-weight)] tracking-[var(--text-preset-2-letter-spacing)] [font-style:var(--text-preset-2-font-style)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </article>
    </main>
  );
};
