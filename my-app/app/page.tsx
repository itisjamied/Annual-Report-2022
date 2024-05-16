"use client";

import { useState } from "react";
import Image from "next/image";
import roof from "../public/roof.png";
import logo from "../public/logo.svg";
import headshot from "../public/AnnaYuPortrait.png";
import sign from "../public/Sign.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 -ml-[10%] -mr-[10%]">
            <Image
              src={roof}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className="w-12 h-2 bg-white mb-2"></div>
            <div className="w-12 h-2 bg-white mb-2"></div>
            <div className="w-12 h-2 bg-white"></div>
          </button>
        </div>
        <div
          className={`fixed inset-0 z-30 bg-afh-pink transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="absolute top-4 left-4 mt-8 ml-6">
            <Image src={logo} alt="Logo" width={172} height={54.25} />
          </div>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none font-extrabold text-4xl mt-8 mr-4"
          >
            X
          </button>
          <nav className="flex flex-col justify-center h-1/2 space-y-6 text-white text-2xl font-extrabold text-3xl ml-8 mt-16">
            <a href="#" onClick={toggleMenu} className="pb-4 ">
              EXPLORE
            </a>
            <a href="#" onClick={toggleMenu} className="pb-4">
              SUPPORTER
            </a>
            <a href="#" onClick={toggleMenu} className="pb-4">
              NUMBERS
            </a>
          </nav>
        </div>
        <div className="relative z-10 p-10">
          <h1 className="text-white text-3xl font-bold">2022 ANNUAL REPORT</h1>
          <h1 className="text-white text-2xl font-bold">
            A Record Breaking Year
          </h1>
          <h1 className="text-white text-2xl font-bold">
            TOWARDS NEW HORIZONS
          </h1>
        </div>
      </section>
      <section className="p-8 bg-white text-black">
        <div className="text-4xl text-afh-purple font-black text-center">
          A Record Breaking Year
        </div>
        <div className=" mb-8 mt-8">
          2022 was undoubtedly a year of change for our team, artists and our
          community. After two years of pandemic and social distancing, there
          was a strong desire to reconnect in person and rebuild our community.
          One of the biggest changes was the Executive Director transition from
          32 years with Susan Rodgerson, the founding and visionary force behind
          Artists For Humanity.
        </div>
        <div className=" mb-8 mt-8">
          Much credit also goes to the enduring team of AFH artists, staff and
          leadership, who make the mission possible. 70% of our mentors are
          former AFH teens, who come back to give back to the next generation.
          There is an unparalleled dedication rooted in our staff, many who have
          served the organization for decades, and who are still here today.
          There is a reason why people stay and come back to AFH – there is
          magic in the work and vibrancy in the community that extends beyond
          our walls.
        </div>
        <div className="mb-8 mt-8">
          I feel so fortunate to be embraced by AFH since I joined in September.
          It’s no wonder to me that AFH has seen a record-breaking year in 2022:
        </div>

        <div className="mb-8 mt-8">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              337 teens hired in our after school Youth Arts Enterprise program
            </li>
            <li>
              150 students served in our school partnership program during the
              school day
            </li>
            <li>470 artworks and client projects completed</li>
            <li>118 events over 180 days hosted at our EpiCenter</li>
          </ul>
        </div>
        <div className="mt-8 mb-8">
          One of my favorite parts of my new role is everything I’m learning
          beyond the numbers. Just have a conversation with our staff and you’ll
          be in awe of their creativity, resourcefulness, and commitment. Ask
          one of our teen artists or designers what inspires them, and you’ll be
          delighted by the unexpected answers you’ll hear.
        </div>
        <div className="mt-8 mb-8">
          {" "}
          Our 2022 digital annual report is living proof that our teens&lsquo;
          creativity knows no bounds—this report was designed and executed in
          collaboration with our teen artists, our Creative Technology studio,
          and our Marketing team. True to our mission, their voices and
          perspectives are elevated in this annual report, where the youthful
          illustrations, bold colors, and characters are products of their
          boundless imagination.
        </div>
        <div className="mt-8 mb-8">
          {" "}
          Where do we go next? The sky&lsquo;s the limit. We invite you to
          explore our Record Breaking Year, and to reach out and join in our
          work. There are so many ways to connect, to uplift our next generation
          of creative thinkers and collaborate to grow this beautiful community
          we have built together.
        </div>

        <div className="mt-8 mb-8">In partnership and community,</div>

        <div className="w-full flex justify-center">
          <Image
            src={sign}
            alt="Anna Yu Signature"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="mt-8 mb-8">
          <div>Anna Yu</div>
          <div>Executive Director</div>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={headshot}
            alt="Anna Yu Portrait"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* <div className="text-5xl text-center font-black mt-10">EXPLORE</div> */}
        <div className="flex justify-center items-center my-20">
          <div className="bg-customPurple rounded-xl p-4 shadow-lg w-4/6 max-w-xs mx-4 flex justify-center">
            <a
              id="exploreBigButton"
              className="text-2xl w-full text-center font-bold uppercase bg-customPink text-customYellow rounded-lg p-4 shadow-customShadow transition-transform duration-200 ease-in-out transform hover:bg-customPinkDark hover:shadow-customHoverShadow hover:translate-y-1"
              href="https://www.afhannualreport.org/explore"
            >
              Explore
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
