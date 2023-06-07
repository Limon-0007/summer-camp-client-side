import React from "react";

const Banner = () => {
  return (
    <>
    <div
      className="p-12 text-white bg-cover bg-fixed bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178645.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=country_rows_v1")',
          height: "90vh"
      }}
    >
      <p className="text-xl font-semibold max-w-3xl py-6">
        Our language center offers group and personal lessons in English and
        other modern languages for all ages and levels of knowledge.
      </p>
      <h2 className="text-6xl font-bold max-w-3xl text-center">IMPROVE YOUR <span className="font-light">ENGLISH</span> SKILLS</h2>
      <div className="text-center">
      <button className="btn btn-outline border-0 border-b-4 mt-8 mx-auto text-white">
        Enroll Now
      </button>
      </div>
    </div>
    </>
  );
};

export default Banner;
