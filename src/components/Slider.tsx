import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Hero } from "./Hero/Hero";
import { Trending } from "./Trending/Trending";
import { Hero2 } from "./Hero2/Hero2";

const Slider = () => {
  const splideRef = useRef<HTMLDivElement>(null);

  // Объекты стилей
  const sliderProgressStyle = {
    background: "#ccc",
  };

  const sliderProgressBarStyle = {
    background: "#FF0000",
    height: "5px",
    // transition: "width 400ms ease",
    width: "0",
  };

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: "loop",
        perPage: 1,
        autoplay: true,
      });

      const bar = splideRef.current.querySelector(
        ".my-slider-progress-bar"
      ) as HTMLElement;
      if (bar) {
        splide.on("mounted move", () => {
          const end = splide.Components.Controller.getEnd() + 1;
          const rate = Math.min((splide.index + 1) / end, 1);
          bar.style.width = `${100 * rate}%`;
        });
      }

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <Hero />
          </li>
          {/* <li className="splide__slide">
            <Hero2 />
          </li> */}
          {/* <li className="splide__slide">Slide 03</li> */}
        </ul>
      </div>
      <div className="my-slider-progress" style={sliderProgressStyle}>
        <div
          className="my-slider-progress-bar"
          style={sliderProgressBarStyle}
        ></div>
      </div>
    </div>
  );
};

export default Slider;

// import ReactFullpage from "@fullpage/react-fullpage";
// import { Hero } from "./Hero/Hero";
// import { Trending } from "./Trending/Trending";

// const Slider = () => {
//   return (
//     <ReactFullpage
//       render={({ state, fullpageApi }) => {
//         return (
//           <ReactFullpage.Wrapper>
//             <div className="section">
//               <Hero />
//             </div>
//             <div className="section">
//               <Trending />
//             </div>
//           </ReactFullpage.Wrapper>
//         );
//       }}
//       credits={{ enabled: false, label: "" }}
//     />
//   );
// };

// export default Slider;
