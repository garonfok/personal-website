export const Hero = () => {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-gradient-to-t from-slate-200 to-cyan-100"
    >
      <div className="container flex flex-row items-start max-w-5xl px-8 mx-auto py-36">
        <div className="flex flex-col text-xl text-slate-700 items-startmb-16 md:mb-0 lg:flex-grow lg:pr-24">
          <p className="items-start ">Hi there! I'm</p>
          <h1 className="mb-8 text-5xl font-bold text-slate-900 md:text-7xl text-6x sm:text-6xl">
            Garon.
          </h1>
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl">
            I'm from Mountain View, California, and I'm a software engineer!
          </h2>
          <p className="text-slate-500">
            I'm also a musician and composer! Scroll down to learn more about
            me.
          </p>
        </div>
      </div>
    </section>
  );
};
