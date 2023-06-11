import React from "react";
import TypingTextAnimation from "../../../Hooks/TypingText/TypingTextAnimation";
import { Link } from "react-router-dom";

const BannerCard = ({ image, texts }) => {
  return (
    <div
      className="p-12 text-white bg-cover bg-fixed bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('${image}')`,
        height: "90vh",
      }}
    >
      <p className="text-xl font-semibold max-w-3xl py-6">
        Our language center offers group and personal lessons in English and
        other modern languages for all ages and levels of knowledge.
      </p>
      <h2 className="text-6xl font-bold max-w-3xl text-center">
        IMPROVE YOUR{" "}
        <span className="font-normal text-slate-600">
          <TypingTextAnimation texts={texts}></TypingTextAnimation>
        </span>
        <span>SKILLS</span>
      </h2>
      <div className="text-center">
        <Link to="/classes">
          <button className="btn btn-outline border-0 border-b-4 mt-8 mx-auto text-white">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerCard;
