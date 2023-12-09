import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="mx-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#000000]">
          Welcome, I'm a Frontend Developer
        </h1>
        <div className="py-5">
          <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
            Here are some of my projects.
          </p>
          <div className="space-y-3">
            <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
              I have been working in the frontend development industry for over
              5 years. My skills include HTML, CSS, JavaScript, React, and Vue.
            </p>
            <p className="mx-auto max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#000000]">
              I'm passionate about creating intuitive and dynamic user
              interfaces. My projects demonstrate my focus on high-quality code,
              attention to detail, and user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
