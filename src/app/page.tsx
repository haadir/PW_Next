import React from "react";
import Image from "next/image";
import { LinearGradient } from "react-text-gradients";
import Link from "next/link";

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-center items-start">
          <div className="flex flex-col justify-center items-start text-left px-6 mr-6">
            <h1 className="name text-lg mb-5">Haadi Razzak</h1>
            <p className="description text-lg mb-6 max-w-lg">
              Advanced{" "}
              <LinearGradient gradient={["to left", "#ee5a24 ,#ee2027"]}>
                software engineer
              </LinearGradient>
              , skilled{" "}
              <LinearGradient gradient={["to left", "#ee2027 ,#ee5a24"]}>
                full-stack
              </LinearGradient>{" "}
              developer,
              <br /> & aspiring{" "}
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                entrepreneur
              </LinearGradient>
              .
            </p>
            <p className="description2 text-md mb-6 max-w-lg">
              Student @ USC Viterbi | Computer Science
              <br />
              ML Engineer Intern @ BMC Software
              <br />
              Prev SWE Intern @ PayPal
            </p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Link href="https://github.com/haadir" passHref legacyBehavior>
                <a>
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
              <Link
                href="https://www.linkedin.com/in/haadirazzak/"
                passHref
                legacyBehavior
              >
                <a>
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Link>
              <a
                href="mailto:hrazzak@usc.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/mail.png"
                  alt="Email"
                  width={30}
                  height={30}
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
          <div className="pl-12">
            <Image
              src="/profilepic.jpg"
              alt="Haadi Razzak"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <p className="text-lg mb-2">View my work</p>
          <Link href="#work" passHref legacyBehavior>
            <a>
              <Image
                src="/downarrow.png"
                alt="down arrow"
                width={35}
                height={35}
                className="rounded-lg"
              />
            </a>
          </Link>
        </div>

        <div id="work" className="mt-12"></div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-24">
            <Image
              src="/journai.png"
              alt="JournAI logo"
              width={400}
              height={400}
              className="rounded-lg mb-6 md:mb-0 md:mr-6"
            />
            <div className="ml-0 md:ml-6 max-w-md text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">JournAI</h2>
              <p className="text-md mb-2">
                JournAI is an AI-powered journaling app that helps users
                document their daily thoughts and track their mood over time. It
                uses natural language processing to provide insights and
                suggestions.
              </p>
              <p className="text-md">
                <strong>Technologies used:</strong> React Native, Node.js,
                Python, Llama 3, Firebase
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-32">
            <div className="ml-0 md:ml-6 max-w-md text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">TrojanPlanner</h2>
              <p className="text-md mb-2">
                TrojanPlanner is a comprehensive planning tool for USC students.
                It creates schedules for students based off their preferences.
              </p>
              <p className="text-md">
                <strong>Technologies used:</strong> React, Node.js, Express,
                MongoDB, Python
              </p>
            </div>
            <Image
              src="/trojanplanner.png"
              alt="TrojanPlanner logo"
              width={400}
              height={400}
              className="rounded-lg mb-6 md:mb-0 md:ml-6"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-24">
            <Image
              src="/mtc.jpeg"
              alt="MTC logo"
              width={300}
              height={300}
              className="rounded-lg mb-6 md:mb-0 md:mr-6"
            />
            <div className="ml-0 md:ml-6 max-w-md text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">
                Muslim Tech Collaborative
              </h2>
              <p className="text-md mb-2">
                Founded the USC chapter of the Muslim Tech Collaborative.
                Fostered a robust network of Muslims focussed on creating
                projects. Brought in speakers from big tech companies and hosted
                events such as resume review.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-32">
            <div className="ml-0 md:ml-6 max-w-md text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">TroyLabs</h2>
              <p className="text-md mb-2">
                I was a member of TroyLabs which is a startup incubator that
                provides resources and mentorship to budding entrepreneurs at
                USC. I worked with a startup called Hatchet that offers a
                hardware and software solution for firemen. I assisted them with
                their transition from unity to React.
              </p>
              <p className="text-md">
                <strong>Technologies used:</strong> React, Node.js
              </p>
            </div>
            <Image
              src="/troylabs.jpg"
              alt="TroyLabs logo"
              width={400}
              height={400}
              className="rounded-lg mb-6 md:mb-0 md:ml-6"
            />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Haadi Razzak. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/haadir" passHref legacyBehavior>
              <a className="hover:text-gray-400">GitHub</a>
            </Link>
            <Link
              href="https://www.linkedin.com/in/haadirazzak/"
              passHref
              legacyBehavior
            >
              <a className="hover:text-gray-400">LinkedIn</a>
            </Link>
            <a
              href="mailto:hrazzak@usc.edu"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
