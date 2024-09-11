import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Founder @ Digital Resolve Organization",
          "Senior Software Engineering Lead @ WTW",
          "Head of Engineering @ NCLEXPower",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
