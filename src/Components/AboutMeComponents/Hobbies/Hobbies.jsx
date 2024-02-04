import React from "react";
import "./hobbies.scss";
import { BiBookReader } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoWalkOutline } from "react-icons/io5";
import { MdOutlineDraw } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { PiTelevisionSimple } from "react-icons/pi";

const Hobbies = () => {
  return (
    <div className="hobbiesContainer">
      <div className="hobbiesWrapper">
        <div className="contentRow">
          <div className="rowItem">
            <BiBookReader size={32} />
            <h1>Reading</h1>
            <p>
              Enjoy a good book, whether it's fiction, non-fiction, or related
              to technology and programming
            </p>
          </div>
          <div className="rowItem">
            <IoGameControllerOutline size={32} />
            <h1>Gaming</h1>
            <p>
              Play video games or explore board games for a fun and immersive
              experience.
            </p>
          </div>
          <div className="rowItem">
            <IoWalkOutline size={32} />
            <h1>Outdoor Activities</h1>
            <p>
              Take a walk, go for a run, or engage in outdoor sports to get some
              fresh air and exercise.
            </p>
          </div>
          <div className="rowItem">
            <MdOutlineDraw size={32} />
            <h1>Art and Creativity</h1>
            <p>
              Explore my creative side through activities like drawing,
              painting, or design.
            </p>
          </div>
          <div className="rowItem">
            <GrGroup size={32} />
            <h1>Socializing</h1>
            <p>
              Spend quality time with friends and family, whether in person or
              through virtual means
            </p>
          </div>
          <div className="rowItem">
            <PiTelevisionSimple size={32} />
            <h1>Watching Movies or TV Shows</h1>
            <p>Watching favorite movies, TV series, or documentaries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
