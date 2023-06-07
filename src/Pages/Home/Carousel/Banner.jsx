import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {/* banner 1 */}
        <SwiperSlide>
         <BannerCard image="https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178645.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=country_rows_v1" texts="ENGLISH"></BannerCard>
        </SwiperSlide>
        {/* banner 2 */}
        <SwiperSlide>
        <BannerCard image="https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=country_rows_v1" texts="FRENCH"></BannerCard>
        </SwiperSlide>
        {/* banner 3 */}
        <SwiperSlide>
          <BannerCard image="https://img.freepik.com/premium-photo/day-international-school-teachers-blackboard-books-brazil_488220-712.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=country_rows_v1" texts="ITALIC"></BannerCard>
        </SwiperSlide>
        {/* banner 4 */}
        <SwiperSlide>
          <BannerCard image="https://img.freepik.com/premium-photo/open-book-with-graduation-hat-light-bulb-education-learning-school-university-idea-concept-3d-illustration_56345-604.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=country_rows_v1" texts="GERMAN"></BannerCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
