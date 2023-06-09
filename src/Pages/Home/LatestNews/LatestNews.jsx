import React from "react";
import Card from "../../../Components/Card/Card";

const LatestNews = () => {
  return (
    <div className="mt-36 mb-36">
      <h2 className="text-center font-bold text-4xl">Latest News</h2>
      <hr className="border mt-2 w-64 mx-auto" />
      {/* cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-6 mt-14">
        {/* card 1 */}
        <Card image="https://ld-wt73.template-help.com/tf/ispeak/images/grid-blog-1-339x251.jpg" date="May 12, 2023" text="7 Reasons to Study in Class Rather than Study Alone"></Card>
        {/* card 2 */}
        <Card image="https://ld-wt73.template-help.com/tf/ispeak/images/grid-blog-2-339x251.jpg" date="January 19, 2023" text="Test of Interactive English: Personal Experience"></Card>
        {/* card 3 */}
        <Card image="https://ld-wt73.template-help.com/tf/ispeak/images/grid-blog-3-339x251.jpg" date="October 22, 2023" text="5 Reasons Why You Should Consider Doing the FCE"></Card>
      </div>
    </div>
  );
};

export default LatestNews;
