import React from "react";
import Card from "./Card";

export const Home = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-24" id="home">
      <div className="flex justify-center mb-10">
        <img
          className="flex content-center justify-center align-middle h-40 sm rounded-full"
          src="https://avatars.githubusercontent.com/u/37640685?v=4"
        ></img>
      </div>
      <div className="flex justify-center flex-col space-y-4">
        <h1 className="text-center text-4xl font-bold text-gray-900 opacity-80">
          {" "}
          Marlon Geovany Castro Mejia
        </h1>
        <h4 className="text-center text-lg text-gray-400 font-bold italic">
          Informatic Engineer
        </h4>
      </div>
      <div className="flex flex-row justify-center space-x-4 my-4">
        <a
          href="https://www.linkedin.com/in/m-geovany-web-developer/"
          target="_blank"
        >
          <Linkedin width={24} height={24} className="cursor-pointer" fill="#444" />
        </a>
        <a href="https://github.com/MGeovany" target="_blank">
          <Github width={24} height={24} className="cursor-pointer" fill="#444"/>
        </a>
        <a href="https://www.instagram.com/m_geovany_/" target="_blank">
          <Instagram width={24} height={24} className="cursor-pointer" fill="#444"/>
        </a>
      </div>

      <div className="flex flex-col justify-center ">
        <p className="text-center items-center text-gray-400 mt-9 text-base font-medium">
          I am Marlon Castro, web developer from Sps, Honduras.
          <br />I have rich experience in web site design and building <br />{" "}
          and customization.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 mx-14 my-16 justify-center items-center w-6/12">
        <Card
          namec="HTML"
          urlc="https://www.w3.org/html/logo/"
          imgc="https://img.icons8.com/color/90/000000/html-5.png"
        />
        <Card
          namec="CSS"
          urlc="https://www.w3schools.com/css/"
          imgc="https://img.icons8.com/color/90/000000/css3.png"
        />
        <Card
          namec="Javascript"
          urlc="https://www.javascript.com/"
          imgc="https://img.icons8.com/color/90/000000/javascript.png"
        />
        <Card
          namec="Typescript"
          urlc="https://www.typescriptlang.org/"
          imgc="https://img.icons8.com/color/90/000000/typescript.png"
        />
        <Card
          namec="React JS"
          urlc="https://reactjs.org/"
          imgc="https://img.icons8.com/color/90/000000/react-native.png"
        />
        <Card
          namec="Redux"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/redux.png"
        />

        <Card
          namec="Node JS"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/000000/nodejs.png"
        />
        <Card
          namec="Mongo DB"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/000000/mongodb.png"
        />
        <Card
          namec="Firebase"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/000000/firebase.png"
        />
        <Card
          namec="Git"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/000000/git.png"
        />
        <Card
          namec="SASS"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/color/90/sass.png"
        />
        <Card
          namec="My SQL"
          urlc="https://es.redux.js.org/"
          imgc="https://img.icons8.com/fluency/90/mysql-logo.png"
        />
      </div>
    </div>
  );
};

export const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Instagram icon"}</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

export const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 504.4 504.4"
    style={{
      enableBackground: "new 0 0 504.4 504.4",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zM168 408.2H96v-208h72v208zm-36.4-240c-20.4 0-36.8-16.4-36.8-36.8s16.4-36.8 36.8-36.8 36.8 16.4 36.8 36.8c-.4 20.4-16.8 36.8-36.8 36.8zm276.8 240H348V307.4c0-24.4-3.2-55.6-36.4-55.6-34 0-39.6 26.4-39.6 54v102.4h-60v-208h56v28h1.6c8.8-16 29.2-28.4 61.2-28.4 66 0 77.6 38 77.6 94.4v114z" />
  </svg>
);

export const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <g data-name="Layer 2">
      <path
        d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
        data-name="github"
      />
    </g>
  </svg>
);
