import React, { useState, useEffect } from "react";
import Section from "./Section";

export default function Main(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main">
      {props?.sections?.map((section, index) => {
        // Adjust the speed of parallax effect here. Different sections can have different speeds.
        const speed = index % 2 === 0 ? 0.5 : 0.2;
        const parallaxStyle = {
          transform: `translateY(${offsetY * speed}px)`,
        };

        return <Section key={section.id} {...section} style={parallaxStyle} />;
      })}
    </main>
  );
}
