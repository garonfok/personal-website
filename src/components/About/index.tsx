export const About = () => {
  return (
    <section id="about" className="bg-slate-100 body-font shadow-xl">
      <div className="container flex flex-col items-center max-w-5xl px-8 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="object-cover object-center rounded-md shadow-md"
            alt="profile of garon wearing a mask"
            src="./images/about_profile.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-slate-700">
            My name is Garon Fok, and I'm a software engineer based in the San
            Francisco Bay Area. I'm currently working in web development, with my primary stack technologies being React and Node.
            I also teach private music lessons in trumpet, trombone, euphonium, and tuba. I am currently looking for roles where I can continue to
            develop my abilities and learn about and work with the latest
            frameworks and tools.
          </p>
        </div>
      </div>
    </section>
  );
};
