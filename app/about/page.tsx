import React from "react";

const ScrollingText = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center my-10 sticky">About</h1>
      <div className="fade mx-24">
        <p className="text-lg leading-loose font-semibold text-center mb-5">
          Hello! My name is{" "}
          <span className="font-bold">Yann Donald Deukam</span>, a{" "}
          <span className="font-bold">21-year-old</span> software developer and
          graphic designer based in{" "}
          <span className="font-bold">Douala, Cameroon</span>. With a deep
          passion for crafting engaging digital experiences, I specialize in
          both front-end development and visual design, seamlessly merging
          functionality with aesthetic appeal. I&apos;ve dedicated myself to
          building intuitive user interfaces and captivating designs that
          resonate with audiences, aiming to make technology more accessible and
          enjoyable. Whether coding a complex application or designing graphics,
          I&apos;m committed to producing work that reflects quality, precision,
          and creativity.
        </p>
        <p className="text-lg leading-loose font-semibold text-center mb-5">
          I wanted to build a general knowledge app about countries because
          understanding the world we live in is essential for fostering global
          awareness and appreciation. In an increasingly interconnected society,
          knowing about different cultures, histories, and geographies helps us
          connect with others on a deeper level. This app aims to provide users
          with easy access to crucial information, enhancing their understanding
          of various nations. By exploring facts about countries, users can
          cultivate a broader perspective that encourages empathy and respect
          for diversity. Knowledge about countries is vital for making informed
          decisions, whether in travel, business, or interpersonal
          relationships. Ultimately, my goal is to create a platform that sparks
          curiosity, empowering users to learn and engage with the world around
          them.
        </p>
        <p className="text-lg leading-loose font-semibold text-center mb-5">
          <div className="my-10 mx-6">
            <h2 className="font-bold text-3xl mb-4">Technologies Used</h2>
            <p className="text-lg mb-4">
              In developing my general knowledge app about countries, I chose to
              utilize
              <span className="font-bold">Next.js</span>,
              <span className="font-bold">Tailwind CSS</span>, and
              <span className="font-bold">TypeScript</span>. Each of these
              technologies plays a crucial role in enhancing the performance,
              design, and maintainability of the application.
            </p>

            <h3 className="font-bold text-2xl mb-2">Next.js</h3>
            <p className="text-lg mb-4">
              I opted for <span className="font-bold">Next.js</span> as the
              foundational framework for my app due to its powerful features
              that facilitate server-side rendering (SSR) and static site
              generation (SSG). This capability significantly improves the
              performance of my application by delivering content quickly and
              efficiently, which is essential for user experience, especially in
              a knowledge-based app where information accessibility is key.
            </p>
            <p className="text-lg mb-4">
              Next.js also offers a robust routing system, allowing for seamless
              navigation between pages without the need for full page reloads.
              This is particularly beneficial for creating a smooth and engaging
              user experience, as users can effortlessly explore different
              countries and their information without interruptions.
              Additionally, the built-in support for API routes enables me to
              fetch and manage data easily, ensuring that users always have
              access to the latest information.
            </p>

            <h3 className="font-bold text-2xl mb-2">Tailwind CSS</h3>
            <p className="text-lg mb-4">
              For the styling of my app, I chose{" "}
              <span className="font-bold">Tailwind CSS</span> because of its
              utility-first approach, which allows for rapid design and
              prototyping. With Tailwind, I can apply styles directly within my
              HTML, reducing the need for writing custom CSS and ensuring
              consistency across the application. This approach not only speeds
              up the development process but also makes it easier to maintain
              and update the styles as the app evolves.
            </p>
            <p className="text-lg mb-4">
              Tailwind&apos;s responsive design utilities ensure that my app
              looks great on various screen sizes, which is essential in
              today&apos;s mobile-first world. By using Tailwind, I can create a
              visually appealing interface that enhances user engagement and
              makes the content more accessible.
            </p>

            <h3 className="font-bold text-2xl mb-2">TypeScript</h3>
            <p className="text-lg mb-4">
              To further improve the quality of my code, I integrated{" "}
              <span className="font-bold">TypeScript</span> into my development
              process. TypeScript&apos;s static typing allows me to catch errors
              early during development, leading to fewer bugs and a more robust
              application. This is particularly important in a knowledge app
              where accuracy and reliability are paramount, as users depend on
              correct information.
            </p>
            <p className="text-lg mb-4">
              Moreover, TypeScript enhances the development experience by
              providing better autocompletion and IntelliSense features in my
              code editor, allowing for a more efficient workflow. The ability
              to define interfaces and types makes it easier to manage data
              structures, ensuring that my code is both readable and
              maintainable.
            </p>
          </div>
        </p>
        <p className="text-lg pb-44">
          <p className="text-lg text-center">
            In conclusion, the combination of{" "}
            <span className="font-bold">Next.js</span>,{" "}
            <span className="font-bold">Tailwind CSS</span>, and{" "}
            <span className="font-bold">TypeScript</span> not only aligns with
            my goals for building a high-performance and visually appealing
            general knowledge app but also sets a solid foundation for future
            scalability and feature enhancements. These technologies empower me
            to create an engaging platform where users can effortlessly explore
            and learn about the diverse cultures and histories of countries
            around the world.
          </p>
        </p>
      </div>
    </>
  );
};
export default ScrollingText;
